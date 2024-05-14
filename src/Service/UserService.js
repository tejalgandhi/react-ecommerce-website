import apiClient from "../../utils/api-client";

export function signup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("delivery_address", user.delivery_address);
  body.append("profile_pic", profile);
  return apiClient.post("/user/register", body);
}
export function login(user) {
  const body = new FormData();
  body.append("email", user.email);
  body.append("password", user.password);
  return apiClient.post("/user/login", body);
}
