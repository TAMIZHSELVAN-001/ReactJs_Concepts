import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile(){
    const name=useContext(UserContext);
    return(
        <div>
        <h2>Welcome{name.name}</h2>
        </div>
    );
}
export default Profile;