import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../Context/cartContext";

import "../CartWidget/CartWidget.css";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { getItemsCount } = useContext(CartContext);

  const itemCount = getItemsCount();

  return (
    <>
      {itemCount ? (
        <Link to="/cart" className="carrito">
          <AiOutlineShoppingCart />
          <span>{itemCount}</span>
        </Link>
      ) : null}
    </>
  );
}
