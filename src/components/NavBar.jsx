import { Box } from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <Box component={"div"} className="navContainer">
      <Box component={"div"} className="leftContainer">
        <Box
          component={"img"}
          src="./images/logo.png"
          className="logo"
          alt=""
        />
      </Box>
      <Box component={"div"} className="rightContainer">
        <Box component={"img"} src="./images/mcafee.png" alt="" />
        <Box component={"img"} src="./images/norton.png" alt="" />
      </Box>
    </Box>
  );
};

export default NavBar;
