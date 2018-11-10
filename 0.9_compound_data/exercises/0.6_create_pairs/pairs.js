const cons = (x, y) => f => f(x, y);

const car = (f) => f((x,y) => x);
const cdr = (f) => f((x,y) => y);
