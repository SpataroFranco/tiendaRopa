import { CartContext } from "../../../context/CartContext.js";
import { useContext, useEffect, useState } from "react";
import { useDB } from "../../../hooks";
import "./s.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { productCartList } = useContext(CartContext);
  let total = 0;
  productCartList.map((item) => (total += item.totalPrice));
  const [order, setOrder] = useState("");
  const [cart, setCart] = useState(productCartList);
  const [getOrder, setGetOrder] = useState(false);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    fecha: "",
    submit: false,
  });
  const db = useDB({
    action: "post",
    start: form.submit,
    body: {
      name: form.name,
      lastName: form.lastName,
      phone: form.phone,
      email: form.email,
      fecha: new Date(),
      cart: productCartList,
    },
    path: "orders",
  });
  const consultOrder = useDB({
    action: "get",
    start: getOrder,
    path: "orders",
    quantity: "one",
    filter: order,
  });
  const change = (e) => {
    // if(validar()){
    const a = { ...form };
    console.log(a);
    a[e.target.name] = e.target.value;
    setForm(a);
    // }
  };

  // const validar = () =>{
  //   let email1=document.getElementById("email").value;
  //   let email2=document.getElementById("email2").value;
  //   if(email1 === email2){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  const reset = () => {
    setOrder("");
    setGetOrder(false);
    setForm({
      name: "",
      lastName: "",
      phone: "",
      email: "",
      fecha: "",
      submit: false,
    });
    setCart(productCartList);
    localStorage.getItem("order") && localStorage.removeItem("order");
  };
  useEffect(() => {
    const o = localStorage.getItem("order") || null;
    if (o) {
      setOrder(o);
    }
  }, []);

  useEffect(() => {
    order !== "" && !form.submit && setGetOrder(true);
  }, [order]);

  useEffect(() => {
    if (!db.loading && db.data.id) {
      localStorage.setItem("order", db.data.id);
      setOrder(db.data.id);
    }
  }, [db]);

  useEffect(() => {
    console.log(consultOrder);
    if (!consultOrder.loading && getOrder) {
      setForm({
        ...form,
        name: consultOrder.data.name,
        lastName: consultOrder.data.lastName,
        email: consultOrder.data.email,
        phone: consultOrder.data.phone,
        fecha: consultOrder.data.fecha,
      });
      setCart(consultOrder.data.cart);
      setGetOrder(false);
    }
  }, [consultOrder]);
  return (
    <div className="containerCheckout">
      {order !== "" ? (
        <>
          <div className="contain">
            <div className="datosUsuario">
              <h1>Datos del usuario</h1>
              <div className="datosUsuario">
                <p>
                  <span>Pedido de: </span>
                  {form.name} {form.lastName}
                </p>
                <p>
                  <span>Email:</span>
                  {form.email}
                </p>
                <p>
                  <span>Telefono:</span>
                  {form.phone}
                </p>
                <p>
                  <span>Numero de orden:</span>
                  {order}
                </p>
              </div>
            </div>
            <div className="resumenCompra">
              <h2>Resumen de tu compra</h2>
              {cart.map((item) => (
                <>
                  <div className="resumen">
                    <img className="imgResumen" src={item.image} alt="" />

                    <p>
                      <span>Producto:</span>
                      {item.name}
                    </p>
                    <p>
                      <span>Cantidad:</span>
                      {item.quantity}
                    </p>
                    <p>
                      <span>Precio total:</span>
                      {item.totalPrice}
                    </p>
                  </div>
                </>
              ))}
              <div className="resumen">
                <p>
                  <span>Total a pagar:</span> {total}
                </p>
              </div>
            </div>
          </div>
          <div className="btnResumen">
            <Link to="/">
              <button onClick={reset}>Hacer otra compra</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="contain">
            <div className="formulario">
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={change}
                  placeholder="Nombre"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  onChange={change}
                  placeholder="Apellido"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={change}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email2"
                  id="email2"
                  placeholder="Repita su email"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  onChange={change}
                  placeholder="telefono"
                />
              </div>
              <div>
                <button
                  onClick={() =>
                    change({ target: { name: "submit", value: true } })
                  }
                >
                  Comprar
                </button>
              </div>
            </div>
            <div>
              <div>
                <h2>Detalles de tu compra</h2>
                {cart.map((item) => (
                  <>
                    <div className="detailCompra">
                      <p>
                        <span>Producto:</span> {item.name}
                      </p>
                      <p>
                        <span>Cantidad:</span> {item.quantity}
                      </p>
                      <p>
                        <span>Precio total:</span> {item.totalPrice}
                      </p>
                    </div>
                  </>
                ))}
                <div className="total">
                  <span>Total a pagar:</span> {total}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
