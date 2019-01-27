import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)

export const extractHeaders = (html) => {
    const filtered = filter(element => is('h2', element), html);
    const result = map(element => node('p', value(element)), filtered);
    return result;
};

export const wordsCount = (tag, content, html) => {
    const filtered = filter(element => is(tag, element), html);
    const result = map(element => value(element), filtered);
    return wc(content, listToString(result));
};

// END