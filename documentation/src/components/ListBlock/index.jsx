import React from "react";
import { Box, ButtonGroup, Button } from "@mui/material";
import _ from "lodash";

const ListBlock = ({ buttons, handlechange, isActiveTab }) => {
  return (
    <ButtonGroup size="small" sx={{ my: "15px" }}>
      {_.map(buttons, (item, index) => {
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
      })}
    </ButtonGroup>
  );
};

export default ListBlock;
