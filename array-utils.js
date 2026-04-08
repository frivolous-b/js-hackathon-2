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
    return arr.reduce((acc, el, index) => {
      return index >= start && index < end ? [...acc, el] : acc;
    }, [])
  };
};

const concat = (arr) => {
  return (innerArr) => {
      return [...innerArr,...arr];
  };
};

// medium
/**
 * Creates a reversed copy of the array
 *
 * @author Ivo Karabashev
 * @param {array} arr the array to reverse
 * @return {array} the reversed array
 */

const reverse = (arr) => {
  
  return arr.reduce((acc, el) => [el, ...acc], []);
};
/**
 * Converts all elements in array into a string separated by separator
 *
 * @author Ivo Karabashev
 * @param {string} separator the element separator
 * @return {Function} inner function
 */

const join = (separator) => {
  return (arr) => 
     arr.reduce((acc, el, i) => i === 0 ? `${el}` : `${acc}${separator}${el}`, '');

};

const find = (predicate) => {
  return (arr) => {
    // TODO
  };
};
/**
 * Fills elements of array with value from start up to end
 *
 * @author Ivo Karabashev
 * @param {any} value the value to fill with
 * @param {number} start the start position
 * @param {number} end the end position
 * @return {Function} inner function
 */

const fill = (value, start, end) => {
  return (arr) =>  arr.map((el, i) => i >= start && i < end ? value : el);

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
/**
 * Iterates over elements and returns a new array with elements that pass the predicate
 *
 * @author Ivo Karabashev
 * @param {Function} predicate function that returns true or false for each element
 * @return {Function} inner function
 */
const filter = (predicate) => {
  return (arr) => { return arr.reduce((acc, el) => predicate(el) ? [...acc, el] : acc, []);
    
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
    return arr.filter((el) => predicate(el)).length > 0;
  };
};

const every = (predicate) => {
  return (arr) => {
    return arr.filter((el) => predicate(el)).length === arr.length;
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
  return [...Array(length)];
};
/**
 * Accepts functions and executes them left to right, passing the result of each to the next
 *
 * @author Ivo Karabashev
 * @param {Function[]} fns the functions to pipe
 * @return {Function} inner function
 */

const pipe = (...fns) => {
  return (input) => {
    return fns.reduce((acc, el) => el(acc), input);
  };
};

const compose = (...fns) => {
  return (input) => {
    // TODO
  };
};
/**
 * Creates a copy of the array and replaces inner arrays with their own elements one level deep
 *
 * @author Ivo Karabashev
 * @param {array} arr the array to flatten
 * @return {array} the flattened array
 */

const flat = (arr) => {

   return arr.reduce((acc, el) => Array.isArray(el) ? [...acc, ...el] : [...acc, el], []);

};

const flatMap = (mapperFn) => {
  return (arr) => {
    return arr.reduce((acc, element) => {
      return [...acc, ...mapperFn(element)];
    }, []);
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
