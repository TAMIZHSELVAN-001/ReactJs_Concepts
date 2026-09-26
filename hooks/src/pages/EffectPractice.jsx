import { useState, useEffect } from "react";

function Counter1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed:", { count });
  }, [count]);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
    </div>
  );
}

export default Counter1;
