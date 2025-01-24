import NotificationsIcon from "@mui/icons-material/Notifications";
import Switch from "@mui/material/Switch";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SmsIcon from "@mui/icons-material/Sms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationComponent from "./NotificationComponent";
import "../css/notification.css";
import { useLocation, useNavigate } from "react-router";
const Notification = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const data = useLocation()?.state;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(`/${data.path}`);
  };
  console.log(data);
  const items = [
    {
      icon: NotificationsIcon,
      channelName: "In App Notification",
      desc: "Deliver inside your app",
    },
    {
      icon: MailIcon,
      channelName: "Email",
      desc: "Sent on your primary email",
    },
    {
      icon: SmsIcon,
      channelName: "SMS",
      desc: "Sent on your SMS",
    },
    {
      icon: WhatsAppIcon,
      channelName: "Whatsapp",
      desc: "Sent on your WhatsApp",
    },
  ];
  return (
    <>
      <div className="main">
        <div className="notify-container">
          <div className="container-width">
            <button className="back-btn" onClick={handleBack}>
              <div>
                <ArrowBackIcon />
              </div>{" "}
              <div>Back</div>
            </button>
            <h2 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              {data.title}
            </h2>
            <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              {data.description}
            </p>
            <h2 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              Choose Channel
            </h2>
            {items.map((obj, index) => (
              <NotificationComponent
                key={index}
                Channel={obj.icon}
                channelName={obj.channelName}
                desc={obj.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Notification;
