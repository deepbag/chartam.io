import React from "react";
import { Typography, Button, Grid, Box } from "@mui/material";
import { DateLine } from "chartam.io";
import { oneYearIn } from "@mock/demo/_DateLineData";
import { LinkedinOutlined } from "@ant-design/icons";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      sx={{
        height: "fit-content",
        alignItems: "center",
        py: 5,
        flexDirection: {
          xs: "column-reverse",
          lg: "row",
        },
      }}
    >
      <Grid
        item
        lg={5}
        sx={{
          pr: {
            lg: 6,
          },
        }}
      >
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
            fontSize: {
              xs: "25px",
              lg: "38px",
            },
            lineHeight: {
              xs: "35px",
              lg: "48px",
            },
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
            my: 1,
            fontSize: {
              xs: "16px",
              lg: "18px",
            },
            lineHeight: {
              xs: "26px",
              lg: "30px",
            },
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
              fontSize: {
                xs: 10,
                lg: 14,
              },
            }}
            onClick={() =>
              (window.location.href = "mailto:deepbag@chartamio.org")
            }
          >
            Contact Our Team
          </Button>
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
              fontSize: {
                xs: 10,
                lg: 14,
              },
            }}
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/company/chartamio")
            }
          >
            Follow on Linkedin
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        lg={7}
        sx={{
          display: "flex",
          justifyContent: {
            lg: "end",
          },
        }}
      >
        <DateLine
          chartId="date-line-chart"
          height={downsm ? "200px" : "400px"}
          width={downsm ? "380px" : "1000px"}
          data={oneYearIn}
          setting={{
            xAxis: {
              timeUnit: "day",
              dateFormat: "MMM-DD",
              labels: {
                color: "#000",
                visible: false,
              },
            },
            yAxis: {
              minValue: 0,
              labels: {
                color: "#000",
                visible: false,
              },
            },
            series: {
              color: ["#339966", "#3c8469"],
              tooltip: {
                visible: true,
                text: "{category}: {valueY}",
                color: "#fff",
                location: "down", // horizontal, left, right, vertical, down, up
                strokeColor: "#fff",
                strokeOpacity: 2,
                strokeWidth: 1,
              },
              fills: {
                color: "#339966",
                opacity: 0.2,
              },
              stroke: {
                color: "#339966",
                width: 2,
              },
            },
            scrollbarX: false,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
