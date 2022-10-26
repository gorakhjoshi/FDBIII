import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [created, setCreated] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/tasks", { name });
      console.log(response);
      setCreated(response.data.name);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
      {created && <div>You created {created}</div>}
    </>
  );
}

export default App;
