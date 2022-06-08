function makeCounter() {
    var count = 0;
    return getCurrent(){
        count = count + 1;
        return count;
    };
}
var hits = makeCounter();
// later
hits(); // 1
// later
hits(); // 2
hits(); // 3