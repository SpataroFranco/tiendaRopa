import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Item = ({ product }) => {
  const { agregarProducto } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const onAdd = (quantity) => {
    agregarProducto(product, quantity);
    setQuantity(quantity);
  };

  return (
    <div className="item">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="info">
        <div className="c">
          <span className="name">{product.name}</span>
          <span className="price">${product.price}</span>
        </div>
        <span className="cat">{product.category}</span>
      </div>
      <div className="actions">
        <div className="link">
          <Link to={`/product/${product.slug}`}>Ver mas</Link>
        </div>
        <button className="probando" onClick={() => onAdd(quantity)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
