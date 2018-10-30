const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let sum = 0;
  for (let i = 0; i < length(str); i++) {
  	let letter = toUpperCase(str[i]) === str[i];
  	if (letter === true || letter === ' ') {
  		sum++;
  	}
  }
  return sum;
  // END
};

const compare = (first, second) => {
	const firstCount = bigLettersCount(first);
	const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
  	return 1;
  } else if (firstCount < secondCount) {
  	return -1;
  } else {
  	return 0;
  }

  // END
};
console.log(compare('', ''));

const greaterThan = (first, second) =>
compare(first, second) === 1;

const lessThan = (first, second) =>
compare(first, second) === -1;

const isEqual = (first, second) =>
compare(first, second) === 0;