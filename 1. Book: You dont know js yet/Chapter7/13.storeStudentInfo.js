function storeStudentInfo(id, name, grade) {
    return function getInfo(whichValue) {
        // warning:
        // using `eval(..)` is a bad idea!
        var val = eval(whichValue);
        return val;
    };
}
var info = storeStudentInfo(73, "Suzy", 87);
console.log(info("name"));
// Suzy
console.log(info("grade"));
// 87