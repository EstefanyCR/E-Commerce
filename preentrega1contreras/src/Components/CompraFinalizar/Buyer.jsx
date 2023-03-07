import React, { useContext, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import "../CompraFinalizar/Buyer.css";
import { CartContext } from "../../Context/cartContext";
import { useNavigate } from "react-router-dom";

import { doc, collection, writeBatch } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebaseConfig";

function Buyer() {
  const { carritoItems, getTotalPriceItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [isEmailVerified, setIsEmailVerified] = useState(true);

  const nombreRef = useRef(null);
  const emailRef = useRef(null);
  const telefonoRef = useRef(null);

  return (
    <>
      <Form
        onSubmit={async (event) => {
          event.preventDefault();

          //No puede comprobar que haya stock de un producto
          /* if (
            !carritoItems.every(
              ({ item, cantidad }) => item.stock - cantidad > 0
            )
          )
            throw "No hay suficiente stock"; */

          const newCompraRef = doc(collection(db, "compra"));
          const batch = writeBatch(db);

          carritoItems.forEach(({ item: { id, stock }, cantidad }) => {
            batch.update(doc(db, "items", id), { stock: stock - cantidad });
          });

          batch.set(newCompraRef, {
            nombre: nombreRef.current.value,
            email: emailRef.current.value,
            telefono: telefonoRef.current.value,
            dia: new Date().toISOString(),
            items: carritoItems.map(({ item }) => {
              return { id: item.id, nombre: item.nombre, precio: item.precio };
            }),
            precioTotal: getTotalPriceItems(),
          });

          await batch.commit();

          navigate(`/confirmacion/${newCompraRef.id}`);
        }}
        className="cont"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="name"
            placeholder="Introduzca su nombre completo"
            required
            minLength={3}
            maxLength={100}
            ref={nombreRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduzca su e-mail"
            required
            ref={emailRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Verificación e-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Vuelva a introducir e-mail"
            required
            onChange={(event) => {
              setIsEmailVerified(emailRef.current.value === event.target.value);
            }}
          />
        </Form.Group>
        {!isEmailVerified ? <p>No son iguales</p> : null}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Numero de telefono</Form.Label>
          <Form.Control
            type="number"
            required
            minLength={10}
            maxLength={10}
            ref={telefonoRef}
          />

          <Form.Text className="text-muted">
            Nunca compartiremos sus datos con nadie mas
          </Form.Text>
        </Form.Group>

        <div>
          <p>Resumen de compra</p>
          <div>
            {carritoItems.map(({ item, cantidad }) => {
              return (
                <div key={item.id}>
                  {item.nombre} ({cantidad})
                </div>
              );
            })}
          </div>
          <p></p>
          <button type="submit">Completar la compra</button>
        </div>
      </Form>
    </>
  );
}

export default Buyer;
