for (var i = 0; i < 5; i++) {
    if (checkValue(i)) {
        break;
    }
}
if (i < 5) {
    console.log("The loop stopped early!");
}