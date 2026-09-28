async function getUsers() {
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(response.ok)
        if(!response.ok){
            throw new Error("Failed to Fetch Users");   
        }
        const products=await response.json();
        console.log(products);
    }
    catch(error){
        console.log(error.message);   
    }
}

getUsers()