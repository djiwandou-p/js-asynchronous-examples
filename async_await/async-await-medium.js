//async-await-medium.js
// Generator function to yield transaction steps
function* stepTracker() {
    yield "Step 1: Setting up Dynamic Auth Headers...";
    yield "Step 2: Sending secure request to Petstore...";
    yield "Step 3: Process finished.";
}

const tracker = stepTracker();

// IIFE to run the main logic immediately
(async function main() {
    console.log(tracker.next().value);

    // Dynamic key variable for headers 
    const authHeader = "api_key";
    const apiOptions = {
        method: "GET",
        headers: {
            [authHeader]: "special_key", // Computed property name
            "Content-Type": "application/json"
        }
    };

    console.log(tracker.next().value);

    try {
        // Real API call to Petstore 
        const response = await fetch("https://petstore.swagger.io/v2/pet/4", apiOptions);
        
        if (response.status === 200) { // Checking success codes 
            const petData = await response.json();
            
            // Destructuring complex object 
            const { name, status, category: { name: catName } } = petData;
            
            console.log(`--- Result: Pet "${name}" is a ${catName} and is currently ${status} ---`);
        }
    } catch (error) {
        console.error("Mitigation: API Request failed.", error.message); // Mitigation
    }

    console.log(tracker.next().value);
})();