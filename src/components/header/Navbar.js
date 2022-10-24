import React, { useState } from "react";
import { Link } from "react-scroll";
import BurgerBoton from "./BurgerBoton";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const cerrar = () => {
    setClicked();
  };

  return (
    <div>
      <div className="navContainer">
        <h2>
          Flores <span>WD</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <div className="marker"></div>
          <Link
            onClick={cerrar}
            className="a"
            to="Header"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            Inicio
          </Link>
          <Link
            onClick={cerrar}
            className="a"
            to="info"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            Sobre Mi
          </Link>
          <Link
            onClick={cerrar}
            className="a"
            to="body-cards"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            Portafolio
          </Link>
          <Link
            onClick={cerrar}
            className="a"
            to="contacto"
            spy={true}
            smooth={true}
            offset={0}
            duration={100}
          >
            Contacto
          </Link>
        </div>
        <BurgerBoton clicked={clicked} handleClick={handleClick} />
        <div className={`initial ${clicked ? "active" : ""}`}></div>
      </div>
    </div>
    // <div className="navbar_container">
    //   <nav class="navbar navbar-expand-lg ">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="#">
    //         Navbar
    //       </a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNavAltMarkup"
    //         aria-controls="navbarNavAltMarkup"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div class="navbar-nav">
    //           <Link
    //             to="Header"
    //             spy={true}
    //             smooth={true}
    //             offset={0}
    //             duration={200}
    //           >
    //             Inicio
    //           </Link>
    //           <Link
    //             to="info"
    //             spy={true}
    //             smooth={true}
    //             offset={0}
    //             duration={200}
    //           >
    //             Sobre Mi
    //           </Link>
    //           <Link
    //             to="body-cards"
    //             spy={true}
    //             smooth={true}
    //             offset={0}
    //             duration={200}
    //           >
    //             Portafolio
    //           </Link>
    //           <Link to="#" spy={true} smooth={true} offset={0} duration={200}>
    //             Contacto
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Nav;
