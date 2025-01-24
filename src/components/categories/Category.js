import React, { useEffect, useState } from "react";
import ForwardIcon from "@mui/icons-material/NavigateNext";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router";
import "../../css/notification.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Category = ({ title, items, path }) => {
  const navigate = useNavigate();
  const handleNavigate = (desc, name) => {
    navigate("/channel", {
      state: { title: name, description: desc, path: path },
    });
  };
  const handleBack = () => {
    navigate("/");
  };
  const [toggle, setToggle] = useState(true);
  const [style, setStyle] = useState({ height: "55%" });

useEffect(() => {
  setStyle({ height: toggle ? "55%" : "20%" });
}, [toggle]);
  return (
    <>
      
        <div className="main">
          <div className="notify-container" style={style}>
            <div className="container-width">
              <button className="back-btn" onClick={handleBack}>
                <div>
                  <ArrowBackIcon />
                </div>{" "}
                <div>Back</div>
              </button>
              <div className="sub-head-container">
                <h2>{title}</h2>
                <div>
                  <Switch
                    defaultChecked
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  />
                </div>
              </div>
              {
                !toggle ?<><p>When Notifications are turned on, you can receive notifications.</p></> : 
              items.map((obj, index) => (
                <div
                  className="list-container"
                  key={index}
                  onClick={() => handleNavigate(obj.desc, obj.name)}
                >
                  <div>{obj.name}</div>
                  <div>
                    <ForwardIcon />{" "}
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Category;
