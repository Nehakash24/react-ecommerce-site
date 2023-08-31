import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import './Home.css'
import Filter from "./Filter";
import CartContext from "./Context/Cart/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);

  const { 
    productState : { sort , byRating, searchQuery  },
   } = useContext(CartContext);

   const transformProducts = () => {
    let sortedProducts = products;
    console.log(byRating+"byRating")


    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating.rate >= byRating & prod.rating.rate <= byRating+1
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((response) => setProducts(response.data))
    .catch((error) => console.log("error fetching data:", error));
}, []);

  return (
    <div>
  <div className="home">
  <Filter/>
    <div className="products_wrapper">
      {transformProducts().map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  <Footer/>
    </div>
  );
};

export default Home;
