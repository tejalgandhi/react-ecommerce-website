import React from "react";

import "./ProductsSidebar.css";
import plus from "../../assets/plus.jpeg";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import useData from "../../hooks/useData.js";
import ProductSidebarSkeleton from "./ProductSidebarSkeleton.jsx";

const ProductsSidebar = () => {
  const { data: categories, error, isLoading } = useData("/categories");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
              link={`/products?category=${c.slug}`}
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
        {!isLoading && error && <em className="form-error">{error.message}</em>}
        {isLoading &&
          skeletons.map((s, index) => <ProductSidebarSkeleton key={index} />)}
      </aside>
    );
  }
};

export default ProductsSidebar;
