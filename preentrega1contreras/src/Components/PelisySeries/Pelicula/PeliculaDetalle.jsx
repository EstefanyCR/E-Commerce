import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import { fetchs } from "../../../fetchs";

export default function PeliculaDetalle() {
  const [items, setItems] = useState([]);
  const [pelicula, setPelicula] = useState([]);
  const { peliId } = useParams();

  useEffect(() => {
    fetchs(data).then((items) => setItems(items));
    console.log("furula");
  }, []);

  useEffect(() => {
    if (items && items.length > 0) {
      const item = items.find((item) => item.id === peliId);
      console.log({ peliId });
      console.log({ item });
      console.log({ items });
      setPelicula(item);
    }
  }, [items]);

  return (
    <ul>
      <p>{pelicula.nombre}</p>
      <p>{pelicula.descripcion}</p>
      <p>{pelicula.precio}</p>
      <p>{pelicula.categoria}</p>
    </ul>
  );
}
