import React from "react";
import Category from "./Category";
const Feedback = () => {
  const items = [
    {
      name: "Feedback",
      desc: "Receives Feedback notification",
    },
  ];

  return (
    <>
      <Category title="Feedback Notifications" path="feedback" items={items} />
    </>
  );
};

export default Feedback;
