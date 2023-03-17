import Item from "../item";

const ItemList = ({ products, loading }) => {
  return (
    <div className="list">
      {!loading && products.map((el, index) => <Item key={index} product={el} />)}
    </div>
  );
};

export default ItemList;
