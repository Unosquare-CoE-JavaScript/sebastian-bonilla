const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    toString: () => `Box(${x})`
})

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces




// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================

//const moneyToFloat = str =>
//  parseFloat(str.replace(/\$/, ''))

const moneyToFloat = str =>
    Box(str)
        .map(str => str.replace(/\$/, ''))
        .fold(parseFloat)


QUnit.test("Ex1: moneyToFloat", assert => {
    assert.equal(String(moneyToFloat('$5.00')), 5)
})





// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================

//const percentToFloat = str => {
//  const float = parseFloat(str.replace(/\%/, ''))
//  return float * 0.0100
//}

const percentToFloat = str =>
    Box(str)
        .map(str => str.replace(/\%/, ''))
        .map(parseFloat)
        .fold(parsed => parsed * 0.0100)


QUnit.test("Ex2: percentToFloat", assert => {
    assert.equal(String(percentToFloat('20%')), 0.2)
})





// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================

//const applyDiscount = (price, discount) => {
//  const cents = moneyToFloat(price)
//  const savings = percentToFloat(discount)
//  return cents - (cents * savings)
//}

const applyDiscount = (price, discount) =>
    Box(price)
        .map(moneyToFloat)
        .fold(
            cents => cents - (cents * Box(discount).fold(percentToFloat))
        )



QUnit.test("Ex3: Apply discount", assert => {
    assert.equal(String(applyDiscount('$5.00', '20%')), 4)
})