import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { value, is, filter } from 'hexlet-html-tags';

// BEGIN (write your solution here)

export const reduce = (func, acc, list) => {
    const iter = (elements, iterAcc) => {
        if (isEmpty(elements)) {
            return iterAcc;
        }
        const element = head(elements);
        const newAcc = func(element, iterAcc);
        return iter(tail(elements), newAcc);
    };
    return iter(list, acc);
};

export const emptyTagsCount = (tag, list) => {
    const filtered = filter(element => is(tag, element), list);
    return reduce((element, acc) => {
        return (value(element) === '') ? acc + 1 : acc;
    }, 0, filtered);
};

// END

export const headersCount = (tagName, elements) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return acc;
        }
        
        const item = head(items);
        const newAcc = is(tagName, item) ? acc + 1 : acc;
        return iter(tail(items), newAcc);
    };
    return iter(elements, 0);
};