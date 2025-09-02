import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [productsByReview, setProductsByReview] = useState([]);
  const [productsByRating, setProductsByRating] = useState([]);

  // function to fetch the products list from the api once on start
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/products/");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products: " + err);
    }
  };

  // sort the products list
  useEffect(() => {
    // by number of total reviews
    const byReview = [...products].sort(
      (a, b) => b.totalreviews - a.totalreviews
    );
    setProductsByReview(byReview);

    // and by rating
    const byRating = [...products].sort((a, b) => b.Rating - a.Rating);
    setProductsByRating(byRating);
  }, [products]);

  return (
    <div>
      <h1>DASHBOARD</h1>

      <Carousel
        productsList={productsByReview}
        title="Most Reviewed"
      ></Carousel>
      <br />
      <Carousel productsList={productsByRating} title="Best Rated"></Carousel>
    </div>
  );
};

export default Dashboard;
