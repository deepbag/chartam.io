import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import _ from "lodash";
import TableCustom from "components/TableCustom/index";

export default function AccordionCustom({
  heading,
  summary,
  description,
  children,
  information,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "40%", flexShrink: 0 }}>{heading}</Typography>
        <Typography sx={{ color: "text.secondary" }}>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ background: "#f5f7fb", pt: 2 }}>
        <Typography sx={{ mb: 2 }}>{description}</Typography>
        {children}
        <Box sx={{ mt: 3 }}>
          {_.map(information, (item, index) => {
            return (
              <Box sx={{ mt: 3 }}>
                <Typography sx={{ mb: 1, fontSize: "18px", fontWeight: "500" }}>
                  {item.heading}
                </Typography>
                <Typography sx={{ mb: 2 }}>{item.description}</Typography>
                <TableCustom head={item.table.head} body={item.table.body} />
              </Box>
            );
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
