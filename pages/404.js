import { Box, Typography } from "@mui/material";
import React from "react";

export default function notFoundPage() {
  return (
    <Box mt={4}>
      <Box
        fontSize={"3rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
      >
        <Typography variant="h3" display={"inline-block"} fontWeight={700}>
          404
        </Typography>{" "}
        <Typography variant="h5">sahifa topilmadi</Typography>
      </Box>
    </Box>
  );
}
