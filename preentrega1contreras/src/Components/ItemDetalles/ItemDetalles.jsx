import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import { db } from "../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export default function ItemDetalles() {
  const { addItem, isInCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const { itemId } = useParams();
  const cantidadRef = useRef(null);
  const navegar = useNavigate();

  const isItemInCart = isInCart(itemId);
  let item = null;

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(query(collection(db, "items")));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    })();
  }, []);

  if (items && items.length > 0) {
    item = items.find((item) => item.id === itemId);
  }

  return (
    <div>
      {item ? (
        <>
          <p>{item.nombre}</p>
          <p>{item.descripcion}</p>
          <p>{item.precio}</p>
          <p>{item.categoria}</p>

          <div>
            <input type="number" ref={cantidadRef} min={0} />
          </div>
          {!isItemInCart ? (
            <button
              onClick={() => {
                addItem(
                  {
                    ...item,
                  },
                  +cantidadRef.current.value
                );
              }}
            >
              Agregar Item
            </button>
          ) : (
            <button
              onClick={() => {
                navegar("/comprador");
              }}
            >
              Terminar compra
            </button>
          )}
        </>
      ) : (
        "No existe ese item"
      )}
    </div>
  );
}
