import { Box } from "@mui/material";
import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router";

const SideBar = () => {
  return (
    <Box
      minWidth="180px"
      maxWidth="180px"
      display="flex"
      justifyContent="center"
      marginRight="30px"
    >
      <Box
        paddingLeft="30px"
        width="100%"
        border=" 1px solid #707070"
        borderRadius="15px"
        height="280px"
      >
        <ul className="listType">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? " listActive" : "list")}
            >
              Info
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? " listActive" : "list")}
            >
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? " listActive" : "list")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? " listActive" : "list")}
            >
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? " listActive" : "list")}
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? " listActive" : "list")}
            >
              Project
            </NavLink>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default SideBar;
