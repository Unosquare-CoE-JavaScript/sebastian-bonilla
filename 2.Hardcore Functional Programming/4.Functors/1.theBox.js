const first = xs => xs[0]

const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: `Box(${x})`
})

const nextCharForNumberString = str =>
    Box(str)
        .map(x => x.trim())
        .map(trimmed => parseInt(trimmed, 10))
        .map(number => new Number(number + 1))
        .fold(String.fromCharCode)

const result = nextCharForNumberString('  64 ');

console.log(result);

// half the first large number

const halfTheFirstLargeNumber = xs =>
    Box(xs)
        .map(xs => xs.filter(x => x >= 20))
        .map(found => first(found) / 2)
        .fold(answer => `The answer is ${answer}`)

console.log(halfTheFirstLargeNumber([1, 4, 50]));


// what about inline function
const halfTheFirstLargeNumberChain = xs =>
    console.log(`The answer is ${first(xs.filter(x => x >= 20)) / 2}`)

halfTheFirstLargeNumberChain([1, 4, 50]);


