import NavBar from "./navbar";
import Footer from "./footer";
import "./s.css";
import { CartProvider } from '../../../context/CartContext.js';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <CartProvider>
        <NavBar />
        <div className="content">{children}</div>
        <Footer />
      </CartProvider>
    </div>
  );
};
export default Layout;
