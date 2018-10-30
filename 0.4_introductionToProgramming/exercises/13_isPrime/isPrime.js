const isPrime = (num) => {
	let acc = 1;
	if (num < 1) {
		return false;
	}
	if (num === 1) {
		return false;
	}
	for (acc = 2; acc <= num ; acc++) {
		if(num % acc === 0) {
			if (acc === num) {
				return true;
			} else {
				return false;
			}
		}
	}
}
console.log(smallestDivisor(13));