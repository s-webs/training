const square = (num) => {
	return num * num
};
const sumOfSquares = (a, b) => {
	return square(a) + square (b);
}
const squareSumOfSquares = (a, b) => {
	return sumOfSquares(a, b) * sumOfSquares(a, b);
}
console.log(squareSumOfSquares(1, 1));