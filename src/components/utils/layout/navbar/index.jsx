import "./s.css";
import { Link } from "react-router-dom";
import CartWidget from "../../../pages/cartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="logo">Spataro</span>
      </Link>
      <div className="links">
        <div className="section">
          <span className="sec">Seccion</span>
          <div className="submenu">
            <Link to="/products/remera"> Remeras</Link>
            <Link to="/products/pantalon"> Pantalones</Link>
            <Link to="/products/buzo"> Buzos</Link>
            <Link to="/products/gorra"> Gorras</Link>
          </div>
        </div>
        <div className="section">
          <CartWidget />
        </div>
        <div className="section">
          <FontAwesomeIcon icon={faUser} size="2xl" color="black" />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
