import React from "react";
import { useNavigate } from "react-router-dom";

function PageTwo() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Olá Mundo
      <button onClick={() => navigate("/")} style={{ width: 250 }}>
        Ir Para Página 1
      </button>
      <div>
        <h1>PÁGINA 2</h1>
      </div>
    </div>
  );
}

export default PageTwo;
