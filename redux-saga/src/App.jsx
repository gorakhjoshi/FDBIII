import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCatsFetch } from "./store/catState";

function App() {
  const cats = useSelector((state) => state.cats);

  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  console.log(cats);
  return (
    <div className="App">
      <h1>CAT's Gallery</h1>
      <p>All about cats</p>
      <hr />
      {cats.length > 0 ? (
        cats.map((cat) => (
          <div key={cat.id} className="row">
            <div>
              {cat.image && (
                <img
                  src={cat.image.url}
                  alt={cat.name}
                  width="200"
                  height="200"
                />
              )}
            </div>
            <div className="column-right">
              <h2>{cat.name}</h2>
              <h2>{cat.temperament}</h2>
              <h2>{cat.description}</h2>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
