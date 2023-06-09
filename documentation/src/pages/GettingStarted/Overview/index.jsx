import React from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import PageHead from "components/PageHead/index";
import _ from "lodash";
import NPMIO from "assets/images/npm.png";
import GITHUBIO from "assets/images/github.png";
import BANNER from "assets/images/chartbanner.png";
import { _badges } from "@mock/badges";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PaperCustom from "components/PaperCustom/index";

const Overview = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Getting Started - Overview"
        content="chartam.io is a library of React UI components that implements charts."
      />
      <PaperCustom>
        <LazyLoadImage
          alt="banner"
          effect="blur"
          src={BANNER}
          style={{
            width: "100%",
            paddingBottom: "10px",
          }}
        />
        <Box className="badgesIn" sx={{ mb: 2 }}>
          {_.map(_badges, (item, index) => {
            return (
              <LazyLoadImage
                key={index}
                alt="badges"
                effect="blur"
                src={item.logo}
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open(item.redirect, "_blank");
                }}
              />
            );
          })}
        </Box>

        <Typography sx={{ lineHeight: "30px" }}>
          This package provides a comprehensive chart library built on top of
          amCharts 5, a powerful and flexible JavaScript charting library that
          supports a wide range of chart types and data formats.
        </Typography>
        <Typography sx={{ lineHeight: "30px" }}>
          With this library, you can easily create visually stunning and
          interactive charts for your web applications, dashboards, and reports.
          The library includes a variety of pre-built chart types, such as bar
          charts, line charts, scatter charts, and more, that can be customized
          to fit your specific needs.
        </Typography>
        <Typography sx={{ lineHeight: "30px" }}>
          The package is designed to be easy to use and integrate into your
          existing web development workflow. It comes with comprehensive
          documentation and examples to help you get started quickly.
        </Typography>
        <Typography
          sx={{
            mt: "8px",
            fontWeight: "600",
          }}
        >
          Features:
        </Typography>
        <List component="ol">
          {_.map(listItems, (item, index) => {
            return (
              <ListItem sx={{ p: 0 }} key={index}>
                <ListItemText primary={`${index + 1}.${" "}${item}`} />
              </ListItem>
            );
          })}
        </List>
        {/* <Box
          display="flex"
          sx={{
            pt: 2,
          }}
        >
          {_.map(Images, (item, index) => {
            return (
              <LazyLoadImage
                key={index}
                alt={item.alt}
                effect="blur"
                src={item.Image}
                style={{
                  width: item.width,
                  paddingRight: "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open(item.url, "_blank");
                }}
              />
            );
          })}
        </Box> */}
      </PaperCustom>
    </Box>
  );
};

export default Overview;

const listItems = [
  "Wide range of chart types",
  "High-performance rendering",
  "Fully customizable styling",
  "Responsive and mobile-friendly design",
  "Cross-browser compatibility",
  "Comprehensive documentation and examples",
];
