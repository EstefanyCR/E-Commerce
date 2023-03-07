import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/BarraNav/NavBar";
import ItemsListContainer from "./Components/ItemsListContainer/ItemsListContainer";
import ItemDetalles from "./Components/ItemDetalles/ItemDetalles";
import Menu from "./Components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CartContextProvider from "./Context/CartContextProvider";
import CartList from "./Components/CartWidget/CartList";
import Buyer from "./Components/CompraFinalizar/Buyer";
import CompraFinalizada from "./Components/CompraFinalizar/CompraFinalizada";

const categorias = [
  { id: "musica", nombre: "Musica" },
  { id: "pelisyseries", nombre: "Peliculas y Series" },
  { id: "gaming", nombre: "Gaming" },
  { id: "audio", nombre: "Audio" },
  { id: "coleccionable", nombre: "Coleccionable" },
  { id: "moda", nombre: "Moda" },
  { id: "electronicos", nombre: "Electronicos" },
  { id: "libros", nombre: "Libros" },
  { id: "soporte", nombre: "Soporte" },
];

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar categorias={categorias} />

          <Routes>
            <Route exact path="/" element={<Menu />} />

            <Route exact path="/:categoria" element={<ItemsListContainer />} />

            <Route
              exact
              path="/:categoria/:itemId"
              element={<ItemDetalles />}
            />

            <Route exact path="/cart" element={<CartList />} />

            <Route exact path="/comprador" element={<Buyer />} />
            <Route
              exact
              path="/confirmacion/:compraId"
              element={<CompraFinalizada />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
