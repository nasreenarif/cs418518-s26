import { useRef } from "react";

export default function RefExample() {
  const countRef = useRef(0);

  function handleClick() {
    console.log("Before update:", countRef.current);

    countRef.current = countRef.current + 1;

    console.log("After update:", countRef.current);
  }

  return (
    <div>
      <h2>Ref Count: {countRef.current}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}