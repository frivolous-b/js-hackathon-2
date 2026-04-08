import {
  addFirst,
   addLast, // added from Ivo Karabashev
  removeFirst,
  removeLast,
  keys,
  entries,
  reverse,
  arrayFrom,
  pipe,
  compose,
  flat,
  fill,
  groupBy,
  reduce,
  map,
  slice,
  join,
  find,
  filter,
  concat,
  some,
  every,
  flatMap
} from './array-utils.js';

/*
*  Single function tests
*  Write tests for each function you have implemented
*/
// @author Ivo Karabashev
const addLastTest = () => {
  const arr = [1, 2, 3];
  const copy = addLast(5)(arr);
  console.log(arr);  // [1, 2, 3]
  console.log(copy); // [1, 2, 3, 5]
};

addLastTest();
////////////////////////////////////

const addFirstTest = () => {
  const arr = [1, 2, 3];

  const copy = addFirst(5)(arr);

  console.log(arr); // 1, 2, 3
  console.log(copy); // 5, 1, 2, 3
};

// addFirstTest();
// @author Ivo Karabashev 
const removeLastTest = () => { const arr = [1, 2, 3];
   const copy = removeLast(arr); 
   console.log(arr);
    console.log(copy); 
   };
    removeLastTest();
    // @author Ivo Karabashev
const mapTest = () => {
  const arr = [1, 2, 3];
  const copy = map(x=>x*2)(arr);
  console.log(arr);  // [1, 2, 3]
  console.log(copy); // ?
};
mapTest();
/**
@author Ivo Karabashev
@param {Function} predicate function that returns true or false for each element
*/
const filterTest = () => {
  const arr = [1, 2, 3, 4, 5];
  const copy = filter(x => x > 2)(arr);
  console.log(arr);  // [1, 2, 3, 4, 5]
  console.log(copy); // [3, 4, 5]
};

filterTest();
// @author Ivo Karabashev
const pipeTest = () => {
  const double = x => x * 2;
  const addOne = x => x + 1;
  
  const result = pipe(double, addOne)(3);
  console.log(result); // ?
};

pipeTest();
// @author Ivo Karabashev
const flatTest = () => {
  const arr = [1, [2, 3], [4, 5]];
  const copy = flat(arr);
  console.log(arr);  // [1, [2, 3], [4, 5]]
  console.log(copy); // ?
};

flatTest();
  // @author Ivo Karabashev
const reverseTest = () => {
  const arr = [1, 2, 3];
  console.log(reverse(arr)); // [3, 2, 1]
};
reverseTest();
// @author Ivo Karabashev
const fillTest = () => {
  const arr = [1, 2, 3, 4, 5];
  console.log(fill(0, 1, 3)(arr)); // [1, 0, 0, 4, 5]
};
fillTest();

// @author Ivo Karabashev
const joinTest = () => {
  const arr = [1, 2, 3];
  console.log(join('-')(arr)); // 1-2-3
};
joinTest();

const sliceTest = () => {
  console.log(slice(1, 3)([1, 2, 3, 4, 5]));
}

//sliceTest();

const concatTest = () => {
  console.log(concat([4, 5])([1, 2, 3]));
}

//concatTest();

const someTest = () => {
  console.log(some(x => x > 3)([1, 2, 3, 4, 5]));                                                                                           
  console.log(some(x => x > 10)([1, 2, 3, 4, 5]));                                                                                             
};

//someTest();

const everyTest = () => {
  console.log(every(x => x > 0)([1, 2, 3]));
  console.log(every(x => x > 2)([1, 2, 3]));
}

//everyTest();

const arrayFromTest = () => {
  console.log(arrayFrom({ length: 3 }));
}

//arrayFromTest();

const flatMapTest = () => {
  console.log(flatMap(x => [x, x * 2])([1, 2, 3]));
}

//flatMapTest();
/*
*  Composite functions tests
*/

const testOne = () => {
  const startValue = { length: 6 };
  const piped = pipe(
    arrayFrom,
    // [undefined, undefined, undefined, undefined, undefined, undefined]
    fill(1, 3, 6), // [undefined, undefined, undefined, 1, 1, 1]
    (arr) => [...arr, 8], // [undefined, undefined, undefined, 1, 1, 1, 8]
    (arr) => [...arr, 2, 3], // [undefined, undefined, undefined, 1, 1, 1, 8, 2, 3]
    slice(4, 7), // [1, 1, 8]
    removeFirst, // [1, 8]
    (arr) => [5, ...arr], // [5, 1, 8]
    reverse, // [8, 1, 5]
    map(x => x ** 2), // [64, 1, 25]
    reduce((a, b) => a + b, 0) // 90
  );

  console.log(piped(startValue));
};

 testOne();

