import { Box, Typography } from "@mui/material";
import React from "react";

const Stepper = () => {
  return (
    <>
      <Box component={"div"} className="stepperContainer">
        <Typography variant="h1">Wait ! your order in progress.</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </Typography>
      </Box>
      <Box component={"div"} className="stepperProgressContainer">
        <Box component={"div"} className="stepBox">
          <Box component={"div"} className="progressBox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
            >
              <path
                d="M1.99976 9L8.65858 16L21.9998 2"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Typography variant="body1">
            <span>Step 1 : </span>Cart Review
          </Typography>
        </Box>
        <Box component={"div"} className="stepBox">
          <Box component={"div"} className="progressBox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
            >
              <path
                d="M1.99976 9L8.65858 16L21.9998 2"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Typography variant="body1">
            <span>Step 2 : </span>Checkout
          </Typography>
        </Box>
        <Box component={"div"} className="stepBox">
          <Box component={"div"} className="progressBox blueBox">
            3
          </Box>
          <Typography variant="body1" className="boldText">
            <span>Step 3 : </span>Special Offer
          </Typography>
        </Box>
        <Box component={"div"} className="stepBox">
          <Box component={"div"} className="progressBox transparentBox">
            4
          </Box>
          <Typography variant="body1">
            <span>Step 4 : </span>Confirmation
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Stepper;
