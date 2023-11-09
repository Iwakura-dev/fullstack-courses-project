import React from "react";
import ReactDOM from "react-dom/client";
// Import the mantine core provider and mantine styles
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
// Import the browser router from the router-dom
import { RouterProvider } from "react-router-dom";
import { router } from "./entities/router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
