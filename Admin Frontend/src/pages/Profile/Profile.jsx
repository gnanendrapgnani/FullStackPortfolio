import React from "react";
import { Box, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Box height="100%">
      <Box
        height="25%"
        padding="13px"
        border="1px solid #707070"
        borderRadius="15px"
        marginBottom="10px"
      >
        <Box
          height="77%"
          padding="10px 25px;"
          border="1px solid #707070"
          borderRadius="15px"
          display="flex"
          alignItems="center"
          gap="15px"
        >
          <Box
            height="70px"
            width="70px"
            border="1px solid #707070"
            borderRadius="50%"
          />
          <Box>
            <Typography
              component="h1"
              fontSize="1.2rem"
              fontFamily="Swis721 Hv BT"
            >
              Gnanendra P
            </Typography>
            <Typography
              component="p"
              fontSize="0.85rem"
              fontFamily="Swis721 Hv BT"
            >
              Frontend Web Developer
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        height="55%"
        padding="20px"
        border="1px solid #707070"
        borderRadius="15px"
      >
        <Box display="flex" alignItems="center" gap="20px">
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <label
            htmlFor="fileInput"
            style={{
              display: "block",
              width: "55px",
              padding: "5px 10px",
              border: "1px dashed #707070",
              textAlign: "center",
              cursor: "pointer",
              color: "black",
              fontSize: "12px",
              fontFamily: "Swis721 Hv BT",
            }}
          >
            + Upload Profile Image
          </label>
          <Box>
            <Typography
              component="p"
              marginTop="10px"
              fontSize="1rem"
              fontFamily="Swis721 Hv BT"
            >
              Border Color :
            </Typography>
            <input type="color" style={{ border: "1px solid #707070" }} />
          </Box>
        </Box>
        <Typography
          component="p"
          marginTop="10px"
          fontSize="1rem"
          fontFamily="Swis721 Hv BT"
        >
          Role :
        </Typography>
        <input
          type="text"
          style={{
            padding: "10px",
            border: "1px solid #707070",
            borderRadius: "6px",
            fontSize: "1em",
            outline: "none",
          }}
        />
      </Box>
    </Box>
  );
};

export default Profile;
