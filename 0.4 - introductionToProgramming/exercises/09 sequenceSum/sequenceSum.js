const sequenceSum = (begin, end) => {
	if (begin > end) {
		return NaN;
	} else if (begin === end) {
		return end;
	}
	return begin + sequenceSum(begin + 1, end);
};

console.log(sequenceSum(1, 10))