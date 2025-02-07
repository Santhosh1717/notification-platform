import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ForwardIcon from "@mui/icons-material/NavigateNext";
import "../../css/notification.css";
import axios from "axios";
import { fetchUserPreferences } from "../../slice/preferencesSlice";

const EventList = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { preferences, status, userPreferences } = useSelector((state) => state.preferences);
  const [style, setStyle] = useState({ height: "55%" });
  const userCategory = userPreferences.find(
    (cat) => cat.category_id === parseInt(categoryId)
  );
  const [toggle, setToggle] = useState(userCategory?.events[0]?.event_isenabled);
  console.log(toggle,"boolena");
  const dispatch = useDispatch();
  const [mainStyle, setMainStyle] = useState({"alignItems" : "center"});
  const [notifyStyle, setNotifyStyle] = useState({});
  useEffect(() => {
    setStyle({ height: toggle ? "55%" : "20%" });
    dispatch(fetchUserPreferences());
  }, [toggle]);
  
  if (status === "loading") return <div>Loading...</div>;

  const category = preferences.find((cat) => cat.category_id === parseInt(categoryId));
  console.log("userPreference from EventList",userPreferences);
  console.log("userCategory from EventList",userCategory);
  
  const handleToggle = async() =>{
      await axios.put(`http://localhost:8001/api/v1/notifications/users/1/preferences/categories/${categoryId}` ,
      {"event_isenabled": !toggle},
      { headers: { "Content-Type": "application/json" } } 
    )
    setToggle(!toggle)
    if(toggle == false){
      setMainStyle({"alignItems" : "center"})
      setNotifyStyle({})
    }else{
      setMainStyle({"paddingTop": "143px"})
      setNotifyStyle({"height": "20%"})
    }
  }
  const handleNavigate = (event) =>{
       navigate(`/category/${categoryId}/event/${event.event_id}`)
  }
  console.log(preferences)
  return (
    <div className="main" style={mainStyle}>
      <div className="notify-container" style={notifyStyle}>
        <div className="container-width">
          <button className="back-btn" onClick={() => navigate("/")}>
            <ArrowBackIcon /> Back
          </button>
          <div className="sub-head-container">
            <h2>{category?.category_name || "Category"}</h2>
            <Switch checked={toggle} onClick={() => handleToggle()} />
          </div>
          {!toggle ? (
            <p>When Notifications are turned on, you can receive notifications.</p>
          ) : category ? (
            category.events.map((event) => (
              <div className="list-container" key={event.event_id} onClick={() => handleNavigate(event)}>
                {/* <Link to={`/category/${categoryId}/event/${event.event_id}`} className="event-link"> */}
                  <div>{event.event_name}</div>
                {/* </Link> */}
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





