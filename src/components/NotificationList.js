import React, { useState } from "react";
import "../css/notification.css";
import ForwardIcon from "@mui/icons-material/NavigateNext";
import { data } from "../utils/data";
import { useNavigate } from "react-router";
const NotificationList = () => {
  const [obj, setObj] = useState(data);
  const navigate = useNavigate();
  const handleSubNavigation = (obj) => {
    navigate(`/${obj}`);
  };
  const items = [
    { name: "Subscription Related", path: "subscription" },
    { name: "Appointment Related", path: "appointment" },
    { name: "Payment and Billing", path: "payment" },
    { name: "Offers Related", path: "offers" },
    { name: "Feedback", path: "feedback" },
  ];
  return (
    <div className="main">
      <div className="notify-container">
        <div className="container-width">
          <h2 style={{ marginBottom: "20px" }}>Notifications</h2>
          {items.map((obj, index) => (
            <div
              className="list-container"
              key={index}
              onClick={() => handleSubNavigation(obj.path)}
            >
              <div>{obj.name}</div>
              <div>
                <ForwardIcon />{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
