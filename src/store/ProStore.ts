import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import languageReducer from "../features/language/languageSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;