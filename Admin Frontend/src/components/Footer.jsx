import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box width="98%" textAlign="center">
        <Typography
          component="p"
          fontFamily="Swis721 Blk BT"
          fontSize="1rem"
          textAlign="center"
          border="1px solid #707070"
          padding="10px 0"
        >
          Copyright © 2024 Designed by: Gnanendra P - All rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
