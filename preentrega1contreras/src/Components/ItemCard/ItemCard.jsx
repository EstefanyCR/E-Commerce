import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../ItemCard/itemCard.css";

export default function ItemCard({ id, nombre, descripcion, precio, imagen }) {
  const navigate = useNavigate();

  return (
    <>
      <Card className="container">
        <Link to={`${id}`}>
          <Card.Img variant="top" src={imagen} />
        </Link>
        <Card.Body>
          <Card.Title>
            <Link to={`${id}`} className="link-card">
              {" "}
              {nombre}{" "}
            </Link>
          </Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Footer>${precio}.00</Card.Footer>
          <p></p>
          <button
            className="boton"
            onClick={() => {
              navigate(id);
            }}
          >
            Ver mas
          </button>
        </Card.Body>
      </Card>
    </>
  );
}
