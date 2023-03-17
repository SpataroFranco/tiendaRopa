import { useEffect, useState } from "react";
import "./s.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail";
import { useDB } from "../../../hooks";
import { where } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const db = useDB({
    action: "get",
    filter: where("slug", "==", slug),
    quantity: "all",
    path: "store",
    start: true,
  });
  useEffect(() => {
    if (!db.loading) {
      setProduct(db.data[0]);
    }
  }, [db.loading]);
  useEffect(() => {
    console.log(db);
  }, [db]);
  return (
    <div className="product">
      <ItemDetail product={product} />
    </div>
  );
};
export default ItemDetailContainer;
