"use strict"

function solveEquation(a, b, c) {
	const arr = [];
	const discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = +percent;
	contribution = +contribution;
	amount = +amount;
	countMonths = +countMonths;

	percent = percent / 100;
	const monthlyPercent = percent / 12; // месячная ставка
	const creditBody = amount - contribution; // тело кредита = сумма кредита минус первоначальный взнос
	const monthlyPay = creditBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1))); // ежемесячный платеж
	const summaryPayment = (monthlyPay * countMonths).toFixed(2); // общая сумма выплат

	return +summaryPayment;

}