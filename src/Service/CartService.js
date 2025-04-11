import apiClient from "../../utils/api-client";

export function addToCartApi(product_id, qty) {
  const body = new FormData();
  body.append("quantity", qty);
  // Retrieve the token from local storage or wherever it's stored
  const token = localStorage.getItem('token'); // Or use your preferred method for getting the token

  // Set the Authorization header with Bearer token if it exists
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  };

  return apiClient.post(`/cart/add/${product_id}`, body, config);
}

export function updateCartApi(product_id, qty) {
  const body = new FormData();
  body.append("quantity", qty);
  // Retrieve the token from local storage or wherever it's stored
  const token = localStorage.getItem('token'); // Or use your preferred method for getting the token

  // Set the Authorization header with Bearer token if it exists
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  };

  return apiClient.post(`/cart/update/${product_id}`, body, config);
}

// api.js or cartService.js
export function getCartApi (){
  return apiClient.get('/cart'); // returns array of cart items
};

// api.js or cartService.js

