import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiClient from "../../../utils/api-client";
import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";

const products = {
  id: 1,
  title: "Product Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
  price: 9.9911,
  images: [
    "https://via.placeholder.com/500x500?text=Product+Image+1",
    "https://via.placeholder.com/500x500?text=Product+Image+2",
    "https://via.placeholder.com/500x500?text=Product+Image+3",
    "https://via.placeholder.com/500x500?text=Product+Image+4",
  ],
  stock: 10,
};

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    apiClient
      .get(`product/${id}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => setError(err.message));
  }, []);

  if (product && Object.keys(product).length > 0) {
    return (
      <section className="align_center single_product">
        <div className="align_center">
          <div className="single_product_thumbnails">
            {console.log(product.images)}
            {product.images.map((image, index) => (
              <img
                src={image}
                alt={product.title}
                className={selectedImage == index ? "selected_image" : ""}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          {/* {images.map((image, index) => (
                <img key={index} src={`${backendStorageUrl}/${image}`} alt={`Image ${index + 1}`} />
            ))} */}
          <img
            src={product.images[selectedImage]}
            alt={product.title}
            className="single_product_display"
          />
        </div>
        <div className="single_product_details">
          <h1 className="single_product_title">{product.title}</h1>
          <p className="single_product_description">{product.description}</p>
          <p className="single_product_price">${product.price.toFixed(2)}</p>
          <h2 className="quantity_title">Quantity:</h2>
          <QuantityInput />
          <button className="search_button add_cart">Add to Cart</button>
        </div>
      </section>
    );
  } else {
    // Render a message or fallback content if product is empty or undefined
    return <p>No product available</p>;
  }
};

export default SingleProductPage;
