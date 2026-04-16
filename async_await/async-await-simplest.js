//async-await-simplest.js
async function fetchConfig() {
    // Simulating a config fetch
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ theme: "dark", version: "2.0.1", status: "OK" });
        }, 1000);
    });
}

async function initialize() {
    console.log("Fetching configuration...");
    
    // Destructuring the object returned by the awaited promise
    const { theme, version } = await fetchConfig();
    
    console.log(`System initialized. Theme: ${theme}, Version: ${version}`);
}

initialize();