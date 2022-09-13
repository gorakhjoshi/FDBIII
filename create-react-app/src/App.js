import { useState } from "react";

function App() {
  const [person, setPerson] = useState({ firstName: "Laxman", age: 30 });
  const [count, setCount] = useState(0);

  console.log("Running App!");
  console.log(person);

  function ageHandler() {
    // function (prev) {
    //   return { ...prev, age: 40 };
    // }
    console.log("Setting state of Person");
    setPerson((prev) => ({ ...prev, age: prev.age + 1 }));
    console.log("Now re-rendering if state changed!");
  }

  function countHandler() {
    console.log("Setting count");
    setCount(() => count + 1);
    console.log("Now re-rendering if state changed!");
  }

  return (
    <div>
      {person.firstName}
      <br />
      {person.age}
      <br />
      <button onClick={ageHandler}>Increase Age</button>
      <br />
      {count}
      <br />
      <button onClick={countHandler}>Increase Count</button>
    </div>
  );
}

export default App;
