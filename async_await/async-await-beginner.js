//async-await-beginner.js
// Non-anonymous function to handle the delay
function delayMessage(message) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(message), 1000);
    });
}

// Async function to consume the promise
async function startApp() {
    console.log("1. Application starting...");
    
    // 'await' pauses the function execution until the promise resolves 
    const status = await delayMessage("2. Services are online.");
    
    console.log(status);
    console.log("3. Ready for user input.");
}

startApp();