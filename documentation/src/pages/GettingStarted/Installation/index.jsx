import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import PageHead from "components/PageHead";
import DefaultHead from "components/DefaultHead";
import SingleTextCode from "components/SingleTextCode";
import NPMLIBRARY from "assets/images/npmlibrary.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Installation = () => {
  return (
    <Box>
      <PageHead
        label="Getting Started - Installation"
        content="Install chartam.io, the world's most popular React chart library ."
      />
      {/* <LazyLoadImage
        alt={"npm library"}
        effect="blur"
        src={NPMLIBRARY}
        style={{
          width: "100%",
          border:"2px solid #000"
        }}
      /> */}
      <DefaultHead
        label="Default installation"
        content="Run one of the following commands to add chartam.io to your project:"
      />
      <SingleTextCode content="npm i chartam.io" />
      <Typography sx={{ my: "10px" }}>Or</Typography>
      <SingleTextCode content="yarn add chartam.io" />
      <DefaultHead
        label="Peer dependencies"
        content="react >= 17.0.0 and react-dom >= 17.0.0 are peer dependencies."
      />
    </Box>
  );
};

export default Installation;
