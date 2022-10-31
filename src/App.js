// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   NavLink,
// } from "react-router-dom";
import Header from "./components/header/Header";
import Info from "./components/header/Info";
import Nav from "./components/header/Navbar";
import Portafolio from "./components/header/Portafolio";
import Contacto from "./components/header/Contacto";

function App() {
  return (
    <div className="App">
      <Nav className="nav" />
      <Header />
      <Info />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;
