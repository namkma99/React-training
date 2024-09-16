import React, { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import App from "../App";

const Layout = React.lazy(() => import("../layouts/layoutRoot/Layout"));


export const Routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: "/",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <App />
              </Suspense>
            ),
        }
      ]
    },
  ];