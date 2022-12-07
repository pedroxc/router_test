import React from "react";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Olá Mundo
      <button onClick={() => navigate("/page2")} style={{ width: 250 }}>
        Ir Para Página 2
      </button>
      <div>
        <h1>PÁGINA 1</h1>
      </div>
    </div>
  );
}

export default Home;
