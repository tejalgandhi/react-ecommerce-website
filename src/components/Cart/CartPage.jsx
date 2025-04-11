import React from "react";
import "./CartPage.css";
import user from "../../assets/user.jpeg";
import remove from "../../assets/remove.png";

import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";
const CartPage = ({cartItems}) => {
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img src={user} alt="user profile"></img>
        <div>
          <p className="user_name">Tejal</p>
          <p className="user_email">tejal@gmail.com</p>
        </div>
      </div>
      {/* cart table */}
      {cartItems.length === 0 ? (
          <p>No items in your cart.</p>
      ) : (
            <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
              <tbody>
              {cartItems.items.map((item, index) => (
                    <tr>
                      <td>{item.product.title}</td>
                      <td>${item.product.price}</td>
                      <td className="align_center table_quantity_input">
                        <QuantityInput qty={item.quantity}  stock={item.product.stock} itemId = {item.id}/>
                      </td>
                      <td>${item.total_price}</td>
                      <td>
                        <img
                            src={remove}
                            alt="Remove icone"
                            className="cart_remove_icon"
                        />
                      </td>
                    </tr>
              ))}
              </tbody>
            </Table>

          // </section>
      )}

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>SubTotal:</td>
            <td>$999</td>
          </tr>
          <tr>
            <td>Shipping Charge:</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Final Total:</td>
            <td>$1004</td>
          </tr>
        </tbody>
      </table>
      <button className="search_button checkout_button">Checkout</button>
    </section>
  );
};

export default CartPage;
