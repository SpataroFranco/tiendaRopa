import ItemListContainer from "../components/pages/itemListContainer";
import ItemDetailContainer from "../components/pages/itemDetailContainer";
import { Routes, Route } from "react-router-dom";
import {CartProvider} from "../context/CartContext";
import CartContainer from "../components/pages/cartContainer";
import Checkout from "../components/pages/checkout";

const Router = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/products/:cat" element={<ItemListContainer />} />
        <Route path="/product/:slug" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </CartProvider>
  );
};

export default Router;
