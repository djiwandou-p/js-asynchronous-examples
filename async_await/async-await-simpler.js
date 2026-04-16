//async-await-simpler.js
class UserService {
    constructor(apiEndpoint) {
        this.url = apiEndpoint;
    }

    async getUser(id) {
        // Using real API: JSONPlaceholder 
        const response = await fetch(`${this.url}/${id}`);
        return await response.json();
    }
}

async function runTest() {
    const service = new UserService("https://jsonplaceholder.typicode.com/users");
    console.log("Requesting user data...");

    const user = await service.getUser(1);
    
    // Using Template Literals for clean output
    console.log(`User Found: ${user.name} from ${user.company.name}`);
}

runTest();