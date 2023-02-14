import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PeliculaItem({ id, nombre, descripcion, precio }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="data.js/100px180" />
      <Card.Body>
        <Card.Title>
          <Link to={`${id}`}> {nombre} </Link>
        </Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Footer>{precio}</Card.Footer>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}
