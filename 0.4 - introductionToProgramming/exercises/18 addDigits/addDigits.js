const identity = str => str;
const length = str => str.length;

const countTheNumber = (num) => {
	let str = String(num);
	let result = 0;
	for (let i = 0; i < length(str); i++) {
		if (length(str) > 0) {
			result = result + Number(str[i]);
		}
	}
	return result;
}

const addDigits = (num) => {
	if (length(String(num)) === 1) {
		return num;
	} else {
		for (length(String(num)); length(String(num)) > 1;) {
			num = countTheNumber(String(num));
		}  
	}
	return num;
}

console.log(addDigits(1259));