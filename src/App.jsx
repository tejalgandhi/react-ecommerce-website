import React, {useState, useEffect} from "react";
import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import AllRouting from "./components/AllRouting/AllRouting";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import {getJwt, getUser} from "./Service/UserService";
import {addToCartApi, getCartApi} from "./Service/CartService";
import setAuthToken from "./Service/setAuthToken";
import Loading from "./components/Common/Loading";

setAuthToken(getJwt());

function App() {

    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [cartQty, setCartQty] = useState(0);

    useEffect(() => {
        try {
            const jwtUser = getUser();
            if (Date.now() <= jwtUser.exp * 100) {
                localStorage.removeItem("token");
                location.reload();
                setUser(null);
            } else {
                setUser(jwtUser);
                getCartApi()
                    .then((res) => {
                        const cartItemsQty = res.data.totalItemQty || [];
                        const cartItems = res.data.product || [];
                        setCart(cartItems); // ✅ always an array
                        setCartQty(cartItemsQty); // ✅ always an array
                    })
                    .catch((err) => {
                        // console.error("Failed to fetch cart", err);
                        setCartQty(0); // fallback to empty array
                        setCart([]);
                        setUser(null);// fallback to empty array
                    });

            }
        } catch (error) {
            setUser(null);
        }
    }, []);

    const addToCart = (product, qty) => {
        addToCartApi(product.id, qty)
            .then((res) => {
                const cartItemsQty = res.data.totalItemQty || [];
                const cartItems = res.data.product || [];
                setCart(cartItems); // ✅ always an array
                setCartQty(cartItemsQty); // ✅ always an array
                // setCart(updatedCart); // ✅ update state with updated cart array
                toast.success(res.data.message); // ✅ show success toast
            })
            .catch((err) => {
                toast.error('Unauthorized');
                setCart([]); // clear cart on failure (optional)
                setCartQty(0); // clear cart on failure (optional)
            });
    };

    return (
        <>
            <ToastContainer/>
            <div className="app">
                <Navbar user={user} cartItems={cart}  cartCount={cartQty}/>
                <main className="main_content">
                    <AllRouting addToCart={addToCart} cartItems = {cart}/>
                </main>
            </div>
        </>

    );

}

export default App;
