import React, { Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import App from "../App";

const Layout = React.lazy(() => import("../layouts/layoutRoot/Layout"));

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/demo-1" />,
      },
      {
        path: "/demo-1",
        element: <App />,
      },
      {
        path: "/demo-2",
        element: <App />,
      },
      {
        path: "/demo-3",
        element: <App />,
      },
      {
        path: "/demo-4",
        element: <App />,
      }
    ],
  },
];
