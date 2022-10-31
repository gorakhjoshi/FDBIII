import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query LaunchLatest {
    launchLatest {
      launch_year
    }
  }
`;

function App() {
  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/name/nepal")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  console.log(data);
  console.log(data?.launchLatest.launch_year);

  return loading ? (
    <div className="loader"></div>
  ) : (
    <h1>{data?.launchLatest.launch_year}</h1>
  );
}

export default App;
