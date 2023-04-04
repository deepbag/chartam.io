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

const Overview = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Getting Started - Overview"
        content="Use typography to present your design and content as clearly and
        efficiently as possible."
      />
      <Paper
        variant="outlined"
        square
        sx={{
          p: "20px",
        }}
      >
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
      </Paper>
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
