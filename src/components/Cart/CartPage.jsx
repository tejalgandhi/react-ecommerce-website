import React from "react";
import "./CartPage.css";
import user from "../../assets/user.jpeg";
import remove from "../../assets/remove.png";

import Table from "../Common/Table";
import QuantityInput from "../SingleProduct/QuantityInput";
const CartPage = () => {
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
      <Table headings={["Item", "Price", "Quantity", "Total", "Remove"]}>
        <tbody>
          <tr>
            <td>Iphone 14</td>
            <td>$999</td>
            <td className="align_center table_quantity_input">
              <QuantityInput />
            </td>
            <td>$999</td>
            <td>
              <img
                src={remove}
                alt="Remove icone"
                className="cart_remove_icon"
              />
            </td>
          </tr>
        </tbody>
      </Table>
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
