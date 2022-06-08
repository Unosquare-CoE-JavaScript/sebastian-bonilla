function whatsTheDealHere(id, defaultID = () => id) {
    var id;
    console.log(`local variable 'id': ${id}`);
    console.log(
        `parameter 'id' (closure): ${defaultID()}`
    );
    console.log("reassigning 'id' to 5");
    id = 5;
    console.log(`local variable 'id': ${id}`);
    console.log(
        `parameter 'id' (closure): ${defaultID()}`
    );
}
whatsTheDealHere(3);
    // local variable 'id': 3 <--- Huh!? Weird!
    // parameter 'id' (closure): 3
    // reassigning 'id' to 5
    // local variable 'id': 5
    // parameter 'id' (closure): 3