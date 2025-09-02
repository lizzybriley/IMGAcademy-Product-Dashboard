import "../css/Product.css";
import productImage from "../assets/product.png";

const Product = ({ name, price, totalReviews, rating }) => {
  return (
    <>
      <img className="icon" src={productImage} width={100} height={100}></img>
      <div className="title">{name}</div>
      <div className="title">Price: ${price}</div>
      <div>
        <span className="left">
          Total Reviews:<span className="right">{totalReviews}</span>
        </span>
      </div>
      <div>
        <span className="left">
          Rating:<span className="right">{rating}</span>
        </span>
      </div>
    </>
  );
};

export default Product;
