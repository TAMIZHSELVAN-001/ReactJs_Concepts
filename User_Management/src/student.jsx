function App(){
async function getUsers() {
    console.log("Loading...");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        users.forEach((user) => {
            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("----------------");
        });

    } catch (error) {
        console.log("Failed to load users");
    }
}

getUsers();
}
export default App;