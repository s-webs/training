import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const filter = (func, elements) => {
    const iter = (count, acc) => {
        if (isEmpty(count)) {
            return acc;
        }
        if (func(head(count))) {
            return iter(tail(count), append(acc, head(count)));
        }
        return iter(tail(count), acc);
    };
    return iter(reverse(elements), l());
};

export const quotes = (list) => {
    const filtered = filter(element => is('blockquote', element), list);
    return map(element => value(element), filtered);
};
// END