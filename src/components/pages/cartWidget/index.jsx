import { Link } from "react-router-dom";
import { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  const { getTotalProducts, productCartList } = useContext(CartContext);
  return (
    <div>
      {productCartList.length >= 0 && (
        <>
          <Link to="/cart">
            <div className="cart-widget">
              <FontAwesomeIcon icon={faCartShopping} size="2xl" color="black" />
              <div className="qty-display">{getTotalProducts()}</div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartWidget;
