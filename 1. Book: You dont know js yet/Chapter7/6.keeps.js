var keeps = [];
for (var i = 0; i < 3; i++) {
    keeps[i] = function keepI() {
        // closure over `i`
        return i;
    };
}
console.log(keeps[0]()); // 3 -- WHY!?
console.log(keeps[1]()); // 3
console.log(keeps[2]()); // 3