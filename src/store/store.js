import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from "../slice/preferencesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, preferencesReducer);

export const store = configureStore({
  reducer: {
    preferences: persistedReducer,
  },
  // Add serializableCheck options to ignore redux-persist actions
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
