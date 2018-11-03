import { cons, car, cdr, isPair, toString } from 'hexlet-pairs';

// reversePair - принимает на вход пару и возвращает другую,
// в которой значения переставлены местами
const reversePair = (pair) => cons(cdr(pair),car(pair));

// SumOfPairs - принимает на вход две пары и возвращает новую пару,
// в элементах которой находятся суммы элементов из исходных пар
const sumOfPairs = (pair1,pair2) => cons(car(pair1) + car(pair2), cdr(pair1) + cdr(pair2));

// findPrimitiveBox - принимает на вход пару,
// находит внутри нее пару без вложенных пар  и возвращает наружу.
const findPrimitiveBox = box => {
	const box1 = car(box);
	const box2 = cdr(box);
	if (isPair(box1) === false && isPair(box2) === false) return box;
	if(isPair(box1) === true) return findPrimitiveBox(box1);
	if(isPair(box2) === true) return findPrimitiveBox(box2);
};
