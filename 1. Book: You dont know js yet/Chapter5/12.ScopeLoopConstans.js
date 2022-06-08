var keepGoing = true;
while (keepGoing) {
    // ooo, a shiny constant!
    const value = Math.random();

    console.log(value); // added for show
    if (value > 0.5) {
        keepGoing = false;
    }
}