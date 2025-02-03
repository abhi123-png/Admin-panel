import React, { useState } from "react";
// import "./styles.css";
import "./style.css"

const OrdersDashboard = () => {
  const [orders] = useState([
    { id: 1, name: "Lakshay", date: "12 Aug 2022 - 12:25 am", type: "Home Delivery", trackingId: "9348jfr73", total: "₦25,000.00", action: "Completed", status: "Completed" },
    { id: 2, name: "Dev", date: "12 Aug 2022 - 12:25 am", type: "Home Delivery", trackingId: "9348jfr73", total: "₦25,000.00", action: "In-Progress", status: "In-Progress" },
    { id: 3, name: "Akshay", date: "12 Aug 2022 - 12:25 am", type: "Pick Up", trackingId: "9348jfr73", total: "₦25,000.00", action: "Pending", status: "Pending" },
    { id: 4, name: "Rahul", date:"20 jan 2025 - 10:15 am",type: "pick Up",trackingId: "701432jhre",total: "#35,000",action: "pending", status: "pending"},
    { id: 5, name: "Abhishek", date:"21 jan 2025 - 10:30 am",type: "Home delivery ",trackingId: "1234qwer",total:"# 2500",action: "Completed", status: "progress"},
    { id: 6, name: "Aakash", date: "22 jab 2025 - 10:45 am"}
  ]);

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Orders Dashboard</h1>
        <button className="create-order-btn">+ Create a New Order</button>
      </header>

      <div className="summary-section">
        <div className="summary-card">
          <h3>All Orders</h3>
          <p>0</p>
        </div>
        <div className="summary-card">
          <h3>Pending</h3>
          <p>0</p>
        </div>
        <div className="summary-card">
          <h3>Completed</h3>
          <p>0</p>
        </div>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Distributor Name</th>
            <th>Order Date</th>
            <th>Order Type</th>
            <th>Tracking ID</th>
            <th>Order Total</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.date}</td>
              <td>{order.type}</td>
              <td>{order.trackingId}</td>
              <td>{order.total}</td>
              <td>
                <span className={`status-badge ${order.action.toLowerCase()}`}>{order.action}</span>
              </td>
              <td>
                <span className={`status-label ${order.status.toLowerCase()}`}>{order.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersDashboard;
