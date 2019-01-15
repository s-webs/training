import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)

export const has = (list, element) => {
    if (head(list) === element) return true;
    if (isEmpty(tail(list))) {
        return tail(list) === element;
    }
    return has(tail(list), element);
};

export const reverse = (list) => {
    if (isEmpty(list)) return l();
    const iter = (count, acc) => {
        if (isEmpty(count)) {
            return acc;
        }
        return iter(tail(count), cons(head(count), acc));
    };
    return iter(list, l());
};

export const concat = (list1, list2) => {
    if (isEmpty(list1)) return list2;
    return cons(head(list1), concat(tail(list1), list2));
};
// END