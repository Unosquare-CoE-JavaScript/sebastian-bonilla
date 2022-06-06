var hits;
{ // an outer scope (but not a function)
    let count = 0;
    hits = function getCurrent() {
        count = count + 1;
        return count;
    };
}
console.log(hits()); // 1
console.log(hits()); // 2
console.log(hits()); // 3