import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function CompraFinalizada() {
  const navigate = useNavigate();
  const { compraId } = useParams();
  return (
    <div>
      <p> Compra finalizada </p>
      <p>Aqui esta tu id de compra {compraId}</p>
      <button onClick={() => navigate("/")}>Regresar a la tienda</button>
    </div>
  );
}

export default CompraFinalizada;
