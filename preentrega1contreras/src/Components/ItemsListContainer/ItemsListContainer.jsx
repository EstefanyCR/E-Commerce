import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { fetchs } from "../../fetchs";
import data from "../../data.json";
import "./ItemsList.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ItemsListContainer() {
  const { categoria } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchs(data)
      .then((items) => setItems(items))
      .catch((e) => setError(e));
  }, []);

  const items1 = items.filter((item) => item.categoria === categoria);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <Row>
        {items1.map((item) => (
          <Col>
            <ItemCard
              id={item.id}
              nombre={item.nombre}
              descripcion={item.descripcion}
              precio={item.precio}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
