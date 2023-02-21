import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/BarraNav/NavBar";
import ItemsListContainer from "./Components/ItemsListContainer/ItemsListContainer";
import ItemDetalles from "./Components/ItemDetalles/ItemDetalles";
import Menu from "./Components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const categorias = [
  { id: "musica", nombre: "Musica" },
  { id: "pelisyseries", nombre: "Peliculas y Series" },
  { id: "gaming", nombre: "Gaming" },
  { id: "audio", nombre: "Audio" },
  { id: "coleccionables", nombre: "Coleccionables" },
  { id: "moda", nombre: "Moda" },
  { id: "electronicos", nombre: "Electronicos" },
  { id: "libros", nombre: "Libros" },
  { id: "soporte", nombre: "Soporte" },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar categorias={categorias} />

        <Routes>
          <Route exact path="/" element={<Menu />} />

          <Route exact path="/:categoria" element={<ItemsListContainer />} />

          <Route exact path="/:categoria/:itemId" element={<ItemDetalles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
