import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import "../../css/notification.css";
import axios from "axios";
import { fetchUserPreferences, updateUserPreferenceChannel, Icons} from "../../slice/preferencesSlice";
function Channel({ channel , categoryId , eventId, Icons , desc}) {
  const [toggle, setToggle] = useState(channel.channel_isenabled);
  const dispatch = useDispatch();
  const handleToggle = async(channel_id, isenabled) => {
    await axios.put(
      `http://localhost:8001/api/v1/notifications/users/1/preferences/categories/${categoryId}/events/${eventId}/channels/${channel_id}`,
      { channel_isenabled: !isenabled },
      { headers: { "Content-Type": "application/json" } } 
    )
    .then(response => setToggle(!isenabled))
    .catch(error => console.error("Error:", error.response ? error.response.data : error));
    setToggle(!isenabled)
  };

  useEffect(() =>{
     dispatch(fetchUserPreferences())
  }, [toggle])
  return (
    <>
      <div key={channel.channel_id} className="channel-item">
        <div className="channel-container">
          <div className="channel-sub-container">
            <Icons />
            <div>
              <div>{channel.channel_name}</div>
              {/* <div>{channel.channel_isenabled + ""}</div> */}
              <div className="desc">
                  {desc}
              </div>
            </div>
          </div>
          <Switch
            checked={toggle}
            onClick={() =>
              handleToggle(channel.channel_id, toggle)
            }
          />
        </div>
      </div>
    </>
  );
}

export default Channel;
