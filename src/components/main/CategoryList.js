import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPreferences, fetchUserPreferences } from "../../slice/preferencesSlice";
import { useNavigate } from "react-router";
import ForwardIcon from "@mui/icons-material/NavigateNext";
import "../../css/notification.css";

const CategoryList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { preferences, status } = useSelector((state) => state?.preferences);

  useEffect(() => {
      dispatch(fetchPreferences());
      dispatch(fetchUserPreferences());
  }, [dispatch, status]);

  const handleSubNavigation = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };
  

  return (
    <div className="main" style={{alignItems: "center"}}>
      <div className="notify-container">
        <div className="container-width">
          <h2 style={{ marginBottom: "20px" }}>Notifications</h2>
          {status === "loading" ? (
            <div>Loading...</div>
          ) : (
            preferences?.map((category) => (
              <div
                className="list-container"
                key={category.category_id}
                onClick={() => handleSubNavigation(category.category_id)}
              >
                <div>{category.category_name}</div>
                <ForwardIcon />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
