import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/BarraNav/NavBar.jsx";
import ContenedorItems from "./Components/ItemsList/ItemsList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header"></header>
      <ContenedorItems />
    </div>
  );
}

export default App;
