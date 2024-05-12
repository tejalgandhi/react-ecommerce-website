import React from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";

import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";
import { object } from "zod";
import Pagination from "../Common/Pagination";

const ProductList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");
  const postsPerPage = 3;

  const {
    data: products,
    error,
    isLoading,
  } = useData(
    "/products",
    {
      params: {
        category,
        page,
        postsPerPage,
      },
    },
    [category, page]
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search]);
    console.log(currentParams);
    setSearch({ ...currentParams, page: page });
  };

  return (
    <section className="products_list_section">
      <header className="align_center product_list_header">
        <h2>Products</h2>
        <div className="align_center products_filter">
          <select name="sort" id="" className="products_sorting">
            <option value="" name="relevance">
              Relevance
            </option>
            <option value="price asc" name="price_low_to_hign">
              Price Low to High
            </option>
            <option value="price desc" name="price_hign_to_low">
              Price High to Low
            </option>
            <option value="rate asc" name="rate_low_to_hign">
              Rate Low to High
            </option>
            <option value="rate desc" name="rate_hign_to_low">
              Rate High to Low
            </option>
          </select>
        </div>
      </header>
      <div className="products_list">
        {error && <em className="form_error">{error.message}</em>}
        {isLoading &&
          skeletons.map((s, index) => <ProductCardSkeleton key={index} />)}
        {products &&
          products.data.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              price={product.price}
              stock={product.stock}
              rating="5"
              ratingCount="120"
            />
          ))}
        {Object.keys(products || []).length === 0 && !isLoading ? (
          <h2>No Products</h2>
        ) : (
          ""
        )}
      </div>
      {products && (
        <Pagination
          totalPosts={products.total}
          postsPerPage={postsPerPage}
          onClick={handlePageChange}
          currentPage={page}
        />
      )}
    </section>
  );
};

export default ProductList;
