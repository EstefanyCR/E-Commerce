import React, { createContext } from "react";

const cartContext = createContext([]);
function cartContext() {
  return <div>cartContext</div>;
}

export default cartContext;
