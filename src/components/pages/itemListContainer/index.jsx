import ItemList from "../itemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./s.css";
import Hero from "../hero";
import { useDB } from "../../../hooks";

const ItemListContainer = () => {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = useDB({
    action: "get",
    path: "store",
    quantity: "all",
    start: true,
  });

  useEffect(() => {
    if (cat && !db.loading) {
      const arr = db.data.filter((el) => el.cat === cat);
      setProducts(arr);
      setLoading(false);
    } else {
      !db.loading && setProducts(db.data);
      setLoading(db.loading);
    }
  }, [cat, db.loading]);

  return (
    <div className="products">
      <Hero />

      <h1>Novedad</h1>
      <ItemList products={products} loading={loading} />
    </div>
  );
};

export default ItemListContainer;
