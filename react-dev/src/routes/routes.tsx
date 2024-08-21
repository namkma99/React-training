import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

const Homepage = lazy(() => import("../pages/Home"));

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Homepage />
      </Suspense>
    ),
  },
];
