//async-promise-simplest.js
class UserAPI {
    // Class method returning a promise
    fetchMockUser() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id: 1, username: "Dji", role: "Admin" });
            }, 3000);
        });
    }
}

const api = new UserAPI();

api.fetchMockUser().then((userData) => {
    // Destructuring assignment from the resolved object
    const { username, role } = userData;
    console.log(`User: ${username}, Access Level: ${role}`);
});