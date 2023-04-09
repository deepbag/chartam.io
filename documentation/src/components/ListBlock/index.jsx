import React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import _ from "lodash";

const ListBlock = ({ buttons }) => {
  return (
    <ButtonGroup size="small" sx={{ my: "15px" }}>
      {_.map(buttons, (item, index) => {
        return <Button key={index}>{item.label}</Button>;
      })}
    </ButtonGroup>
  );
};

export default ListBlock;
