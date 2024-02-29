// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Provider } from "react-redux";
import store from "./redux/store/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      {/* <React.StrictMode> */}
      <AuthProvider>
        <DndProvider backend={HTML5Backend}>
          <Toaster />
          <RouterProvider router={Router} />
        </DndProvider>
      </AuthProvider>
      {/* </React.StrictMode> */}
    </QueryClientProvider>
  </Provider>
);
