import { useState } from "react";
import styles from "./Counter.module.scss";

// if autocomplete for scss doesnt work in vscode install css modules plugin

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div style={{ width: -200 }}>{counter}</div>

      <button
        className={styles.btn}
        style={{ color: "green" }}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        press here
      </button>
    </>
  );
};
