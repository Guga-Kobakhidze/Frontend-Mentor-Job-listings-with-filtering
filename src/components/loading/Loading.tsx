import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
