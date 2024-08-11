import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GrindingModeDialog from "../components/GrindingModeDialog/GrindingModeDialog";
import Popup from "../views/Popup/App";
import Options from "../views/Options/App";

import EyeSaverDialog from "../components/EyeSaverDialog/EyeSaverDialog";
import { IndexPage } from "./IndexPage";

export type ComponentInfo = {
  component: React.JSX.Element;
  alias?: (string | undefined);
};

// Update this when adding a new component
const COMPONENTS : ComponentInfo[] = [
  { component: <GrindingModeDialog /> },
  { component: <EyeSaverDialog /> },
  { component: <Popup />, alias: "Popup" },
  { component: <Options />, alias: "Options" },
];

const DevelopmentApp = () => {
  const indexRoute = {
    path: "/",
    element: <IndexPage components={COMPONENTS} />,
  };

  const router = createBrowserRouter([indexRoute, ...mapToRoutes(COMPONENTS)]);

  return <RouterProvider router={router} />;
};

const mapToRoutes = (components: ComponentInfo[]) => {
  // e.g. Generates a path: /Options for Options component
  return components.map(({component, alias}) => {
    return { path: `/${alias ?? component.type.name}`, element: component };
  });
};

export default DevelopmentApp;
