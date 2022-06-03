function badIdea() {
    eval("var oops = 'Ugh!';");
    console.log(oops);
}
badIdea(); // Ugh!