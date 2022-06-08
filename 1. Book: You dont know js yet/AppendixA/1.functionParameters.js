function whatsTheDealHere(id, defaultID = () => id) {
    var id = 5;
    console.log(defaultID());
}
whatsTheDealHere(3);