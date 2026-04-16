//synchronous-simpler.js
console.log("Step 1: Open bank door");

function performTransaction() {
    console.log("Step 2: Processing transaction...");
}

performTransaction(); // The program must finish this before moving to Step 3

console.log("Step 3: Leave bank");//always execute in order 1 -> 2 -> 3