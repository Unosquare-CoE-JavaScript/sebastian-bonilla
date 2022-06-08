/* for (let i = 0; i < 3; i++) {
    let value = i * 10;
    console.log(`${i}: ${value}`);
}
    // 0: 0
    // 1: 10
    // 2: 20 */


{
    // a fictional variable for illustration
    let $$i = 0;
    for ( /* nothing */; $$i < 3; $$i++) {
        // here's our actual loop `i`!
        let i = $$i;
        let value = i * 10;
        console.log(`${i}: ${value}`);
    }
    // 0: 0
    // 1: 10
    // 2: 20
}