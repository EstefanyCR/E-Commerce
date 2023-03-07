import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import "./ItemsList.css";
import ItemCard from "../ItemCard/ItemCard";
import { db } from "../../firebaseConfig/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

export default function ItemsListContainer() {
  const { categoria } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "items"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getItems();
  }, []);

  const categoryItems = items.filter((item) => item.categoria === categoria);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <Row>
        {categoryItems.map((item) => (
          <Col>
            <ItemCard
              id={item.id}
              nombre={item.nombre}
              descripcion={item.descripcion}
              precio={item.precio}
              imagen={item.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
