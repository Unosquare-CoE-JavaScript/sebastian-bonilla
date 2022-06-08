/**
 *  A function must to complete these rules:
 *  1. Total (For every input there is a correponding output)
 *  2. Deterministic (Always receive the same output for a given input)
 *  3. No Observable Side-Effects (No Observable effects besides computing value)
 */

// Total
// NOT Total
const inc = i => {
    if (i === 0) return 1
    if (i === 1) return 2
    if (i === 2) return 3
}

// Total
const inc = i => {
    return i + 1;
}


// Deterministic
// NOT Deterministic
const timeSince = comment => {
    const now = new Date();
    const then = new Date(comment.createedAt);
    return getDifference(now, then);
}

// Deterministic!
const getDifference = (now, then) => {
    const days = Math.abs(now.getDate() - then.getDate());
    const hours = Math.abs(now.getHours() - then.getHours());
    return { days, hours };
}

// No Side Effects
// Side effects cause logs
const add = (x, y) => {
    console.log(`Adding ${x} ${y}`);
    return x + y;
}

// No Side effects
const add = (x, y) => {    
    return {result: x + y, log: `Adding ${x} ${y}`};
}