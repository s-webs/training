import square from './square';

import { getTriangleArea } from './myMathModule';

const solution = n => getTriangleArea(n, square(n) / 2);

export default solution;
