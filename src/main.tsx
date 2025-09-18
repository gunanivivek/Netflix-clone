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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName={
              () =>
                "relative flex p-4 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-gray-900 text-white " +
                "sm:max-w-md max-w-[90vw]" // ⬅️ responsive widths
            }
          />
          <AppRoutes />
        </AuthListener>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
