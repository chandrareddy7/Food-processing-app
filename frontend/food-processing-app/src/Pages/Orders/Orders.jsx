import { useState } from "react";
import "./Orders.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import epochToDate from "../../utils/epochtodate";
import { calculateTotal } from "../../utils/calculateTotal";

const Orders = () => {
  const userOrders = [
    {
      vendorId: "66a7e1079faf64d879839476",
      orderDate: "1722443893",
      items: [
        {
          name: "Chicken 65",
          description: "65 pieces of chicked",
          price: "69",
          vendor: "SNR FOOD COURT",
          count: 69,
          foodItemId: "123456",
          _id: "669e9085ea6bdfaa0e9aea04",
        },
        {
          name: "Chicken 65",
          description: "65 pieces of chicked",
          price: "69",
          vendor: "SNR FOOD COURT",
          count: 69,
          foodItemId: "123456",
          _id: "66a7e0bf964d41869bdab741",
        },
        {
          name: "Chicken 65",
          description: "65 pieces of chicked",
          price: "69",
          vendor: "SNR FOOD COURT",
          count: 69,
          foodItemId: "123456",
          _id: "66a7e0dce1fe835a5956a51c",
        },
        {
          name: "Chicken 65",
          description: "65 pieces of chicked",
          price: "69",
          vendor: "SNR FOOD COURT",
          count: 69,
          foodItemId: "123456",
          _id: "66a7e0e23ea10d3f1a45f017",
        },
      ],
      vendor: "SNR FOOD COURT",
      status: "confirmed",
    },
    {
      vendorId: "66a7e1079faf64d879839476",
      orderDate: "1722443893",
      items: [
        {
          name: "Chicken 65",
          description: "65 pieces of chicked",
          price: "69",
          vendor: "SNR FOOD COURT",
          count: 69,
          foodItemId: "123456",
          _id: "669e9085ea6bdfaa0e9aea04",
        },
        {
          name: "Chicken 65",
          description: "65 pieces of chicked",
          price: "69",
          vendor: "SNR FOOD COURT",
          count: 69,
          foodItemId: "123456",
          _id: "66a7e0bf964d41869bdab741",
        },
        {
          name: "Chicken 65",
          description: "65 pieces of chicked",
          price: "69",
          vendor: "SNR FOOD COURT",
          count: 69,
          foodItemId: "123456",
          _id: "66a7e0dce1fe835a5956a51c",
        },
        {
          name: "Chicken 65",
          description: "65 pieces of chicked",
          price: "69",
          vendor: "SNR FOOD COURT",
          count: 69,
          foodItemId: "123456",
          _id: "66a7e0e23ea10d3f1a45f017",
        },
      ],
      vendor: "SNR Food Court",
      status: "confirmed",
    },
  ];
  const [orders, setOrders] = useState(userOrders);
  const [displayId, setDisplayId] = useState(-1);
  const handleIdChange = (id) => {
    if (id === displayId) {
      setDisplayId(-1);
    } else {
      setDisplayId(id);
    }
  };
  return (
    <div className="orders-comp">
      <div className="order-title">Your Orders</div>
      <div className="order-items">
        {orders.map((item, index) => {
          return (
            <div key={index}>
              <div className="order-item">
                <div className="vendor">{item.vendor}</div>
                <div className="date">
                  {epochToDate(Number(item.orderDate))}
                </div>
                <div className="status">{item.status}</div>
                <div className="expand" onClick={() => handleIdChange(index)}>
                  {displayId === index ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </div>
              </div>
              <div
                className={`orderItems ${displayId === index ? "active" : ""}`}
              >
                {item.items.map((item, index) => {
                  return (
                    <div className="order-foodItem" key={index}>
                      <div className="name">{item.name}</div>
                      <div className="description">{item.description}</div>
                      <div className="price">
                        ${item.price} * {item.count}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="total">
                Total Cost = ${calculateTotal(item.items)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Orders;
