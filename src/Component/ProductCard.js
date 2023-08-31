import React, { useContext } from "react";
import './ProductCard.css'
import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "./Context/Cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" }; // 'Symbol' should be lowercase 'symbol'
  
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard_img" src={product.image} alt="product" />
        <h6>{product.title}</h6>
        <div className="ProductCard__price"> {/* Remove the extra single quote here */}
          <h5>{formatCurrency(` ${product.price}`, opts)}</h5>
          <div className="ProductCard__Rateing">
          <Rating rating={product.rating.rate} count = {product.rating.count} />
        </div>
          <button className="ProductCard__button" onClick={() => addToCart(product)}>Add to basket</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
