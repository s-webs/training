import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings';

// BEGIN (write your solution here)
export const map = (func, list) => {
    const iter = (count, acc) => {
        if (isEmpty(count)) {
            return acc;
        }
        return iter(tail(count), node(func(head(count)), acc));
    };
    return iter(reverse(list), l());
};

export const mirror = list => (
    map(element => node(name(element), reverseStr(value(element))), list)
    );
    // END
    
    export const b2p = (elements) => {
        if (isEmpty(elements)) {
            return l();
        }
        
        let newElement;
        const element = head(elements);
        if (is('blockquote', element)) {
            newElement = node('p', value(element));
        } else {
            newElement = element;
        }
        
        return cons(newElement, b2p(tail(elements)));
    };