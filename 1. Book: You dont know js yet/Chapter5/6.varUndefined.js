var studentName = "Frank";
console.log(studentName); // Frank

var studentName;
console.log(studentName); // Frank <--- still!

// let's add the initialization explicitly
var studentName = undefined;
console.log(studentName); // undefined <--- see!?