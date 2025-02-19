import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import Principal from "./components/Principal";
import Chairman from "./components/Chairman";
import Overview from "./components/Overview";
import Faculty from "./components/Faculty";
import Facility from "./components/Facility";
import Programme from "./components/Programme";
import ScienceEvent from "./components/ScienceEvent";
import Independence from "./components/Independence";
import CulturalEvent from "./components/CulturalEvent";
import Hostel from "./components/Hostel";
import OtherSchoolEvent from "./components/OtherSchoolEvent";
import Admission from "./components/Admission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/governing-body",
        element: <Principal />
      },
      {
        path: "/chairman",
        element: <Chairman />
      },
      {
        path: "/overview", 
        element: <Overview />
      },
      {
        path: "/faculty",
        element: <Faculty />
      },
      {
        path: "/facilities",
        element: <Facility />
      },
      {
        path: "/programme",
        element: <Programme />
      },
      {
        path: "/science-event",
        element: <ScienceEvent />
      },
      {
        path: "/independence-day",
        element: <Independence />
      },
      {
        path: "/cultural-event",
        element: <CulturalEvent />
      },
      {
        path: "/other-school-event",
        element: <OtherSchoolEvent />
      },
      {
        path: "/hostel",
        element: <Hostel />
      },
      {
        path: "/admission",
        element: <Admission />
      }
    ]
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </MantineProvider>
  </StrictMode>
);
