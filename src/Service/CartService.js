import apiClient from "../../utils/api-client";

export function addToCart(product, qty) {
  const body = new FormData();
  body.append("product_id", product.id);
  body.append("quantity", qty);
  return apiClient.post("/cart/add", body);
}
