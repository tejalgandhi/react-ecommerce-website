import apiClient from "../../utils/api-client";

export function addToCartApi(product_id, qty) {
  const body = new FormData();
  body.append("quantity", qty);
  return apiClient.post(`/cart/${product_id}`, body);
}
