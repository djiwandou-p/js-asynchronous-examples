//async-callback-beginner.js
// A named function to be used as a callback
function displayStatus(message) {
    console.log(`Status Update: ${message}`);
}

// Asynchronous function using a callback
function startServer(callback) {
    console.log("Starting server...");
    // Simulating a 2-second delay
    setTimeout(function() {
        callback("Server is now ONLINE.");
    }, 2000);
}

startServer(displayStatus);