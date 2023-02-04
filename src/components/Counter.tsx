import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={{ width: -200 }}>{counter}</div>

      <button
        className="button"
        style={{ color: "green" }}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        press here
      </button>
    </>
  );
};
