import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import React from "react";

const ProductBox = () => {
  return (
    <Box component={"div"} className="productBox">
      <Box component={"div"} className="productWrapper">
        <Box component={"img"} src="./images/product.png" alt="" />
        <Box component={"div"} className="productInfoContainer">
          <Box component={"div"} className="namePriceContainer">
            <Typography variant="h1">Clarifion Air Ionizer</Typography>
            <Box component={"div"} className="priceBox">
              <span>$180</span>
              <Typography variant="body1">$84</Typography>
            </Box>
          </Box>

          <Box component={"img"} src="./images/stars.png" alt="" />

          <FormControl>
            <FormControlLabel control={<Radio />} label="12 left in Stock" />
          </FormControl>

          <Typography variant="body1" className="productDetailsBlock">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" className="productDetailsHidden">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </Typography>
    </Box>
  );
};

export default ProductBox;
