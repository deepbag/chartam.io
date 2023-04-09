import Loader from "components/Loader/index";
import React, { useState } from "react";
import { Box } from "@mui/material";

const Iframe = ({ src, width = "100%", height = "500px" }) => {
  const [loader, setLoader] = useState(true);
  return (
    <>
      {loader && (
        <Box
          sx={{
            width: width,
            height: height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader label="Please Wait Frame is Loading" />
        </Box>
      )}
      <iframe
        src={src}
        style={{
          width: width,
          height: height,
          border: "none",
          visibility: loader && "hidden",
        }}
        onLoad={() => setLoader(false)}
      />
    </>
  );
};

export default Iframe;
