studentName = "Suzy";
greeting();
// Hello Suzy!
function greeting() {
    console.log(`Hello ${studentName}!`);
}
var studentName;


/** Re-arranged, like this */

function greeting() {
    console.log(`Hello ${studentName}!`);
}
var studentName;
studentName = "Suzy";
greeting();
    // Hello Suzy!