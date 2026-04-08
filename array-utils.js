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

const addLast = (element) => {
  return (arr) => {
    // TODO
  };
};

const removeLast = (arr) => {
  // TODO
};

const keys = (arr) => {
  // TODO
};

const entries = (arr) => {
  // TODO
};

/**
 * Creates a copy of an array from start to end index
 *
 * @author Dimitar Markov
 * @param {number} start the start index to copy from
 * @param {number} end the end index to copy to (not included)
 * @return {sliceFunc} inner function
 */
const slice = (start, end) => {
  /**
   * @function sliceFunc
   * @param {array} arr the array to slice
   * @return {array} a copy of the array from start to end
   */
  return (arr) => {
    return arr.reduce((acc, el, index) => {
      return index >= start && index < end ? [...acc, el] : acc;
    }, [])
  };
};

/**
 * Concatenates the elements from one array with the elements of another
 *
 * @author Dimitar Markov
 * @param {array} arr the array to concatenate with
 * @return {concatFunc} inner function
 */
const concat = (arr) => {
  /**
   * @function concatFunc
   * @param {array} innerArr the array to concatenate into
   * @return {array} a new array with all elements from both arrays
   */
  return (innerArr) => {
      return [...innerArr,...arr];
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

const map = (mapperFn) => {
  return (arr) => {
    // TODO
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

/**
 * Returns true if at least one element passes the predicate condition
 *
 * @author Dimitar Markov
 * @param {function} predicate a function that accepts an element and returns a boolean
 * @return {someFunc} inner function
 */
const some = (predicate) => {
  /**
   * @function someFunc
   * @param {array} arr the array to iterate over
   * @return {boolean} true if at least one element passes, otherwise false
   */
  return (arr) => {
    return arr.filter((el) => predicate(el)).length > 0;
  };
};

/**
 * Returns true if all elements pass the predicate condition
 *
 * @author Dimitar Markov
 * @param {function} predicate a function that accepts an element and returns a boolean
 * @return {everyFunc} inner function
 */
const every = (predicate) => {
  /**
   * @function everyFunc
   * @param {array} arr the array to iterate over
   * @return {boolean} true if all elements pass, otherwise false
   */
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

/**
 * Creates an array from an object by using its length property
 *
 * @author Dimitar Markov
 * @param {{ length: number }} obj an object with a length property
 * @return {undefined[]} an array filled with undefined values
 */
const arrayFrom = ({ length }) => {
  return [...Array(length)];
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

/**
 * Maps each element using a mapping function and flattens the result
 *
 * @author Dimitar Markov
 * @param {function} mapperFn a function that accepts an element and returns an array
 * @return {flatMapFunc} inner function
 */
const flatMap = (mapperFn) => {
  /**
   * @function flatMapFunc
   * @param {array} arr the array to iterate over
   * @return {array} the mapped and flattened array
   */
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
