import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../../css/notification.css";

const ChannelList = () => {
  const { categoryId, eventId } = useParams();
  const navigate = useNavigate();
  const { preferences } = useSelector((state) => state.preferences);

  const category = preferences.find((cat) => cat.category_id === parseInt(categoryId));
  const event = category?.events.find((evt) => evt.event_id === parseInt(eventId));

  return (
    <div className="main">
      <div className="notify-container">
        <div className="container-width">
          <button className="back-btn" onClick={() => navigate(`/category/${categoryId}`)}>
            <ArrowBackIcon /> Back
          </button>
          <h2>Choose Channel</h2>
          {event ? (
            event.channels.map((channel, index) => (
              <div key={index} className="channel-item">
                <div className="channel-container">
                  <div className="channel-sub-container">
                    {index === 0 ? <NotificationsIcon /> : index === 1 ? <MailIcon /> : <WhatsAppIcon />}
                    <div>
                      <div>{channel.channel_name}</div>
                      <div className="desc">
                        {index === 0 ? "Deliver inside your app" : index === 1 ? "Sent on your primary email" : "Sent on WhatsApp"}
                      </div>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChannelList;





