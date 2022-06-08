var special = 42;

function lookingFor(special) {
    // The identifier `special` (parameter) in this
    // scope is shadowed inside keepLooking(), and
    // is thus inaccessible from that scope.
    function keepLooking() {
        var special = 3.141592;
        console.log(special);
        console.log(window.special);
    }
    keepLooking();
}

lookingFor(112358132134);
// 3.141592
// 42