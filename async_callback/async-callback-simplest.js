//async-callback-simplest.js
class UserProcessor {
    constructor(userData) {
        // Destructuring assignment from an object 
        const { id, name } = userData;
        this.id = id;
        this.name = name;
    }

    // Method that takes a callback 
    process(callback) {
        console.log(`Processing user: ${this.name}...`);
        setTimeout(() => {
            // Passing a result object back to the callback
            callback({ success: true, timestamp: Date.now() });
        }, 1500);
    }
}

const myUser = new UserProcessor({ id: 101, name: "Alice" });

// Non-anonymous callback function
function onComplete(result) {
    console.log("Process Finished:", result.success);
}

myUser.process(onComplete);