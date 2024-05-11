import React, { useState, useEffect } from "react";
import apiClient from "../../../utils/api-client";

import "./ProductsSidebar.css";
import plus from "../../assets/plus.jpeg";
import LinkWithIcon from "../Navbar/LinkWithIcon";

const ProductsSidebar = () => {
  const [category, setCategory] = useState([]);
  const [errors, setErrors] = useState("");
  useEffect(() => {
    apiClient
      .get("/categories")
      .then((res) => setCategory(res.data.data))
      .catch((e) => setErrors(e));
  }, []);
  console.log(category);

  if (category && Object.keys(category).length > 0) {
    return (
      <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_links">
          {category.map((c) => (
            <LinkWithIcon
              key={c.id}
              id={c.id}
              title={c.name}
              link={`products?category=${c.name}`}
              emoji={plus}
              sidebar={true}
            ></LinkWithIcon>
          ))}
        </div>
      </aside>
    );
  } else {
    return (
      <aside className="products_sidebar">
        {errors && <em className="form-error">{errors.message}</em>}
        <h2>No Category Found</h2>
      </aside>
    );
  }
};

export default ProductsSidebar;
