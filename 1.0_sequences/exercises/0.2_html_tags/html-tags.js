// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();

// BEGIN (write your solution here)

export const node = (name, value) => cons(name, value);
export const name = element => car(element);
export const value = element => cdr(element);

export const append = (list, element) => consList(element, list);

export const toString = (html) => {
    if (isEmpty(html)) return '';
    return `${toString(tail(html))}<${car(head(html))}>${cdr(head(html))}</${car(head(html))}>`;
};

// END