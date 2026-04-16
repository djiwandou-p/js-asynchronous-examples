//asynchronous-simpler2.js
async function getRestaurantData() {
    console.log("Fetching user data...");
    
    // 'await' pauses the function until the data is received, but not the whole program 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();
    
    console.log("User data received:", userData);
}

getRestaurantData();
console.log("Doing other work while waiting for the data ready...");