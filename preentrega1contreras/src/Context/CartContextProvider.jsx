import React, { useState } from "react";
import { CartContext } from "./cartContext";

function CartContextProvider({ children }) {
  const [carritoItems, setCarritoItems] = useState([]);

  const addItem = (item, cantidad) => {
    //carritoItems.push({ item, cantidad });
    if (!isInCart(item.id)) {
      return setCarritoItems((prevCarritoItems) => [
        ...prevCarritoItems,
        { item, cantidad },
      ]);
    }

    alert("Ya agregaste ese item :(");
  };

  const removeItem = (id) => {
    setCarritoItems((prevCarritoItems) =>
      prevCarritoItems.filter(({ item }) => item.id !== id)
    );
  };
  //function removeItem() {}

  const clear = () => {
    setCarritoItems([]);
  };

  const isInCart = (id) => {
    return !!carritoItems.find(({ item }) => item.id === id);
  };

  const getItemsCount = () => {
    return carritoItems.reduce((cuenta, { cantidad }) => cuenta + cantidad, 0);
  };

  const getTotalPriceItems = () => {
    return carritoItems.reduce((totalPrecio, { item, cantidad }) => {
      const precio = item.precio * cantidad;

      return totalPrecio + precio;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        carritoItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        getItemsCount,
        getTotalPriceItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
