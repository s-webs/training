// BEGIN (write your solution here)
const isPowerOfThree = (num) => {
    for (let i = 0; i <= num; i += 1) {
        if ((3 ** i) === num) {
            return true;
        }
    }
    return false;
};

export default isPowerOfThree;
// END