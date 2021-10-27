import { useState, useEffect, FormEvent } from "react";
import * as C from "./App.styles";
import { PhotoItem } from "./components/PhotoItem";
import * as Photos from "./services/photo";
import { Photo } from "./types/Photo";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  const handleFormUpload = (e: FormEvent) => {};

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormUpload}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
        </C.UploadForm>
        {loading && (
          <C.ScreenWarning>
            <div className="emoji">🤚</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotosList>
            {photos.map((item, index) => (
              <PhotoItem key={index} name={item.name} url={item.url} />
            ))}
          </C.PhotosList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenWarning>
            <div className="emoji">😔</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;
