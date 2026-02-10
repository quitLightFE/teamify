import { Box, Typography } from "@mui/material";
import React from "react";

const rightSidedata = [
  {
    title: "Top 10",
    text: "Position in dribbble",
    subText: "20% Increase from Last Week",
    color: "#FFF0E6",
  },
  {
    title: "26",
    text: "New employees onboarded",
    subText: "15% Increase from Last Month",
    color: "#ECEAFE",
  },
  {
    title: "500",
    text: "New Clients Approached",
    subText: "5% Increase from Last Week",
    color: "#E5F7FF",
  },
];

export default function RightSide() {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "row", md: "column" }}
        px={[0, 0, 2, 4]}
        py={[2, 3, 1]}
        gap={[2, 3, 4]}
      >
        {rightSidedata.map(({ title, text, subText, color }) => (
          <Box
            bgcolor={color}
            p={1.3}
            textAlign={"center"}
            borderRadius={"10px"}
            key={title}
          >
            <Typography variant="h6" fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              {text}
            </Typography>
            <Typography
              variant="caption"
              fontWeight={500}
              color="textSecondary"
            >
              {subText}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
