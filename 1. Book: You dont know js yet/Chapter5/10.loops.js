var keepGoing = true;
while (keepGoing) {
    var value = Math.random();

    console.log(value); // added for show
    if (value > 0.5) {
        keepGoing = false;
    }
}