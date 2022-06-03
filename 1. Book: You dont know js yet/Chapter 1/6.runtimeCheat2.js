var badIdea = { oops: "Ugh!" };

with (badIdea) {
    console.log(oops); // Ugh!
}
console.log(oops); // Ugh!