const testTwo = () => {
  const startValue = [
    { name: 'Ivan', age: 15 },
    { name: 'Pesho', age: 32 },
    { name: 'Pesho', age: 23 },
    { name: 'Maria', age: 19 },
  ];
  // its compose so it will run backwardsnp
  const composed = compose(
    find(x => x > 10), // 47
    (arr) => [...arr, 9], // [ 47, 9 ]
    (str) => [str.length], // [ 47 ]
    join('&'), // 1&false&odd&2&true&even&3&false&odd&4&true&even
    flat,
    // [1, false, 'odd', 2, true, 'even', 3, false, 'odd', 4, true, 'even']
    (arr) => arr.map((el, index) => [el, index % 2 === 1, index % 2 === 0 ? 'odd' : 'even']),
    /* [[1, false, 'odd'],
        [2, true, 'even'],
        [3, false, 'odd'],
        [4, true, 'even']
      ]*/
    (arr) => arr.map((_, index) => index + 1),
    fill(true, 0, 7), // [true, true, true, true]
    (arr) => [...arr, 8], // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho'], 8]
    entries, // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho']]
    removeLast, // ['Ivan', 'Pesho', 'Pesho']
    (arr) => arr.map(obj => obj.name), // ['Ivan', 'Pesho', 'Pesho', 'Maria']
    flat,
    /* [{ name: 'Ivan', age: 15 },
        { name: 'Pesho', age: 32 },
        { name: 'Pesho', age: 23 },
        { name: 'Maria', age: 19 }
      ]*/
    Object.values,
    /* [[{ name: 'Ivan', age: 15 }],
        [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }],
        [{ name: 'Maria', age: 19 }]
      ]*/
    (arr) => groupBy(obj => obj.name)(arr)
    /* {Ivan: [{ name: 'Ivan', age: 15 }],
        Pesho: [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }],
        Maria: [{ name: 'Maria', age: 19 }]} */
  );

  console.log(composed(startValue));
};

// testTwo();

const testThree = () => {
  const startValue = [
    { name: 'Ivan', grades: [2, 4, 5] },
    { name: 'Pesho', grades: [3, 2, 6] },
    { name: 'Pesho', grades: [2, 5, 2] },
  ];
  const piped = pipe(
    filter(x => x.name === 'Pesho'),
    /* [{ name: 'Pesho', grades: [3, 2, 6] },
        { name: 'Pesho', grades: [2, 5, 2] }
      ];*/
    map(x => x.grades), // [[3, 2, 6], [2, 5, 2]]
    flat, // [3, 2, 6, 2, 5, 2]
    filter(x => x < 4), // [3, 2, 2, 2]
    groupBy(x => x), // { 2: [2, 2, 2], 3: [3] }
    Object.values, // [[2, 2, 2], [3]],
    flat, // [2, 2, 2, 3]
    (arr) => [7, ...arr], // [7, 2, 2, 2, 3]
    join('-'), // 7-2-2-2-3
    (str) => str.split(''), // ['7', '-', '2', '-', '2', '-', '2', '-', '3'],
    (filter((_, index) => index < 5)),
    map((el, index) => [index + 1, el]), // [[1, '7'], [2, '-'], [3, '2'], [4, '-'], [5, '2']]
    keys, // [0, 1, 2, 3, 4]
    removeFirst, // [1, 2, 3, 4]
    reduce((a, b) => a * b, 1) // 24
  );

  console.log(piped(startValue));
};
 testThree();
const keysTest = () => {
  const arr = ['a', 'b', 'c', 'd'];

  console.log(keys(arr)); // [0, 1, 2, 3]
};

// keysTest();
const reduceTest = () => {
  const arr = [10, 20, 30, 40];

  console.log(reduce((acc, el) => acc + el, 0)(arr)); // 100
};

// reduceTest();
const findTest = () => {
  const arr = [5, 12, 18, 20, 25];

  console.log(find((x) => x > 15)(arr)); // 18
};

// findTest();
const composeTest = () => {
  const composed = compose(
    (x) => x + 1,
    (x) => x * 2
  );

  console.log(composed(5)); // 11
};

// composeTest();
const groupByTest = () => {
  const people = [
    { name: 'Ivan', age: 20 },
    { name: 'Pesho', age: 21 },
    { name: 'Maria', age: 20 },
  ];

  console.log(groupBy((person) => person.age)(people));
  /*
  {
    '20': [
      { name: 'Ivan', age: 20 },
      { name: 'Maria', age: 20 }
    ],
    '21': [
      { name: 'Pesho', age: 21 }
    ]
  }
  */
};

// groupByTest();