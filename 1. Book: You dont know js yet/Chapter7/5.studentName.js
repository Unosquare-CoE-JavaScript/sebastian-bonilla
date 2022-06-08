var studentName = "Frank";
var greeting = function hello() {
    // we are closing over `studentName`,
    // not "Frank"
    console.log(
        `Hello, ${studentName}!`
    );
}

// later
studentName = "Suzy";
// later
greeting();
// Hello, Suzy!