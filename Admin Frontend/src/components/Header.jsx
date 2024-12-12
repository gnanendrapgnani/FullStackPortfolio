import { Box } from "@mui/material";
import React from "react";
import logo from "../../public/G.png";

const Header = () => {
  return (
    <Box padding="10px 20px" bgcolor="#FFFFFF" borderBottom="1px solid #707070">
      <img src={logo} height="30px" />
    </Box>
  );
};

export default Header;
