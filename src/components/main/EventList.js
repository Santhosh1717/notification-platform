import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ForwardIcon from "@mui/icons-material/NavigateNext";
import "../../css/notification.css";

const EventList = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { preferences, status } = useSelector((state) => state.preferences);
  const [toggle, setToggle] = useState(true);
  const [style, setStyle] = useState({ height: "55%" });

  useEffect(() => {
    setStyle({ height: toggle ? "55%" : "20%" });
  }, [toggle]);

  if (status === "loading") return <div>Loading...</div>;

  const category = preferences.find((cat) => cat.category_id === parseInt(categoryId));
  console.log(preferences)
  return (
    <div className="main">
      <div className="notify-container" style={style}>
        <div className="container-width">
          <button className="back-btn" onClick={() => navigate("/")}>
            <ArrowBackIcon /> Back
          </button>
          <div className="sub-head-container">
            <h2>{category?.category_name || "Category"}</h2>
            <Switch defaultChecked onClick={() => setToggle(!toggle)} />
          </div>
          {!toggle ? (
            <p>When Notifications are turned on, you can receive notifications.</p>
          ) : category ? (
            category.events.map((event) => (
              <div className="list-container" key={event.event_id}>
                <Link to={`/category/${categoryId}/event/${event.event_id}`} className="event-link">
                  <div>{event.event_name}</div>
                </Link>
                <ForwardIcon />
              </div>
            ))
          ) : (
            <div>No events found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;





