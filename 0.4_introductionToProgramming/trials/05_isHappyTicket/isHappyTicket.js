// Счастливым билетом называют такой билет с шестизначным номером, 
// где сумма первых трех цифр равна сумме последних трех.

// Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
// isHappyTicket.js

// Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер 
// счастливым (номер может быть как числового, так и строкового типа: см. примеры ниже). 
// Функция должна возвращать true, если билет счастливый, или false, если нет.

// Примеры использования:

// import isHappyTicket from './isHappyTicket';

// isHappyTicket(385916); // true
// isHappyTicket(231002); // false
// isHappyTicket(128722); // true
// isHappyTicket('054702'); // true

const length = str => str.length;
const sumNumbers = (n) => {
	let string = String(n)
	let result = 0;
	let i = 0;
	while (i < length(string)) {
		result += Number(string[i]);
		i++;
	}
	return result;
}
const isHappyTicket = (n) => {
	let string = String(n)
	let firstNumbers = Number(string.substr(0, 3));
	let lastNumbers = Number(string.substr(3, 6));
	return sumNumbers(firstNumbers) === sumNumbers(lastNumbers);
}
console.log(isHappyTicket(123321));   // true
console.log(isHappyTicket('000001')); // false
console.log(isHappyTicket('060006')); // true
