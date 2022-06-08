var moduleOne = (function one() {
    // ..
})();
var moduleTwo = (function two() {
    // ..
    function callModuleOne() {
        moduleOne.someMethod();
    }
    // ..
})(); ƒƒ