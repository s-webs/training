import {
	makePoint, getX, getY, toString as pointToString,
} from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeSegment = (pair1,pair2) => makePoint(pair1,pair2);
export const startSegment = getX(makePoint(car));
export const endSegment   = getX(makePoint(cdr));
export const segmentToString = pair =>
`[${pointToString(startSegment(pair))}, ${pointToString(endSegment(pair))}]`;
export const midpointSegment = pair =>
cons((getX(car(pair)) + getX(cdr(pair))) / 2, (getY(car(pair)) + getY(cdr(pair))) / 2);
// END