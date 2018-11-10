import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (numer, denom) => cons(numer, denom);
export const numer = pair => car(pair);
export const denom = pair => cdr(pair);

export const add = (x, y) =>
make((numer(x) * denom(y)) + (numer(y) * denom(x)), denom(x) * denom(y));

export const sub = (x, y) =>
make((numer(x) * denom(y)) - (numer(y) * denom(x)), denom(x) * denom(y));

export const isEqual = (x, y) =>
numer(x) * denom(y) === numer(y) * denom(x);

export const mul = (x, y) =>
make(numer(x) * numer(y), denom(x) * denom(y));

export const div = (x, y) =>
make(numer(x) * denom(y), denom(x) * numer(y));

export const toString = rat => `${numer(rat)} / ${denom(rat)}`;
// END