// easy
//=====================================
/**LYUDMIL
 * Add an element at front of the array
 *
 * @param {any} element the element to add
 * @return {addFirstFunc} inner function
 */
const addFirst = (element) => {  
  return (arr) => [element, ...arr];
};

const removeFirst = (arr) => arr.slice(1); // it does not take additional parameters to be splitted

const addLast = (element) => {
  return (arr) => {
  //todo
  };
};

const removeLast = (arr) => {
  // TODO
};
/**
 * Get the array's valid indexes
 *
 * @author Lyudmil
 * @param {any[]} arr the array to get the indexes from
 * @returns {number[]} returns a new array with the valid indexes
 */
const keys = (arr) => {
  // Lyudmil
const keys = (arr) => arr.map((_, index) => index);
};
//==================================================
/**
 * Get the array's entries as [index, element]
 *
 * @author Lyudmil
 * @param {any[]} arr the array to get the entries from
 * @returns {Array<[number, any]>} returns a new array with [index, element] pairs
 */

const entries = (arr) => {
  // Lyudmil
  const entries = (arr) => arr.map((element, index) => [index, element]);
};
//================================
const slice = (start, end) => {
  return (arr) => {
    const entries = (arr) => arr.map((element, index) => [index, element]);
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
//==================================================
/**
 * Reduce array elements to a single value
 *
 * @author Lyudmil
 * @param {(acc: any, el: any) => any} fn reducer function
 * @param {any} initialValue initial accumulator value
 * @returns {(arr: any[]) => any} closure that reduces the array
 */
const reduce = (fn, initialValue) => {
  return (arr) => {
    const iterate = (index, acc) => {
      if (index >= arr.length) {
        return acc;
      }

      return iterate(index + 1, fn(acc, arr[index]));
    };

    return iterate(0, initialValue);
    //LD
  };
};
//======================================================
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
//=======================================
/**
 * Find the first element that matches the predicate or return null
 *
 * @author Lyudmil
 * @param {(el: any, index: number) => boolean} predicate function used to test elements
 * @returns {(arr: any[]) => any | null} closure returning the first matching element
 */

const findIndex = (predicate) => {
  return (arr) => {
    const search = (index) => {
      if (index >= arr.length) {
        return null;
      }

      return predicate(arr[index], index) ? arr[index] : search(index + 1);
    }
    return search(0);// Lyudmil
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

//===============================
/**
 * Compose functions from right to left
 *
 * @author Lyudmil
 * @param {...Function} fns functions to compose
 * @returns {(input: any) => any} closure that runs the functions in reverse order
 */
const compose = (...fns) => {
  return (input) => {
    const run = (index, value) => {
      if (index < 0) return value;
      return run(index - 1, fns[index](value));
    };

    return run(fns.length - 1, input); //Lyudmil
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
/**
 * Group array elements by a grouping function
 *
 * @author Lyudmil
 * @param {(el: any) => any} groupingFn function returning the group key
 * @returns {(arr: any[]) => object} closure that groups elements in an object
 */
const groupBy = (groupingFn) => {
  return (arr) => {
    return arr.reduce((acc, el) => {
      const key = groupingFn(el);

      return {
        ...acc,
        [key]: [...(acc[key] || []), el],
      };
    }, {});//Lyudmil
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
