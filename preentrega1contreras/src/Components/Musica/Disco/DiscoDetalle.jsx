import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import discos from "../../../data.json";
import { fetchs } from "../../../fetchs";

export default function DiscoDetalle() {
  const [items, setItems] = useState([]);
  const [disco, setDisco] = useState([]);
  const { discoId } = useParams();

  useEffect(() => {
    fetchs(discos).then((items) => setItems(items));
    console.log("furula");
  }, []);

  useEffect(() => {
    if (items && items.length > 0) {
      const item = items.find((item) => item.id === discoId);

      setDisco(item);
    }
  }, [items]);

  return (
    <ul>
      <p>{disco.nombre}</p>
      <p>{disco.descripcion}</p>
      <p>{disco.precio}</p>
      <p>{disco.categoria}</p>
    </ul>
  );
}
