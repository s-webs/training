// Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает
// разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

// square of numbers
const square = num => num * num;

// sum of squares of first numbers
const sumSquares = (n) => {
	let result = 0;
	while (n > 0) {
		result += square(n);
		n--;
	}
	return result;
};

// square of the sum of the first numbers
const squareSum = (n) => {
	let result = 0;
	while (n > 0) {
		result += n;
		n--
	}
	return square(result);
};

// the difference between the square of the sum and the sum of the squares of the first numbers
const sumSquareDifference = (n) => {
	return squareSum(n) - sumSquares(n);
}
console.log(sumSquareDifference(15));