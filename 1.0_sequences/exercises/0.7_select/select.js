// eslint-disable-next-line
import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)

const select = (tag, list) => {
    const iter = (elements, acc) => {
        const newAcc = hasChildren(elements) ? concat(select(tag, children(elements)), acc) : acc;
        return is(tag, elements) ? consList(elements, newAcc) : newAcc;
    };
    return reduce(iter, l(), list);
};

export default select;

// END