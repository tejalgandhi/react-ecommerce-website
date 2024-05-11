import React from "react";

import "./ProductsSidebar.css";
import plus from "../../assets/plus.jpeg";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import useData from "../../hooks/useData.js";

const ProductsSidebar = () => {
  const { data: categories, error } = useData("/categories");
  if (categories && Object.keys(categories).length > 0) {
    return (
      <aside className="products_sidebar">
        <h2>Category</h2>
        <div className="category_links">
          {categories.map((c) => (
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
        {error && <em className="form-error">{error.message}</em>}
        <h2>No Category Found</h2>
      </aside>
    );
  }
};

export default ProductsSidebar;
