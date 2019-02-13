import { map } from 'hexlet-pairs-data';
import { getAttribute, getName } from './tags';

// BEGIN (write your solution here)
const mapping = {
    img: tag => getAttribute('src', tag),
    a: tag => getAttribute('href', tag),
    link: tag => getAttribute('href', tag),
};

const extract = (list) => {
    const mapped = map(element => mapping[getName(element)](element), list);
    return mapped;
};

export default extract;
// END
