import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';

let methods = l();

export const getMethod = (obj, methodName) => {
    // BEGIN (write your solution here)
    const iter = (list) => {
        if (isEmpty(list)) return null;
        if (typeTag(head(list)) === typeTag(obj)) {
            if (car(contents(head(list))) === methodName) return cdr(contents(head(list)));
            if (car(cdr(head(cdr(methods)))) === typeTag(obj)) return cdr(cdr(head(cdr(methods))));
        }
        return iter(tail(list));
    };
    return iter(methods);
    // END
};

export const definer = type =>
(methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
};