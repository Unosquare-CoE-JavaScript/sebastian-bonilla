var studentName = "Suzy";

function printStudent(studentName) {
    console.log(studentName);
    console.log(global.studentName);
}

printStudent("Frank");

// "Frank"
// "Suzy"