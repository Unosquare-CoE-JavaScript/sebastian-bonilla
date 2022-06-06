try {
    doesntExist();
}
catch (err) {
    console.log(err);
    // ReferenceError: 'doesntExist' is not defined
    // ^^^^ message printed from the caught exception
    let onlyHere = true;
    var outerVariable = true;
}
console.log(outerVariable); // true
console.log(err);
    // ReferenceError: 'err' is not defined
    // ^^^^ this is another thrown (uncaught) exception