const fs = require('fs');

const Right = x =>
({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    toString: `Right(${x})`
})

const Left = x =>
({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    toString: `Left(${x})`
})

// fromNullable
const fromNullable = x => x != null ? Right(x) : Left()

//trycatch function
const tryCatch = f => {
    try {
        return Right(f())
    } catch (e) {
        return Left(e)
    }
}

//not pure function
const getPort_ = () => {
    try {
        const str = fs.readFileSync('config.json');
        const config = JSON.parse(str);
        return config.port;
    } catch (e) {
        return 3000;
    }
}

const readFileSync = name =>
    tryCatch(() => fs.readFileSync(name))

// exactly pure function
const getPort = () => {
    readFileSync('config.json')
        .map(contents => JSON.parse(contents))
        .map(config => config.port)
        .fold(() => 8000, x => x)
}

console.log(getPort());