
const partialApply = (func, arg1) => arg2 => func(arg2, arg1);

const f1 = partialApply((a, b) => a ** b, 2)

console.log(f1(10))