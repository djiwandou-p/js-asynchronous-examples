//async-callback-medium.js
// Step Tracker using a Generator Function 
function* transactionSteps() {
    yield "Step 1: Preparing API Headers...";
    yield "Step 2: Fetching data from Petstore...";
    yield "Step 3: Process Complete.";
}

const steps = transactionSteps();

// IIFE (Immediately Invoked Function Expression) to wrap the logic 
(async function() {
    console.log(steps.next().value);

    // Dynamic key for the header 
    const authHeaderName = "api_key";
    const headers = {
        [authHeaderName]: "special_key", // Computed property name
        "Content-Type": "application/json"
    };

    const apiUrl = "https://petstore.swagger.io/v2/pet/4";

    console.log(steps.next().value);

    try {
        // Real API request 
        const response = await fetch(apiUrl, { headers });
        
        if (response.status === 200) { // Success status code 
            const data = await response.json();
            
            // Destructuring the API result 
            const { name, status } = data;
            console.log(`API Result -> Pet Name: ${name}, Status: ${status}`);
        }
    } catch (error) {
        console.error("Failed to communicate with server:", error);
    }

    console.log(steps.next().value);
})();
