// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)

export const append = (html, element) => consList(element, html);

export const node = (tag, value) => cons(tag, value);

export const name = element => car(element);

export const value = element => cdr(element);

export const toString = (dom) => {
	if (isEmpty(dom)) {
		return "";
	}
	return `${toString(tail(dom))}<${car(head(dom))}>${cdr(head(dom))}</${car(head(dom))}>`
}

// END