import React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import _ from "lodash";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ListBlock = ({ buttons, handlechange, isActiveTab }) => {
  const theme = useTheme();
  const downsm = useMediaQuery(theme.breakpoints.down("sm"));
  return downsm ? (
    <ButtonGroup
      size="small"
      sx={{ my: "15px", width: "100%" }}
      orientation="vertical"
    >
      <ButtonItems {...{ buttons, handlechange, isActiveTab }} />
    </ButtonGroup>
  ) : (
    <ButtonGroup size="small" sx={{ my: "15px" }}>
      <ButtonItems {...{ buttons, handlechange, isActiveTab }} />
    </ButtonGroup>
  );
};

export default ListBlock;

const ButtonItems = ({ buttons, handlechange, isActiveTab }) => {
  return _.map(buttons, (item, index) => {
    const stylesheet = {
      background: isActiveTab === item.key && "#343541",
      color: isActiveTab === item.key && "white",
      border: isActiveTab === item.key && "none",
    };
    return (
      <Button
        key={index}
        onClick={() => handlechange(item.key)}
        sx={{
          ...stylesheet,
          "&:hover": {
            ...stylesheet,
          },
        }}
      >
        {item.label}
      </Button>
    );
  });
};
