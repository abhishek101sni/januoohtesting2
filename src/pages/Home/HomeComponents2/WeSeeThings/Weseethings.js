import React from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

// Images
import {
  weSeeThingsBgImage,
  rightarrow,
} from "../../../../DesignData/Images/Images";
import { Link } from "react-router-dom";
import { fontFamily } from "@mui/system";

import "./Weseethings.css";

// Styles
import { CommonMainMargins } from "../../../Styles/Styles";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `url(${weSeeThingsBgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: "-7px",
  },
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

const MarginBtwnTypo = {
  marginTop: {
    xs: "20px",
    sm: "20px",
    md: "20px",
    lg: "20px",
  },
};
const MainTitle = {
  fontSize: {
    xs: "30px",
    sm: "30px",
    md: "32px",
    lg: "32px",
  },
  lineHeight: {
    xs: "35px",
    sm: "35px",
    md: "30px",
    lg: "30px",
  },
  color: "#FF1F2F",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: "center",
  fontFamily: "Inter, sans-serif",
};
const SubTitle = {
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "22px",
    lg: "22px",
  },
  lineHeight: {
    xs: "30px",
    sm: "30px",
    md: "26.3px",
    lg: "26.3px",
  },
  color: "#000000",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: "center",
  padding: "0px 10px 0px 10px",
  fontFamily: "Inter, sans-serif",
};
const Description = {
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "16px",
    lg: "16px",
  },
  lineHeight: {
    xs: "27px",
    sm: "27px",
    md: "22px",
    lg: "22px",
  },
  color: "#000000",
  fontWeight: {
    xs: "400",
    sm: "400",
    md: "400",
    lg: "400",
  },
  textAlign: {
    xs: "none",
    sm: "none",
    md: "center",
    lg: "center",
  },
  padding: {
    xs:"0px 10px 0px 10px",
    sm:"0px 10px 0px 10px",
    md:"0px 170px 0px 170px",
    lg:"0px 170px 0px 170px",
  },
  fontFamily: "Inter, sans-serif",
};
const KnowMore = {
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "20px",
    lg: "20px",
  },
  lineHeight: {
    xs: "30px",
    sm: "30px",
    md: "29px",
    lg: "29px",
  },
  color: "#FF1F2F",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "500",
    lg: "500",
  },
  textAlign: "center",
  fontFamily: "Inter, sans-serif",
};

const Weseethings = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.bgImage}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
        >
          <Box sx={CommonMainMargins}>
            {/* Title */}
            <Box>
              <Typography sx={MainTitle}>WE SEE THINGS DIFFERENTLY</Typography>
            </Box>
            {/* Sub Title */}
            <Box sx={MarginBtwnTypo}>
              <Typography sx={SubTitle}>
                We have the maverick minds who goes for only
              </Typography>
            </Box>
            {/* Description */}
            <Box sx={MarginBtwnTypo}>
              <Typography sx={Description}>
                Founded in 2002, JanusAlive is the leading Outdoor Advertising
                agency in India. With 20 years of experience, we are now the
                largest network in the country in this fast-paced sector. Our
                dedication to innovation and quality has brought us to the
                forefront, where we offer specialized media solutions to
                companies of all kinds. With more than 200 clients under its
                belt, JanusAlive is committed to creating memorable outdoor
                advertising campaigns.
              </Typography>
            </Box>
            {/* Know More */}
            <Box sx={MarginBtwnTypo}>
              <Link to="/about-us/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={KnowMore}>Know More</Typography>
                  <Box
                    component="img"
                    src={rightarrow}
                    sx={{
                      width: "18x",
                      height: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>
      </Grid>
    </>
  );
};

export default Weseethings;
