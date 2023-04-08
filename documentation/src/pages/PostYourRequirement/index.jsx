import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import PageHead from "components/PageHead/index";
import DefaultHead from "components/DefaultHead/index";

const PostYourRequirement = () => {
  return (
    <Box sx={{}}>
      <PageHead
        label="Post Your Requirement"
        content="We can create a chart for you as per your requirement free!"
      />
      <Paper
        variant="outlined"
        square
        sx={{
          p: "20px",
        }}
      >
          {/* <DefaultHead
              label="Create Document"
              content=" go to this link and create an readme file as a document"
              my="5px"
            />
            <a href="https://readme.so/editor" target="_blank">
              Document Create
            </a>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "300",
                fontSize: "15px",
                mb: "10px",
                mt: "10px",
              }}
            >
              Write everything about your chart requirement and upload it on
            </Typography> */}
      </Paper>
    </Box>
  );
};

export default PostYourRequirement;
