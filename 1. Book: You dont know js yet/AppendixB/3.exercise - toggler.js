function toggle(...args) {
    const possibilities = [...args];
    let currentPosibilitie = -1;

    return function toggleFunction() {
        currentPosibilitie = (currentPosibilitie + 1) < possibilities.length ? currentPosibilitie + 1 : 0
        return possibilities[currentPosibilitie];
    }
}

var hello = toggle("hello");
var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");

console.log(hello()); // "hello"
console.log(hello()); // "hello"
console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"