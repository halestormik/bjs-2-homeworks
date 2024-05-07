class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback) {
      if (time === undefined || callback === undefined) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
      if (this.alarmCollection.find(alarm => alarm.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
      }
      this.alarmCollection.push({
        callback,
        time,
        canCall: true
      });
    }
  
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
  
    getCurrentFormattedTime() {
      let date = new Date();
      return `${date.getHours()}:${date.getMinutes()}`;
    }
  
    start() {
      if (this.intervalId !== null) {
        return;
      }
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach(alarm => {
          if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000);
    }
  
    stop() {
      if (this.intervalId === null) {
        return;
      }
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    resetCalls() {
      this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }