import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import { db } from "../../firebaseConfig/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import "../ItemDetalles/ItemDetalles.css";

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
          <div className="datos">
            <img src={item.image} className="imag" alt="" />
            <p>{item.nombre}</p>
            <p>{item.descripcion}</p>
            <p>{item.precio} </p>
            <p>{item.categoria}</p>

            <p>{item.stock}</p>
          </div>

          <div>
            <input
              type="number"
              ref={cantidadRef}
              min={0}
              className="cant"
              max={item.stock}
            />
          </div>
          <p></p>
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
        "No existe ese item "
      )}
    </div>
  );
}
