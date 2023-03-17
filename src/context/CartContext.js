import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);

  const isInCart = (slug) => {
    const elementExists = productCartList.some(
      (elemento) => elemento.slug === slug
    );
    return elementExists;
  };

  const agregarProducto = (product, qty) => {
    const newList = [...productCartList];
    //verifico si el producto existe en el arreglo
    // si existe, actualice la propiedad quantity de ese producto
    if (isInCart(product.slug)) {
      const productIndex = productCartList.findIndex(
        (element) => element.slug === product.slug
      );
      newList[productIndex].quantity = newList[productIndex].quantity + qty;
      newList[productIndex].totalPrice =
        newList[productIndex].quantity * newList[productIndex].price;
      setProductCartList(newList);
    } else {
      //si no existe, agregue el producto al listado
      const newProduct = {
        ...product,
        quantity: qty,
        totalPrice: qty * product.price,
      };

      const newList = [...productCartList];
      newList.push(newProduct);
      setProductCartList(newList);
    }
  };

  const removeProduct = (slug) => {
    const copyArray = [...productCartList];
    const newArray = copyArray.filter((elm) => elm.slug !== slug);
    setProductCartList(newArray);
  };

  const clearProductCartList = () => {
    setProductCartList([]);
  };

  const getTotalProducts = () => {
    const totalProducts = productCartList.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    return totalProducts;
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        agregarProducto,
        removeProduct,
        clearProductCartList,
        isInCart,
        getTotalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
