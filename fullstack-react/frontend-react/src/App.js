import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countryName, setCountryName] = useState("");
  console.log(countryName);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const { data } = await axios("/api/v1/country");
        console.log(data);
        setCountryName(data.names);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTasks();
  }, []);
  return (
    <h1>
      {/* {countryName?.map((country, index) => (
        <h1 key={index}>{country}</h1>
      ))} */}
    </h1>
  );
}

export default App;
