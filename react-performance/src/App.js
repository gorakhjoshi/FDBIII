import React, { useState, useEffect, useCallback, useMemo } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);

  // useCallback(() => , [])

  // Optimized
  const plusFive = useCallback(() => {
    console.log("plusFive was called!");
    return num + 5;
  }, [num]);

  // useMemo(() => result, [])
  // useCallback(() => {}, []);

  // Not Optimized
  // const plusFive = () => {
  //   console.log("plusFive was called!");
  //   return num + 5;
  // };

  return (
    <div className={light ? "light" : "dark"}>
      <div>
        <h1>Without useCallback </h1>
        <h2>
          Current number: {num},{/* TODO */}
          {/* Remember SomeComp: memo */}
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
  console.log("SomeComp is Running");
  const [calcNum, setCalcNum] = useState(0);
  useEffect(() => {
    setCalcNum(someFunc());
  }, [someFunc]);

  return <span> Plus five: {calcNum}</span>;
};
