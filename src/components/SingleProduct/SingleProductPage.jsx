import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import apiClient from "../../../utils/api-client";
import "./SingleProductPage.css";
import QuantityInput from "./QuantityInput";
import useData from "../../hooks/useData";
import Loading from "../Common/Loading";

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

const SingleProductPage = ({ addToCart }) => {
  const { id } = useParams();
  // const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const { data: product, error, isLoading } = useData(`/product/${id}`, []);
  const [qty, setQty] = useState(1);
  const handleQtyChange = (amount) => {
    if ((amount === -1 && qty > 1) || amount === 1) {
      setQty((prevQty) => prevQty + amount);
    }
  };
  //   useEffect(() => {

  //   apiClient
  //     .get(`product/${id}`)
  //     .then((res) => setProduct(res.data.data))
  //     .catch((err) => setError(err.message));
  // }, []);

  // Render a message or fallback content if product is empty or undefined
  return (
    <>
      {error && <em className="form_error">{error}</em>}
      {isLoading && <Loading />}
      {!isLoading && !product && (
        <p className="align_center margin_center">No product available</p>
      )}
      {!isLoading && product && Object.keys(product).length > 0 && (
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
            <QuantityInput qty={qty} setQty={setQty} stock={product.stock} />
            <button
              className="search_button add_cart"
              onClick={() => addToCart(product, qty)}
            >
              Add to Cart
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleProductPage;
