import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/index.css";
import App from "./pages/App";
import CampaignDetails from "./pages/CampaignDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/campaign/:id",
    element: <CampaignDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
