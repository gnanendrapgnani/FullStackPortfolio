import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import Info from "../pages/Info/Info";
import Profile from "../pages/Profile/Profile";
import About from "../pages/About/About";
import Experience from "../pages/Experience/Experience";
import Skills from "../pages/Skills/Skills";
import Project from "../pages/Projects/Project";

const Home = () => {
  return (
    <Box width="100%" height="100%">
      <Header />
      <Box width="95.8%" height="73%" display="flex" padding="20px 25px">
        <SideBar />
        <Box
          height="90%"
          width="100%"
          border="1px solid #707070"
          borderRadius="15px"
          padding="20px"
        >
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
