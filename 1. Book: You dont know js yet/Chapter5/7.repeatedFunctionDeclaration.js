var greeting;
function greeting() {
    console.log("Hello!");
}
// basically, a no-op
var greeting;
console.log(typeof greeting); // "function"

greeting();

var greeting = "Hello!";
console.log(typeof greeting); // "string"
