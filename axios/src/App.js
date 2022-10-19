import { useEffect } from "react";
import axios from "axios";

// Using fetch
// async function getCatsData() {
//   try {
//     const response = await fetch("https://api.thecatapi.com/v1/breeds");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// Using axios
async function getCatsData() {
  try {
    const response = await axios("https://api.thecatapi.com/v1/breeds");
    console.log(response);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

function App() {
  useEffect(() => {
    getCatsData();
  }, []);
  return <div>App</div>;
}

export default App;
