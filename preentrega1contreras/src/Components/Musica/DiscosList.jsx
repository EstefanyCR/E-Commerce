import data from "../../data.json";
import { Link } from "react-router-dom";
import { fetchs } from "../../fetchs";
import { useEffect, useState } from "react";
import DiscoItem from "./Disco/DiscoItem";
import { Col, Container, Row } from "react-bootstrap";

const DiscosList = () => {
  const [items, setItems] = useState([]);
  const [discos, setDiscos] = useState([]);
  const [error, setError] = useState(null);

  /*async () => {
      try {
        const items = await fetch(3);

        setItems(items);
      } catch (e) {
        setError(e);
      }
    }*/
  useEffect(() => {
    fetchs(data)
      .then((items) => setItems(items))
      .catch((e) => setError(e));
    console.log("furula!");
  }, []);

  useEffect(() => {
    setDiscos(items.filter((item) => item.categoria === "musica"));
  }, [items]);

  if (error) {
    return <p>Falló por {error}</p>;
  }

  return (
    <Container>
      <Row>
        {discos.map((disco) => (
          <Col>
            <DiscoItem
              id={disco.id}
              nombre={disco.nombre}
              descripcion={disco.descripcion}
              precio={disco.precio}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DiscosList;
