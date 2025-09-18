import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/ProStore.ts";
import { BrowserRouter } from "react-router-dom";
import AuthListener from "./features/auth/authListener.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthListener>
          <ToastContainer position="top-right" autoClose={2000} />
          <AppRoutes />
        </AuthListener>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
