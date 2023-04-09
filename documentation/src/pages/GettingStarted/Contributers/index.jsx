import React from "react";
import { Box, Paper } from "@mui/material";
import PageHead from "components/PageHead";
import PaperCustom from "components/PaperCustom";
import { _contributers } from "@mock/contributers";
import _ from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Contributers = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Our Contributers"
        content="We welcome contributions from the community! If you find a bug, have a feature request, or would like to contribute code, please open an issue or pull request on our GitHub repository."
      />
      <PaperCustom>
        {_.map(_contributers, (item, index) => {
          return (
            <LazyLoadImage
              key={index}
              alt="badges"
              effect="blur"
              src={item.logo}
              style={{
                width: "50px",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open(item.redirect, "_blank");
              }}
            />
          );
        })}
      </PaperCustom>
    </Box>
  );
};

export default Contributers;
