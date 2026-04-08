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

const keys = (arr) => arr.map((_, index) => index);
  


const entries = (arr) => {
 arr.map((element, index) => [index, element]);
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
    }, []);
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
    return [...innerArr, ...arr];
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
  return (arr) => {
    return arr.reduce((acc, el, index) => predicate(el, index) ? [...acc, el] : acc, []);
  };
};

const reduce = (fn, initialValue) => {
  return (arr) => { 
    const iterate = (index, acc) => {
      if (index >= arr.length) return acc;
      return iterate(index + 1, fn(acc, arr[index]));
    };
    return iterate(0, initialValue);
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
    const run = (index, value) => {
      if (index < 0) return value;
      return run(index - 1, fns[index](value));
    };
    return run(fns.length - 1, input);
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
   return arr.reduce((acc, el) => {
      const key = groupingFn(el);
      return { ...acc, [key]: [...(acc[key] || []), el] };
    }, {});
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
