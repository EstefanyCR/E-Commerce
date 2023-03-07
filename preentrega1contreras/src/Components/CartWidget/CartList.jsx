import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import "../CartWidget/CartList.css";

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
                <p className="topCard">
                  <img src={item.image} className="imag" alt="" />
                  <button className="x" onClick={() => removeItem(item.id)}>
                    x
                  </button>
                </p>
                <span>
                  {item.nombre} ({cantidad})
                </span>
                <p>${item.precio * cantidad}.00</p>
              </div>
            );
          })}

          <div>
            <span>Total de compra: ${getTotalPriceItems()}.00</span>
            <p></p>
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
          <p className="error">No tienes items en tu carrito {":("}</p>

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
