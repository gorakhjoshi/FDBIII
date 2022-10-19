import React, { useState, useEffect } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);
  const plusFive = () => {
    console.log("plusFive was called!");
    return num + 5;
  };
  return (
    <div className={light ? "light" : "dark"}>
      <div>
        <h1>Without useCallback </h1>
        <h2>
          Current number: {num},
          <SomeComp someFunc={plusFive} />
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

const SomeComp = ({ someFunc }) => {
  const [calcNum, setCalcNum] = useState(0);
  useEffect(() => {
    setCalcNum(someFunc());
  }, [someFunc]);

  return <span> Plus five: {calcNum}</span>;
};
