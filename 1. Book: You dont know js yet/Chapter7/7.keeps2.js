var keeps = [];
for (var i = 0; i < 3; i++) {
    // new `j` created each iteration, which gets
    // a copy of the value of `i` at this moment
    let j = i;
    // the `i` here isn't being closed over, so
    // it's fine to immediately use its current
    // value in each loop iteration
    keeps[i] = function keepEachJ() {
        // close over `j`, not `i`!
        return j;
    };
}
console.log(keeps[0]()); // 0
console.log(keeps[1]()); // 1
console.log(keeps[2]()); // 2