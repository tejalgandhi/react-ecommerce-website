import { useState, useEffect } from "react";

import AllRouting from "./components/AllRouting/AllRouting";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { getJwt, getUser } from "./Service/UserService";
import setAuthToken from "./Service/setAuthToken";
setAuthToken(getJwt());

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    try {
      const jwtUser = getUser();
      console.log(jwtUser);
      if (Date.now() <= jwtUser.exp * 100) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setUser(jwtUser);
        console.log(jwtUser);
      }
    } catch (error) {}
  }, []);

  const addToCart = (product, qty) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product.id === product.id
    );
    if (productIndex === -1) {
      updatedCart.push({ product: product, qty: qty });
    } else {
      updatedCart[productIndex].qty += qty;
    }
    setCart(updatedCart);
  };

  return (
    <div className="app">
      <Navbar user={user} cartCount={cart.length} />
      <main className="main_content">
        <AllRouting addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
