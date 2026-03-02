import { useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Before setCount:", count);

    setCount(count + 1);

    console.log("After setCount:", count);
  }

  return (
    <div>
      <h2>State Count: {count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}