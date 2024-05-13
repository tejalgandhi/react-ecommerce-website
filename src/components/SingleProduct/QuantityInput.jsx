import React, { useState } from "react";

import "./QuantityInput.css";

const Quantity = ({ qty, setQty, stock }) => {
  const handleQtyChange = (amount) => {
    if ((amount === -1 && qty > 1) || amount === 1) {
      setQty((prevQty) => prevQty + amount);
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
