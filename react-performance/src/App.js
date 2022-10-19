import React, { useMemo, useState } from "react";

const plusFive = (num) => {
  console.log(num);
  console.log("plusFive function was called!");
  return num + 5;
};

export default function App() {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);

  // useMemo(() => , [])
  // Not Optimized
  // const numPlusFive = plusFive(num);

  // Optimized
  const numPlusFive = useMemo(() => plusFive(num), [num]);

  return (
    <div className={light ? "light" : "dark"}>
      <div>
        <h1>Without useMemo</h1>
        <h2>
          Current number: {num}, Plus five: {numPlusFive}
        </h2>
        <div className="button-container">
          <button
            onClick={() => {
              setNum(num + 1);
            }}
          >
            Update Number{" "}
          </button>
          <button
            onClick={() => {
              setLight(!light);
            }}
          >
            {" "}
            Toggle the light{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
