import React from "react";
import Switch from "@mui/material/Switch";
import "../css/notification.css";
const NotificationComponent = (props) => {
  const { Channel } = props;
  const { channelName } = props;
  const { desc } = props;
  console.log(Channel);

  return (
    <div>
      <div className="channel-container">
        <div className="channel-sub-container">
          <Channel />
          <div>
            <div>{channelName}</div>
            <div className="desc">{desc}</div>
          </div>
        </div>
        <div>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
