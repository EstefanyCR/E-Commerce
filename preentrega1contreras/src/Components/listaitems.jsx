import "../Components/listaItems.css";
const nombres = ["Laura", "Victoria", "David", "Janeth"];

export default function ContenedorItems() {
  return (
    <div className="ListaNombres">
      {nombres.map((nombre) => (
        <p>{nombre}</p>
      ))}
    </div>
  );
}
