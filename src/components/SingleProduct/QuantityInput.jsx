import React, { useState } from "react";

import "./QuantityInput.css";
import {updateCartApi} from "../../Service/CartService";
import {toast} from "react-toastify";

const Quantity = ({ qty, stock,itemId }) => {
  const handleQtyChange = (amount) => {
    if ((amount === -1 && qty > 1) || amount === 1) {
      // setQty((prevQty) => prevQty + amount);
        updateCartApi(itemId, qty)
            .then((res) => {
                const cartItemsQty = res.data.totalItemQty || [];
                const cartItems = res.data.product || [];
                // setCart(cartItems); // ✅ always an array
                // setCartQty(cartItemsQty); // ✅ always an array
                toast.success(res.data.message); // ✅ show success toast
            })
            .catch((err) => {
                toast.error('Unauthorized');
                // setCart([]); // clear cart on failure (optional)
                // setCartQty(0); // clear cart on failure (optional)
            });
    }
  };
  return (
    <div className="align_center quantity_input">
      <button
        className={`quantity_input_button ${qty <= 1 ? "disabled" : ""}`}
        onClick={() => handleQtyChange(-1)}
        disabled={qty <= 1}
      >
        -
      </button>
      <p className="quantity_input_count">{qty}</p>
      <button
        className={`quantity_input_button ${qty >= stock ? "disabled" : ""}`}
        disabled={qty >= stock}
        onClick={() => handleQtyChange(1)}
      >
        +{" "}
      </button>
    </div>
  );
};

export default Quantity;
