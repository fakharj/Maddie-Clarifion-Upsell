import { Box, Typography } from "@mui/material";
import React from "react";

const ProfileBox = () => {
  return (
    <Box component={"div"} className="profileBox">
      <Box component={"img"} src="./images/user.png" alt="" />
      <Box component={"div"} className="ratingInfoContainer">
        <Box component={"img"} src="./images/stars.png" alt="" />
        <Box component={"div"} className="userInfoContainer">
          <Typography variant="h1"> Ken T.</Typography>
          <Box component={"img"} src="./images/verify.png" alt="" />
          <Typography variant="body1">Verified Customer</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileBox;
