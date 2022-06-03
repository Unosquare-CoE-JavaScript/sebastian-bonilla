var special = 42;

function lookingFor(special) {
    var another = {
        special: special
    };
    function keepLooking() {
        var special = 3.141592;
        console.log(special);
        console.log(another.special); // Ooo, tricky!
        console.log(window.special);
    }
    keepLooking();
}

lookingFor(112358132134);
// 3.141592
// 112358132134
// 42