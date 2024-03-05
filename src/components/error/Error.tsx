import { Alert, Stack } from "@mui/material";
import React from "react";

const Error: React.FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      spacing={2}
    >
      <Alert variant="filled" severity="error">
        Can't Find Any Products
      </Alert>
    </Stack>
  );
};

export default Error;
