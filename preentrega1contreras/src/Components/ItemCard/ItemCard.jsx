import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../ItemCard/itemCard.css";
import image from "../imageDefault.jpg";

export default function ItemCard({ id, nombre, descripcion, precio, imagen }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>
          <Link to={`${id}`} className="link-card">
            {" "}
            {nombre}{" "}
          </Link>
        </Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Footer>{precio}</Card.Footer>
        <Button
          onClick={() => {
            navigate(id);
          }}
          variant="primary"
        >
          Ver mas
        </Button>
      </Card.Body>
    </Card>
  );
}
