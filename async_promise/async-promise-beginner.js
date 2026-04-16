//async-promise-beginner.js
// Non-anonymous success handler
function successHandler(message) {
    console.log("Success:", message);
}

const orderFood = () => {
    return new Promise((resolve, reject) => {
        console.log("1. Ordering food...");
        setTimeout(() => {
            resolve("2. Food is ready! yummy"); // Resolve after 1 second
        }, 1000);
    });
};

// Consumption using .then()
orderFood().then(successHandler);