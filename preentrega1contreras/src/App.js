import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/BarraNav/NavBar";
import DiscosList from "./Components/Musica/DiscosList";
import ContenedorItems from "./Components/ItemsList/ItemsList";
import PelisySeries from "./Components/PelisySeries/PelisySeriesList";
import Audio from "./Components/Audio/Audio";
import Gaming from "./Components/Gaming/Gaming";
import Coleccionables from "./Components/Coleccionables/Coleccionables";
import Moda from "./Components/Moda/Moda";
import Electronicos from "./Components/Electronico/Electronicos";
import Libros from "./Components/Libros/Libros";
import Soporte from "./Components/Soporte/Soporte";
import DiscoDetalle from "./Components/Musica/Disco/DiscoDetalle";
import PeliculaDetalle from "./Components/PelisySeries/Pelicula/PeliculaDetalle";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ContenedorItems />} />

          <Route exact path="/musica" element={<DiscosList />} />
          <Route exact path="/musica/:discoId" element={<DiscoDetalle />} />

          <Route exact path="/pelisyseries" element={<PelisySeries />} />
          <Route
            exact
            path="/pelisyseries/:peliId"
            element={<PeliculaDetalle />}
          />

          <Route exact path="/gaming" element={<Gaming />} />

          <Route exact path="/audio" element={<Audio />} />

          <Route exact path="/coleccionables" element={<Coleccionables />} />

          <Route exact path="/moda" element={<Moda />} />

          <Route exact path="/electronicos" element={<Electronicos />} />

          <Route exact path="/libros" element={<Libros />} />

          <Route exact path="/soporte" element={<Soporte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
