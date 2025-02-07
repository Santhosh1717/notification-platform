import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPreferences = createAsyncThunk(
  "preferences/fetchPreferences",
  async () => {
    const response = await fetch(
      "http://localhost:8001/api/v1/notifications/tenants/1/preferences"
    );
    const data = await response.json();
    return data.preferences;
  }
);
export const fetchUserPreferences = createAsyncThunk(
  "preferences/fetchUserPreferences",
  async () => {
    const response = await fetch(
      "http://localhost:8001/api/v1/notifications/users/1/preferences"
    );
    const data = await response.json();
    // console.log(data.preferences)
    return data.preferences;
  }
);


const preferencesSlice = createSlice({
  name: "preferences",
  initialState: { preferences: [], userPreferences: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchPreferences.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.preferences = action.payload;
    })
    .addCase(fetchUserPreferences.fulfilled, (state , action) => {
      state.status = "succeeded";
      state.userPreferences = action.payload;
    })
    
  },
});

export default preferencesSlice.reducer;




































// export const updateUserPreferenceChannel = createAsyncThunk(
//   "preferences/updateUserPreferenceChannel",
//   async ({categoryId , eventId, channel_id, isenabled}) => {
//     const data = await axios.put(
//       `http://localhost:8001/api/v1/notifications/users/1/preferences/categories/${categoryId}/events/${eventId}/channels/${channel_id}`,
//       { channel_isenabled: !isenabled },
//       { headers: { "Content-Type": "application/json" } } 
//     )
//     .then(response => console.log("from slices",response))
//     .catch(error => console.error("Error:", error.response ? error.response.data : error));
//     // console.log(data,"cjsskdk")
//     return data;
//   }
// )