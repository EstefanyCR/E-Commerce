import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import Buyer from "../CompraFinalizar/Buyer";

function CartList() {
  const { carritoItems, clear, removeItem, getTotalPriceItems } =
    useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      {carritoItems.length !== 0 ? (
        <div>
          {carritoItems.map(({ item, cantidad }) => {
            return (
              <div key={item.id}>
                <span>
                  {item.nombre} ({cantidad})
                </span>
                <span>
                  <button onClick={() => removeItem(item.id)}>x</button>
                </span>
                <p>${item.precio * cantidad}.00</p>
              </div>
            );
          })}

          <div>
            <span>{getTotalPriceItems()}</span>
          </div>

          <button
            onClick={() => {
              clear();
            }}
          >
            Borrar todo
          </button>
          <button
            onClick={() => {
              {
                navigate("/comprador");
              }
            }}
          >
            {" "}
            Finalizar compra{" "}
          </button>
        </div>
      ) : (
        <div>
          <p>No tienes items en tu carrito {":("}</p>

          <button
            onClick={() => {
              //navegar a menu
              navigate("/");
            }}
          >
            Regresar a la tienda
          </button>
        </div>
      )}
    </>
  );
}

export default CartList;
