import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../../css/notification.css";
import axios from "axios";
import Channel from "./Channel";
const ChannelList = () => {
  const { categoryId, eventId } = useParams();
  const navigate = useNavigate();
  const { preferences, userPreferences } = useSelector(
    (state) => state?.preferences
  );
  // const { userPreferences } = useSelector((state) => state.userPreferences);
  const icons = {
      1: NotificationsIcon,
      2: MailIcon,
      3: WhatsAppIcon,
  }

  const desc = {
     1: "Deliver inside your app",
     2: "Sent on your primary email",
     3: "Sent on WhatsApp",
  }


  const category = preferences.find(
    (cat) => cat.category_id === parseInt(categoryId)
  );
  const event = category?.events.find(
    (evt) => evt.event_id === parseInt(eventId)
  );
  console.log(userPreferences);

  const userCategory = userPreferences.find(
    (cat) => cat.category_id === parseInt(categoryId)
  );
  console.log("userCategory",userCategory);
  

  const userEvent = userCategory?.events.find(
    (evt) => evt.event_id === parseInt(eventId)
  );
  // if (userEvent?.channels) {
  //   userEvent.channels.sort((a, b) => a.channel_id - b.channel_id);
  // }
  const sortedChannels = userEvent?.channels
  ? [...userEvent.channels].sort((a, b) => a.channel_id - b.channel_id)
  : [];
  
  console.log("userEvent",userEvent);
  
  const [toggle, setToggle] = useState(true);
  const handleToggle = (channel_id, isenabled) => {
    axios.put(
      "http://localhost:8001/api/v1/notifications/users/1/preferences/categories/1/events/1/channels/1",
      { channel_isenabled: !isenabled }, 
      { headers: { "Content-Type": "application/json" } }
    )
    .then(response => console.log(response.data))
    .catch(error => console.error("Error:", error.response ? error.response.data : error));
    
    const channel_check = userEvent?.channels.find(
      (channel) => channel.channel_id == parseInt(channel_id)
    )

    console.log(channel_check);
    console.log(isenabled);
    
  };

  return (
    <div className="main" style={{alignItems: "center"}}>
      <div className="notify-container">
        <div className="container-width">
          <button
            className="back-btn"
            onClick={() => navigate(`/category/${categoryId}`)}
          >
            <ArrowBackIcon /> Back
          </button>
          <h2>Choose Channel</h2>
          {userEvent ? (
            sortedChannels.map((channel, index) => (
              <div key={index} className="channel-item">
                <Channel channel={channel} categoryId = {categoryId} eventId={eventId} Icons = {icons[channel.channel_id]} desc={desc[channel.channel_id]}/>
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
