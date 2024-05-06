import React from "react";
import "./MyOrderPage.css";
import Table from "../Common/Table";

const MyOrderPage = () => {
  return (
    <section className="align_center myorder_page">
      <Table headings={["Orders", "Products", "Total", "Status"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>Iphone 14, power bank</td>
            <td>$1299 </td>
            <td>shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrderPage;
