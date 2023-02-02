import "../ItemsList/ItemsList.css";
const nombres = ["Javier", "Victoria", "David", "Janeth"];

export default function ContenedorItems() {
  return (
    <div className="ListaNombres">
      {nombres.map((nombre) => (
        <p>{nombre}</p>
      ))}
    </div>
  );
}
