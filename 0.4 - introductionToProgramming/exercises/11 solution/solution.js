const smallestDivisor = (num) => {
	let acc = 1;
	if (num < 1) {
		return NaN;
	}
	if (num === 1) {
		return 1;
	}
	while (acc <= num) {
		acc++;
		if(num % acc === 0) {
			return acc;
		}
	}
}
console.log(smallestDivisor(17));	