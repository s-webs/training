
// apply.js

// Реализуйте и экспортируйте по умолчанию функцию apply,
// которая принимает на вход три параметра:

// Количество раз, которое нужно применить функцию к аргументу
// (ряд последовательных вызовов, где каждому следующему вызову передается аргумент,
//  являющийся результатом предыдущего вызова функции; см. примеры ниже)
// Функцию для применения
// Аргумент для применения

// apply(0, Math.sqrt, 4); // => 4
// apply(1, Math.sqrt, 4); // => 2

// Math.sqrt(Math.sqrt(16));
// apply(2, Math.sqrt, 16); // => 2

// Math.sqrt(Math.sqrt(Math.sqrt(256)));
// apply(3, Math.sqrt, 256); // => 2
// apply(1, v => v ** 2, 3); // => 9
// apply(5, v => v + 10, 3); // => 53

const apply = (iter, param, num) => {
	let result = num;
	if (iter === 0) return num;
	if (iter > 0) result = param(result);
	if (iter === 0) return param(result);
	else return apply(iter-1,param,result)
}
console.log(apply(3, Math.sqrt, 256));


// expect(apply(0, Math.sqrt, 4)).toBe(4);
// expect(apply(1, Math.sqrt, 4)).toBe(2);
// expect(apply(2, Math.sqrt, 16)).toBe(2);

// expect(apply(1, v => v ** 2, 3)).toBe(9);
// expect(apply(5, v => v + 10, 3)).toBe(53);