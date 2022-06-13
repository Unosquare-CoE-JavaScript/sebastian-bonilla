const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: `Box(${x})`
})

const compose = (f, g) => x => Box(x).map(g).fold(f)