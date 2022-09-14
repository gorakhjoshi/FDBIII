import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  console.log("Running App Component before useEffect Hook");

  console.log(user);
  console.log("User", user?.title);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
    console.log("Inside useEffect Hook!");
  }, []);

  console.log("After useEffect Hook");
  // return <div>{user ? user.title : <h1>LOADING...</h1>}</div>;
  return <div>{user?.title || <h1>Loading...</h1>}</div>;
}

export default App;
