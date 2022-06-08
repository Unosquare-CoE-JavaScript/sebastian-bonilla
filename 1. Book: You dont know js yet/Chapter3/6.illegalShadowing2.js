function another() {
    // ..
    {
        let special = "JavaScript";
        ajax("https://some.url", function callback() {
            // totally fine shadowing
            var special = "JavaScript";
            // ..
        });
    }
}