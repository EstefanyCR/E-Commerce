import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../data.json";
import { fetchs } from "../../fetchs";
import PeliculaItem from "./Pelicula/PeliculaItem";

function PelisySeries() {
  const [items, setItems] = useState([]);
  const [peliculas, setPeliculas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchs(data)
      .then((items) => setItems(items))
      .catch((e) => setError(e));
    console.log("furula!");
  }, []);

  useEffect(() => {
    setPeliculas(items.filter((item) => item.categoria === "pelisyseries"));
  }, [items]);

  return (
    <Container>
      <Row>
        {peliculas.map((pelicula) => (
          <Col>
            <PeliculaItem
              id={pelicula.id}
              nombre={pelicula.nombre}
              descripcion={pelicula.descripcion}
              precio={pelicula.precio}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PelisySeries;
