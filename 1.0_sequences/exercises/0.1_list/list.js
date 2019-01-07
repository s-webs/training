import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export const has = (list, value) => {
  if (isEmpty(list) === true) {
    return false;
  } 
  if (head(list) === value) {
    return true;
  } else {
    return has(tail(list),value);
  }
};

export const reverse = (list) => {
  const iter = (items, acc) => {
    if (isEmpty(items) === true) {
      return acc;
    } else {
      return iter(tail(items), cons(head(items), acc))
    }
  }
  return iter(list, l());
}

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  return cons(head(list1), concat(tail(list1), list2));
};

// END