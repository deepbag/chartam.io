import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionCustom({
  heading,
  summary,
  description,
  children,
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
        <Typography>{description}</Typography>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
