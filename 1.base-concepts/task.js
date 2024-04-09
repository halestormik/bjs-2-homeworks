"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant === 0) {
		arr.push("Корень квадратного уравнения один и равен: " + (-b / (2 * a)));
	} else if (discriminant > 0) {
		arr.push("Первый корень квадратного уравнения: " + (-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push("Второй корень квадратного уравнения: " + (-b - Math.sqrt(discriminant)) / (2 * a));
	} else {
		arr.push("Корней нет");
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}