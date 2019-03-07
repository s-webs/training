// BEGIN (write your solution here)
export default (list, func) =>
list.reduce((acc, element) => ({...acc, [func(element)] : element}), {});
// END