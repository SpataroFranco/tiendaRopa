import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext.js";
import "./s.css";

export const CartItem = ({ item }) => {
  const { removeProduct } = useContext(CartContext);
  return (
    <div className="cart-container">
      <div className="cart-item-container">
        <div className="cart-img-container">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="cart-info-container">
          <h2>{item.name}</h2>
          <p>
            <span>Precio unitario: </span>${item.price}
          </p>
          <p>
            <span>Cantidad: </span>
            {item.quantity}
          </p>
          <p>
            <span>Precio total: </span> ${item.totalPrice}
          </p>
          <button className="btn" onClick={() => removeProduct(item.slug)}>
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
};
