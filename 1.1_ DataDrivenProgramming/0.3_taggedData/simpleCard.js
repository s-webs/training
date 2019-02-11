import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { attach, contents } from './type';

// BEGIN (write your solution here)

export const make = (name, dmg) => attach('SimpleCard', cons(name, dmg));
export const getName = self => car(contents(self));
export const damage = self => cdr(contents(self));

// END