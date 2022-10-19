import { useEffect } from "react";
import axios from "axios";

const url = "https://course-api.com/axios-turotial-post";

async function apiFetch() {
  const email = "example@gmail.com";
  const password = "example";
  try {
    const response = await axios.post(url, {
      email,
      password,
    });
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

function App() {
  useEffect(() => {
    apiFetch();
  }, []);
  return <div>App</div>;
}

export default App;
