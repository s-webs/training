import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line

// BEGIN (write your solution here)
export const getQuadrant = (point) => {
	return (getX(point) > 0) && (getY(point) > 0) ? 1 :
	(getX(point) < 0) && (getY(point) > 0) ? 2 :
	(getX(point) < 0) && (getY(point) < 0) ? 3 :
	(getX(point) > 0) && (getY(point) < 0) ? 4 :
	null;
};
export const getSymmetricalPoint = (point) => {
	return makePoint(-getX(point), -getY(point));
};

export const calculateDistance = (point1, point2) => {
	return Math.sqrt(((getX(point2) - getX(point1)) ** 2) + ((getY(point2) - getY(point1)) ** 2));
};
// END
