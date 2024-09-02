import React from "react";
import { Box, Grid, Typography } from "../../DesignData/MaterialUi/material-ui";

import {
  MainBox,
  cardImage,
  Maintitle,
  TextBox,
  TitleBox,
  Alignment,
  ColonsStyle,
  StateAndCity,
  StateAndCityName,
  StateAndCityWidth,
  StateAndCityNameWidth,
  ColonsWidth,
  CardsMarginForMobileView,
} from "../Styles/Styles";

// CSS
import "./Cards.css";

const Cards = ({ data, onClick }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={4} lg={4} sx={CardsMarginForMobileView}>
        <Box
          sx={MainBox}
          onClick={() => {
            onClick();
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box component="img" sx={cardImage} alt="card" src={data?.image} />
            <Box>
              <Box
                sx={{
                  bottom: "-10px",
                  left: "10px",
                  position: "absolute",

                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "white",
                    height: "20px",
                    width: "100%",
                    backgroundColor: "red",
                    borderRadius: "3px",
                    padding: "5px 10px 5px 10px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {data?.sub_category_name
                    ? data.sub_category_name.charAt(0).toUpperCase() +
                      data.sub_category_name.slice(1).toLowerCase()
                    : ""}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={TextBox}>
            <Box sx={TitleBox}>
              <Typography sx={Maintitle}>
                {data?.address
                  ? data.address.charAt(0).toUpperCase() +
                    data.address.slice(1).toLowerCase()
                  : ""}
              </Typography>
            </Box>

            {/* city */}
            <Box sx={Alignment}>
              <Box sx={StateAndCityWidth}>
                <Typography sx={StateAndCity}>City</Typography>
              </Box>
              <Box sx={ColonsWidth}>
                <Typography sx={ColonsStyle}>:</Typography>
              </Box>
              <Box sx={StateAndCityNameWidth}>
                <Typography sx={StateAndCityName}>{data.city_name}</Typography>
              </Box>
            </Box>

            {/* State */}
            <Box sx={Alignment}>
              <Box sx={StateAndCityWidth}>
                <Typography sx={StateAndCity}>State</Typography>
              </Box>
              <Box sx={ColonsWidth}>
                <Typography sx={ColonsStyle}>:</Typography>
              </Box>
              <Box sx={StateAndCityNameWidth}>
                <Typography sx={StateAndCityName}>
                  {data?.state_name?.toLowerCase()}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Cards;
