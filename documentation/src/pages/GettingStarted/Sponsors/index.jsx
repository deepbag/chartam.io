import React from "react";
import { Box, Paper } from "@mui/material";
import PageHead from "components/PageHead";
import PaperCustom from "components/PaperCustom";
import { _sponsors } from "@mock/sponsors";
import _ from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Sponsors = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Our Sponsors"
        content="Join us as a sponsor of char6tam.io and discover the benefits of partnering with a leading data visualization library."
      />
      <PaperCustom>
        {_.map(_sponsors, (item, index) => {
          return (
            <LazyLoadImage
              key={index}
              alt="badges"
              effect="blur"
              src={item.logo}
              style={{
                width: "120px",
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

export default Sponsors;
