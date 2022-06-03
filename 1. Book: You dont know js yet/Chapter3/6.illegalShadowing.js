function something() {
    var special = "JavaScript";
    {
        let special = 42; // totally fine shadowing
        // ..
    }
}


function another() {
    // ..
    {
        let special = "JavaScript";
        {
            var special = "JavaScript";
            // ^^^ Syntax Error
            // ..
        }
    }
}