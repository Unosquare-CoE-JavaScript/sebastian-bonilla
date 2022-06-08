var studentName = "Kyle";
let studentID = 42;

function hello() {
    console.log(`Hello, ${self.studentName}!`);
}

self.hello();
// Hello, Kyle!
self.studentID;
// undefined