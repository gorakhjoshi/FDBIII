import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getPhotos } from "./store/galleryState";

function App() {
  const photos = useSelector((state) => state.gallery.photos);

  const dispatch = useDispatch();

  console.log(photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Gallery</h1>
      {photos.map((photo) => {
        return (
          <img
            src={photo.download_url}
            alt={photo.author}
            key={photo.id}
            width={500}
            height={500}
          />
        );
      })}
    </div>
  );
}

export default App;
