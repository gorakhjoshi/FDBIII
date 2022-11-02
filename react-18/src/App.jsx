import React from "react";
import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState(null);
  const [list, setList] = useState(null);
  const [isPending, startTransition] = useTransition();

  console.log(list);
  console.log(isPending);

  function handleChange(e) {
    setInput(e.target.value);

    startTransition(() => {
      const typedValues = [];
      for (let i = 0; i < 50000; i++) {
        typedValues.push(e.target.value);
      }
      setList(typedValues);
    });
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      {list?.map((list, index) => (
        <div key={index}>{list}</div>
      ))}
    </div>
  );
}

export default App;
