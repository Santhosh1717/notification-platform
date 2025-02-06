import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// Fetch preferences from API
export const fetchPreferences = createAsyncThunk(
  "preferences/fetchPreferences",
  async () => {
    const response = await axios.get("http://localhost:8001/api/v1/notifications/tenants/1/preferences");
    // const data = await response;
    return response.preferences;  // Ensure this matches the API response
  }
);

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: { preferences: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPreferences.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPreferences.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.preferences = action.payload;
      })
      .addCase(fetchPreferences.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default preferencesSlice.reducer;
