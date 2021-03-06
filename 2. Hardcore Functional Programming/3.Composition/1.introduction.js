const add = (x, y) => x + y;

const toUpper = str => str.toUpperCase();

const exclaim = str => str + '!';

const first = xs => xs[0];

const compose = (f, g) => x => f(g(x));

const shout = compose(exclaim, toUpper);

console.log(shout('tears'))
