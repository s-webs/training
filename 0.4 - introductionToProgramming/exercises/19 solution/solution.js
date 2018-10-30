const length = str => str.length;
const toUpperCase = str => str.toUpperCase();
// the first letters will be big
const solution = (str) => {
	let result = "";
	let i = 0;
	for (i; i < length(str); i++) {
		if (i === 0) {
			result = result + toUpperCase(str[i])	
		} else if (str[i - 1] === " ") {
			result = result + toUpperCase(str[i])
		} else {
			result = result + str[i];
		}
	}
	return result;
}
console.log(solution("hello my friend"));