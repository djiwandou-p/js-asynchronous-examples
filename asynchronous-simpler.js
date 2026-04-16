//asynchronous-simpler.js
console.log("1. Ordering Mie Ayam...");

// Simulating a 2-second cooking process [11]
setTimeout(function() {
    console.log("2. Mie Ayam is ready! (Finished after 2 seconds)");
}, 2000);

console.log("3. Sitting down and checking phone...");
//execution order not always 1 -> 2 -> 3, try running several times