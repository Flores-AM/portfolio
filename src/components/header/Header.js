import React from "react";
import fondo1 from "../img/fondo1.jpg";
import fondo2 from "../img/fondo2.jpg";
import fondo3 from "../img/fondo3.png";

const Header = () => {
  return (
    <div id="Header">
      <div className="foto-perfil"></div>
      <div className="titulo">
        <h1>Flores Agustin Matias</h1>
        <h2>
          Desarrollador <span>web</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
