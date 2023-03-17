import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext.js";
import { CartItem } from "../cartItem";
import { Link } from "react-router-dom";
import "./s.css";

const CartContainer = () => {
  const { productCartList, clearProductCartList } = useContext(CartContext);

  return (
    <div>
      <div className="titulo">
        <h2>Productos en el carrito</h2>
      </div>

      <div>
        {productCartList.length > 0 ? (
          <>
            {productCartList.map((item) => (
              <CartItem key={item.slug} item={item} />
            ))}
            <div className="containerBotones">
              <button className="btn" onClick={clearProductCartList}>
                <p>Vaciar Carrito</p>
              </button>
              <Link to={"/checkout"}>
                <button className="btn">Finalizar compra</button>
              </Link>
            </div>
          </>
        ) : (
          <p>No has agregado productos</p>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
