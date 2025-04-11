import React from "react";
import "./MyOrderPage.css";
import Table from "../Common/Table";

const MyOrderPage = ({ cartItems }) => {
  return (
      <div>
        {cartItems.length === 0 ? (
            <p>No items in your cart.</p>
        ) : (
            <section className="align_center myorder_page">
              <Table headings={["Orders", "Products", "Total", "Status"]}>
                <tbody>
                {cartItems.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.product.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.total_price}</td>
                      <td>{item.id}</td>
                    </tr>
                ))}
                </tbody>
              </Table>
            </section>
        )}
      </div>
  );
};

export default MyOrderPage;
