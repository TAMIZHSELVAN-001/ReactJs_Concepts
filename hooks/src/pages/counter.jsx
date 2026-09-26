import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <hr />
    </div>
  );
}
export default Counter;