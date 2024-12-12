import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [errorMsg, setErrorMsg] = useState(true);

  return (
    <>
      <Box
        height="100%"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          padding="30px 30px"
          display="flex"
          justifyContent="center"
          alignContent="center"
          border="1px solid #707070"
          borderRadius="10px"
        >
          <form>
            <Typography
              variant="h2"
              fontFamily="Swis721 Blk BT"
              fontSize="1.5rem"
              color="#fcca03"
              textAlign="center"
              sx={{ textDecoration: "underline" }}
            >
              Admin Login
            </Typography>
            <Typography
              component="p"
              fontFamily="Swis721 Blk BT"
              marginTop="40px"
            >
              Admin Name
            </Typography>
            <input type="text" height="" className="inputValue" />
            <Typography
              component="p"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="0.8em"
              color="red"
              marginTop="5px"
            >
              Enter Correct password
            </Typography>
            <Typography
              component="p"
              fontFamily="Swis721 Blk BT"
              marginTop="35px"
            >
              Passwaord
            </Typography>
            <input type="password" className="inputValue" />
            <Typography
              component="p"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="0.8em"
              color="red"
              marginTop="5px"
            >
              Enter Correct password
            </Typography>
            <br />
            <button>Submit</button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
