// easy

/**
 * Add an element at front of the array
 *
 * @param {any} element the element to add
 * @return {addFirstFunc} inner function
 */
const addFirst = (element) => {
  /**
   * @function addFirstFunc
   * @param {array} array an array to add element into
   * @return {array} a copy of the array with the element added
   */
  return (arr) => [element, ...arr];
};

const removeFirst = (arr) => arr.slice(1); // it does not take additional parameters to be splitted
/**
 * Add an element at the back of the array
 *
 * @author Ivo Karabashev
 * @param {any} element the element to add
 * @return {addLastFunc} inner function
 */
const addLast = (element) => { 
  return (arr) => [...arr, element];
};
/**
 * Removes the last element of the array
 *
 * @author Ivo Karabashev
 * @param {array} arr the array to remove from
 * @return {array} a copy of the array without the last element
 */

const removeLast = (arr) => {
  return arr.slice(0, arr.length - 1);
};

const keys = (arr) => {
  // TODO
};

const entries = (arr) => {
  // TODO
};

const slice = (start, end) => {
  return (arr) => {
    // TODO
  };
};

const concat = (arr) => {
  return (innerArr) => {
    // TODO
  };
};

// medium

const reverse = (arr) => {
  // TODO
};

const join = (separator) => {
  return (arr) => {
    // TODO
  };
};

const find = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const fill = (value, start, end) => {
  return (arr) => {
    // TODO
  };
};

const forEach = (fn) => {
  return (arr) => {
    // TODO
  };
};
/**
 * Transform each element of the array using a mapping function
 *
 * @author Ivo Karabashev
 * @param {Function} mapperFn the mapping function
 * @return {Function} inner function
 */
const map = (mapperFn) => {
     return (arr) => 
      { return arr.reduce((acc, el) =>  [...acc, mapperFn(el)], [])
  };
};

const filter = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const reduce = (fn, initialValue) => {
  return (arr) => {
    // TODO
  };
};

const reduceRight = (fn, initialValue) => {
  return (arr) => {
    // TODO
  };
};

const some = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const every = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const includes = (element) => {
  return (arr) => {
    // TODO
  };
};

const indexOf = (searchedElement) => {
  return (arr) => {
    // TODO
  };
};

const findIndex = (predicate) => {
  return (arr) => {
    // TODO
  };
};

// hard

const arrayFrom = ({ length }) => {
  // TODO
};

const pipe = (...fns) => {
  return (input) => {
    // TODO
  };
};

const compose = (...fns) => {
  return (input) => {
    // TODO
  };
};

const flat = (arr) => {
  // TODO
};

const flatMap = (mapperFn) => {
  return (arr) => {
    // TODO
  };
};

const groupBy = (groupingFn) => {
  return (arr) => {
    // TODO
  };
};

export {
  addFirst,
  removeFirst,
  addLast,
  removeLast,
  keys,
  entries,
  slice,
  concat,
  reverse,
  join,
  find,
  fill,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  some,
  every,
  includes,
  indexOf,
  findIndex,
  arrayFrom,
  pipe,
  compose,
  flat,
  flatMap,
  groupBy,
};
