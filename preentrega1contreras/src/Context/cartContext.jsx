import React, { createContext } from "react";

export const CartContext = createContext({
  carritoItems: [],
  addItem: function () {},
  removeItem: function () {},
  clear: function () {},
  isInCart: function () {},
  getItemsCount: function () {},
  getTotalPriceItems: function () {},
});
