//async-promise-simpler.js
// Generator for logging steps 
function* logSteps() {
    yield "Initializing request...";
    yield "Fetching data...";
    yield "Displaying results.";
}

const tracker = logSteps();

function fetchData() {
    console.log(tracker.next().value); // Initializing...
    return new Promise((resolve) => {
        console.log(tracker.next().value); // Fetching...
        setTimeout(() => resolve("JSON Data Loaded"), 1500);
    });
}

fetchData().then((data) => {
    console.log(data);
    console.log(tracker.next().value); // Displaying...
});