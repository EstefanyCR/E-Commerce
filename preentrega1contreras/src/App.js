import logo from "./logo.svg";
import "./App.css";
import BarraNavegacion from "./Components/navbar.jsx";
import ContenedorItems from "./Components/listaitems.jsx";

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <header className="App-header"></header>
      <ContenedorItems />
    </div>
  );
}

export default App;
