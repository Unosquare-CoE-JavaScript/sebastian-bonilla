const {compose} = require('ramda');

const Box = f =>
({
    map: g => Box(compose(g, f)),
    fold: f
})


const result = Box(() => 2).map(two => two + 1).fold();

console.log(result);