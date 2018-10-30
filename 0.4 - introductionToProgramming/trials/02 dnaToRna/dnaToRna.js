// Реализуйте и экспортируйте функцию по умолчанию,
// которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

// G -> C
// C -> G
// T -> A
// A -> U

// Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка),
// то функция должна вернуть пустую строку. 
// Если в переданной цепи ДНК встретится "незнакомый" нуклеотид 
// (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

// dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
// dnaToRna('CCGTA'); // 'GGCAU'
// dnaToRna(''); // ''
// dnaToRna('ACNTG'); // null


// Version 1.0
// const length = str => str.length;
// const dnaToRna = (str) => {
// 	let i = 0;
// 	let result = '';
// 	if (str === '') {
// 		return '';
// 	}
// 	while (i < length(str)) {
// 		if (str[i] === 'G') {
// 			result += 'C'
// 		} else if (str[i] === 'C') {
// 			result += 'G';
// 		} else if (str[i] === 'T') {
// 			result += 'A';
// 		} else if (str[i] === 'A') {
// 			result += 'U';
// 		} else {
// 			return null;
// 		}
// 		i++
// 	}
// 	return result;
// }
// console.log(dnaToRna('ACNTG'))


// Version 2.0
const length = str => str.length;
const dnaToRna = (str) => {
	let result = '';
	for (let i = 0; i < length(str); i++) {
		switch (str[i]) {
			case 'G': result+= 'C';
			break;

			case 'C': result+= 'G';
			break;

			case 'T': result+= 'A';
			break;

			case 'A': result+= 'U';
			break;

			default: return null;
		}
	}
	return result;
}
console.log(dnaToRna('CCGTA'))	// GGCAU
console.log(dnaToRna('')) 		// ''
console.log(dnaToRna('ACNTG'))	// null