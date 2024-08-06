import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import GrindingModeDialog from "../components/GrindingModeDialog/GrindingModeDialog";
import Popup from "../views/Popup/App";
import Options from "../views/Options/App";

import EyeSaverDialog from "../components/EyeSaverDialog/EyeSaverDialog";

const DevelopmentApp = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <ul>
            <li>
              <Link to="/grinding">GrindingModeDialog</Link>
            </li>
            <li>
              <Link to="/eyesaver">EyeSaverDialog</Link>
            </li>
            <li>
              <Link to="/popup">Popup</Link>
            </li>
            <li>
              <Link to="/options">Options</Link>
            </li>
          </ul>
        </div>
      ),
    },
    {
        path: "/grinding",
        element: <GrindingModeDialog />
    },
    {
        path: "/eyesaver",
        element: <EyeSaverDialog />
    },
    {
        path: "/popup",
        element: <Popup />
    },
    {
        path: "/options",
        element: <Options />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default DevelopmentApp;
