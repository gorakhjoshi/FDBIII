import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [created, setCreated] = useState("");
  const [error, setError] = useState("");

  const [tasks, setTasks] = useState(null);

  async function getAllTasks() {
    const tasksData = await axios("/api/v1/tasks");
    setTasks(tasksData.data.tasks);
  }

  console.log(tasks);

  useEffect(() => {
    getAllTasks();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/tasks", { name });
      console.log(response);
      setCreated(response.data.name);
    } catch (error) {
      setError(error.response.data.msg);
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
      {created ? (
        <div style={{ color: "green" }}>You created {created}</div>
      ) : (
        <div style={{ color: "red" }}>{error}</div>
      )}

      <div>
        {tasks?.map((task) => (
          <h1 key={task._id}>{task.name}</h1>
        ))}
      </div>
    </>
  );
}

export default App;
