import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../CartWidget/CartWidget.css";

export default function Carrito() {
  return (
    <button className="carrito">
      <AiOutlineShoppingCart />
      <span>1</span>
    </button>
  );
}
