const length = str => str.length;
const substr = (str, a = 0, b = length(str)) => {
	if (a < 0) {
		a = 0;
	}
	if (b < 0) {
		b = 1;
	}
	let sub = str.substr(a, b);
	return sub;
};
console.log('Hello', 2, 4);