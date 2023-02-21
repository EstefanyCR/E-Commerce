import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { fetchs } from "../../fetchs";

export default function ItemDetalles() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    fetchs(data).then((items) => setItems(items));
    console.log("furula");
  }, []);

  useEffect(() => {
    if (items && items.length > 0) {
      const item1 = items.find((item) => item.id === itemId);

      setItem(item1);
    }
  }, [items]);

  return (
    <ul>
      <p>{item.nombre}</p>
      <p>{item.descripcion}</p>
      <p>{item.precio}</p>
      <p>{item.categoria}</p>
    </ul>
  );
}
