// BEGIN (write your solution here)
export default arr => arr.reduce((acc, element) => {
    if (acc.includes(element)) {
        return acc;
    }
    return acc.concat(element);
}, []);
// END