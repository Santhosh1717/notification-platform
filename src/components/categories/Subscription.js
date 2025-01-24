import React from "react";
import "../../css/notification.css";
import { useNavigate } from "react-router";
import Category from "./Category";
const Subscription = () => {
  const navigate = useNavigate();
  // const handleNavigate = (desc) => {
  //   navigate("/channel", { state: {title: name ,description: desc } });
  // };
  const items = [
    {
      name: "Subcription Purchase",
      desc: "Receives Subscription Purchase notification",
    },
    {
      name: "Subscription Renewal Reminder",
      desc: "Receives Subscription Renewal Reminder notification",
    },
    {
      name: "Subcription Expired",
      desc: "Receives Subcription Expired notification",
    },
  ];
  return (
    <>
      <Category
        title="Subscription Notifications"
        items={items}
        path="subscription"
      />
    </>
  );
};

export default Subscription;
