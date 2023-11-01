import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box component={"div"} className="footerContainer">
      <Box component={"div"} className="leftContainer">
        <Typography variant="body1">Copyright (c) 2023</Typography>
        <Typography variant="body1">|</Typography>
        <Typography variant="body1" className="emailText">
          clarifionsupport@clarifion.com
        </Typography>
      </Box>
      <Box component={"div"} className="rightContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M12.1667 7.33203H2.83333C2.09695 7.33203 1.5 7.92898 1.5 8.66536V13.332C1.5 14.0684 2.09695 14.6654 2.83333 14.6654H12.1667C12.903 14.6654 13.5 14.0684 13.5 13.332V8.66536C13.5 7.92898 12.903 7.33203 12.1667 7.33203Z"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16797 7.33203V4.66536C4.16797 3.78131 4.51916 2.93346 5.14428 2.30834C5.7694 1.68322 6.61725 1.33203 7.5013 1.33203C8.38536 1.33203 9.2332 1.68322 9.85832 2.30834C10.4834 2.93346 10.8346 3.78131 10.8346 4.66536V7.33203"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Typography variant="body1">Secure 256-bit SSL encryption.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
