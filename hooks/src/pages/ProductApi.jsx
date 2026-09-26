import { useEffect,useState } from "react";

function ProductAPI(){
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((response)=>response.json())
        .then((data)=>{
            setUser(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Error fetching Users:",error);
            setLoading(false);
        });
    },[]);
    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <div>
            <h1>
                Users
            </h1>
            {user.map((user)=>(
                <div key={user.id}>
                    <h3>username:{user.name}</h3>
                    <h2>Email:{user.email}</h2>
                    <hr/>  
                </div>
            ))}
        </div>
    )
}

export default ProductAPI;