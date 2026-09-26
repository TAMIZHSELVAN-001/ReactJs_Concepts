import "./App.css";
import Effect from "./pages/EffectPractice";
import ProductAPI from "./pages/ProductApi";
import RefPractice from "./pages/RefPractice";
import UserContext from "./context/UserContext";
import Profile from "./components/Profile";

function App() {
  const user = {
    name:"Tamizhselvan",
    Age:21,
    DOB:"27-02-2005",
  }
  return (
    <>
      <Effect /> <ProductAPI /> <RefPractice />
      <UserContext.Provider value={user}>
        <timeout/>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default App;
