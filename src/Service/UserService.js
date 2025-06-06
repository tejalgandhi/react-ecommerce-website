import apiClient from "../../utils/api-client";
import { jwtDecode } from "jwt-decode";

const tokenName = "token";

export async function signup(user, profile) {
  const body = new FormData();
  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("delivery_address", user.delivery_address);
  body.append("profile_pic", profile);
  const { data } = await apiClient.post("/user/register", body);
  localStorage.setItem(tokenName, data.data.token);
}
export async function login(user) {
  const body = new FormData();
  body.append("email", user.email);
  body.append("password", user.password);
  const { data } = await apiClient.post("/user/login", body);
  localStorage.setItem(tokenName, data.data.token);
}

export function logout() {
  localStorage.removeItem(tokenName);
}

export function getUser() {
  try {
    const jwt = localStorage.getItem(tokenName);

    const decoded = jwtDecode(jwt);

    return decoded;
  } catch (error) {
    // localStorage.clear();
    console.log(error);
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenName);
}
