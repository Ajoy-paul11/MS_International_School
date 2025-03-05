import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import Principal from "./components/Principal.jsx";
import Chairman from "./components/Chairman.jsx";
import Overview from "./components/Overview.jsx";
import Faculty from "./components/Faculty.jsx";
import Facility from "./components/Facility.jsx";
import Programme from "./components/Programme.jsx";
import ScienceEvent from "./components/ScienceEvent.jsx";
import Independence from "./components/Independence.jsx";
import CulturalEvent from "./components/CulturalEvent.jsx";
import Hostel from "./components/Hostel.jsx";
import OtherSchoolEvent from "./components/OtherSchoolEvent.jsx";
import Admission from "./components/Admission.jsx";
import Award from "./components/Award.jsx";
import Disclaimer from "./components/Disclaimer";
import Terms from "./components/Terms";

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
        path: "/award",
        element: <Award />
      },
      {
        path: "/admission",
        element: <Admission />
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />
      },
      {
        path: "/terms-and-conditions",
        element: <Terms />
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
