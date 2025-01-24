import React from "react";
import ForwardIcon from "@mui/icons-material/NavigateNext";
import Switch from "@mui/material/Switch";
import Category from "./Category";
const Appointment = () => {
  // const items= ["" , ""];
  const items = [
    {
      name: "Appointment Confirmation",
      desc: "Receives Appointment Confirmation notification",
    },
    {
      name: "Reminder",
      desc: "Receives Reminder notification",
    },
  ];
  return (
    <Category
      title="Appointment Notifications"
      path="appointment"
      items={items}
    />
  );
};

export default Appointment;
