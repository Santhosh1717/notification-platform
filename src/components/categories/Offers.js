import React from "react";
import Category from "./Category";
const Offers = () => {
  const items = [
    {
      name: "Discounts",
      desc: "Receives Discounts notification",
    },
  ];
  return (
    <>
      <Category title="Offer Notifications" path="offers" items={items} />
    </>
  );
};

export default Offers;
