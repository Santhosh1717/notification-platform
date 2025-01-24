import React from "react";
import Category from "./Category";
const Payment = () => {
  const items = [
    {
      name: "Payment Confirmation",
      desc: "Receives Payment Confirmation notification",
    },
    {
      name: "Invoice",
      desc: "Receives Invoice notification",
    },
    {
      name: "Payment Failed",
      desc: "Receives Payment Failed notification",
    },
  ];
  return (
    <>
      <Category title="Payment Notifications" path="payment" items={items} />
    </>
  );
};

export default Payment;
