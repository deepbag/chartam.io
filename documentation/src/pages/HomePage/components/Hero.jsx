import React from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import { DownloadOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroImage from "assets/images/hero.png";

const Hero = () => {
  return (
    <Grid
      container
      sx={{
        height: "fit-content",
        alignItems: "center",
        py: 5,
      }}
    >
      <Grid item lg={6} sx={{ pr: 6 }}>
        <Typography
          sx={{
            fontWeight: "300",
            color: "#00000",
            fontSize: "20px",
            lineHeight: "30px",
          }}
        >
          a business analytics library
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#00000",
            fontSize: "38px",
            lineHeight: "48px",
            my: 1,
          }}
        >
          Customize chart as per your <br />
          business requirements!
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            color: "#3f3f3f",
            lineHeight: "30px",
            my: 1,
          }}
        >
          At our company, we understand the importance of data visualization for
          effective decision making. To meet our unique business requirements,
          we have customized our charts to provide actionable insights that
          drive our business forward.
          <br />
          Looking to create analytics dashboard or software
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{
              background: "#0177cc",
              color: "white",
              px: 3,
              py: 1.5,
              mr: 2,
              mt: 2,
              "&:hover": {
                background: "#0177cc",
              },
            }}
            onClick={()=>window.location.href = 'mailto:deepbag@chartamio.org'}
          >
            Contact Our Team
          </Button>
          <Typography
            sx={{
              fontSize: "17px",
              color: "#0177cc",
              textDecoration: "underline",
              fontWeight: "500",
              mt: 1,
              cursor: "pointer",
            }}
          >
            <DownloadOutlined
              style={{ paddingRight: "8px", color: "#0177cc" }}
            />
            Download Brochure
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={6} sx={{ display: "flex", justifyContent: "end" }}>
        <LazyLoadImage
          alt="hero"
          effect="blur"
          src={HeroImage}
          style={{
            width: "700px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
