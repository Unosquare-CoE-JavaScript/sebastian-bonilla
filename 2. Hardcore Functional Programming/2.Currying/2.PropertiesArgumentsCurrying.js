const curry = require('ramda');

// to pair from pair

const add = (x, y) => x + y

const toPair = f =>
    ([x, y]) => f(x, y)

const fromPair = f =>
    (x, y) => f([x, y])

const result = fromPair(toPair(add))(1, 2)
console.log(result)

// flip

const flip = f =>
    (y, x) => f(x, y)

const resultflip = flip(add)(1, 3)

console.log(resultflip)

// currying!

/* const curry = f =>
    x => y => f(x, y)

const uncurry = f =>
    (x, y) => f(x)(y) */

const curriedAdd = curry(add)
const increment = curriedAdd(1)

const resultCurry = increment(2)
console.log(resultCurry)

// modulo
const modulo = curry((x, y) => y % x);

const isOdd = modulo(2);
const oddResult = isOdd(3);

console.log(oddResult);

// modulo with filter
const filter = curry((f, xs) => xs.filter(f));

const getOdds = filter(isOdd);
const resultFilter = getOdds([1, 2, 3, 4, 5])

// replace vowels

const replace = curry((regex, replacement, str) => str.replace(regex, replacement));

const replaceVowels = replace(/[AEIOU]/ig, '!');

const resultForVowels = replaceVowels('Hey i have words');