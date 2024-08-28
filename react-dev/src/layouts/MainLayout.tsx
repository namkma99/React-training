import React from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
};

export default MainLayout;
