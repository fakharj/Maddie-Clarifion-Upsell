import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileBox from "./ProfileBox";
import ProductBox from "./ProductBox";

const HeroSection = () => {
  return (
    <Box component={"div"} className="heroSectionContainer">
      <Box component={"div"} className="leftContainer">
        <Box component={"img"} src="./images/specialOffer.png" alt="" />
        <Box component={"div"} className="ratingBox">
          <ProfileBox />
          <Typography variant="body1" className="commentContainer">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </Typography>
        </Box>
      </Box>
      <Box component={"div"} className="rightContainer">
        <Typography variant="body1" className="titleText">
          <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
          only <span>$14 each</span> ($84.00 total!)
        </Typography>
        <ProductBox />
        <Box component={"div"} className="cartInfoContainer">
          <Box component={"div"} className="cartInfo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
            >
              <path
                d="M1.99976 11L8.65858 18L21.9998 4"
                stroke="#2C7EF8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography variant="body1">
              Negative Ion Technology may <span>help with allergens</span>
            </Typography>
          </Box>
          <Box component={"div"} className="cartInfo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
            >
              <path
                d="M1.99976 11L8.65858 18L21.9998 4"
                stroke="#2C7EF8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography variant="body1">
              Designed for <span>air rejuvenation</span>
            </Typography>
          </Box>
          <Box component={"div"} className="cartInfo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
            >
              <path
                d="M1.99976 11L8.65858 18L21.9998 4"
                stroke="#2C7EF8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography variant="body1">
              <span>Perfect for every room</span> in all types of places.
            </Typography>
          </Box>
        </Box>
        <Box component={"div"} className="discountTextContainer">
          <Box component={"img"} src="./images/percent.png" alt="" />
          <Typography variant="body1">
            Save <span>53%</span> and get <span>6 extra Clarifision</span> for
            only <span>$14 Each</span>.
          </Typography>
        </Box>
        <Box component={"div"} className="discountButton">
          <Typography variant="body1">Yes - Claim my discount</Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
          >
            <path
              d="M17.0806 8.19875C17.4665 7.81284 17.4665 7.18716 17.0806 6.80125L10.7918 0.512475C10.4059 0.126565 9.78025 0.126565 9.39434 0.512475C9.00843 0.898386 9.00843 1.52407 9.39434 1.90998L14.9844 7.5L9.39434 13.09C9.00843 13.4759 9.00843 14.1016 9.39434 14.4875C9.78025 14.8734 10.4059 14.8734 10.7918 14.4875L17.0806 8.19875ZM0.381866 8.48819H16.3819V6.51181H0.381866V8.48819Z"
              fill="white"
            />
          </svg>
        </Box>
        <Box component={"div"} className="paymentSecurityContainer">
          <Box component={"div"} className="encryptionTextContainer">
            <Typography variant="body1">Free shipping</Typography>
            <Typography variant="body1" className="straightLine">
              |
            </Typography>
            <Box component={"div"} className="paymentLockContainer">
              <Box component={"img"} src="./images/lock.svg" alt="" />
              <Typography variant="body1">
                Secure 256-bit SSL encryption.
              </Typography>
            </Box>
            <Typography
              variant="body1"
              className="straightLine straightLineNone"
            >
              |
            </Typography>
          </Box>
          <Typography variant="body1" className="straightRow"></Typography>
          <Box component={"div"} className="cardImagesContainer">
            <Box component={"img"} src="./images/visa.svg" alt="" />
            <Box component={"img"} src="./images/opay.svg" alt="" />
            <Box component={"img"} src="./images/paypal.svg" alt="" />
            <Box component={"img"} src="./images/mastercard.svg" alt="" />
            <Box component={"img"} src="./images/gpay.svg" alt="" />
            <Box component={"img"} src="./images/apple_pay.svg" alt="" />
            <Box component={"img"} src="./images/american_express.svg" alt="" />
          </Box>
        </Box>
        <Box component={"div"} className="noThanksTextContainer">
          <Typography variant="body1">No thanks, I don’t want this.</Typography>
        </Box>
        <Box component={"div"} className="guaranteeContainer">
          <Box component={"img"} src="./images/guarantee.png" alt="" />
          <Typography variant="body1">
            If you are not completely thrilled with your Clarifion - We have a
            <span> 30 day satisfaction guarantee</span>. Please refer to our
            return policy at the bottom of the page for more details. Happy
            Shopping!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
