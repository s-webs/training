const getTrianglePerimeter = (a, b, c) => a + b + c;
const square = num => num * num;
// h - высота треугольника
// b - основание трукгольника
const getTriangleArea = (h, b) => {
	let A = 1/2 * h * b
	return A;
}
const solution = n => getTriangleArea(n, square(n) / 2);

