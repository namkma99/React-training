import { Profiler, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";
function onRender(
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) {
  // Aggregate or log render timings...
  console.log(id, phase, actualDuration, baseDuration);
  console.log("startTime", startTime);
  console.log("commitTime", commitTime);
}
const router = createBrowserRouter(Routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
