import React, { useMemo } from "react";

// import styles for the component Sidebar
import "./sidebar.modules.css";
import { Link, useLocation } from "react-router-dom";
import { menus } from "./menu";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div id="sidebar">
      <ul className="sidebar_menu">
        {menus.map((menu) => (
          <li
            className={`menu_item ${
              pathname.includes(menu.path) ? "active" : ""
            }`}
          >
            <Link to={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
