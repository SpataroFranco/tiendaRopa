import { useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { agregarProducto } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const onAdd = (quantity) => {
    agregarProducto(product, quantity);
    setQuantity(quantity);
  };

  return (
    <div className="content">
      <div className="contImage">
        <img className="image" src={product.image} alt={product.name} />
      </div>

      <div className="card">
        <div className="info">
          <h2>{product.name}</h2>
          <span className="price">{product.price}</span>
        </div>
        <Quanty
          quantity={product.stock}
          setQuantity={setQuantity}
          selected={quantity}
          onAdd={quantity}
        />
        <div className="actions">
          <div className="link">
            <Link to={"/cart"}>Ir al carrito</Link>
          </div>

          <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
      </div>
      <div className="extra">
        <h3>Acerca del producto</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

const Quanty = ({ quantity, setQuantity, selected, onAdd }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const action = (value) => {
    setQuantity(value);
    setOpen(false);
  };
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < quantity; i++) {
      arr.push(
        <span className="i" onClick={() => action(i + 1)}>
          {i + 1}
        </span>
      );
    }
    setItems(arr);
  }, [quantity]);
  return (
    <div className="quanty">
      <span>Cantidad: </span>{" "}
      <div className="list-q">
        <span className="selected" onClick={() => setOpen((open) => !open)}>
          {selected}
        </span>
        <div className={`options ${open && "open"}`}>
          {items.map((el) => {
            return <span key={el}>{el}</span>;
          })}
        </div>
      </div>
      <span>Total ({quantity})</span>
    </div>
  );
};
export default ItemDetail;
