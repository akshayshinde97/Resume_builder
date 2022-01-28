import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FormPropsTextFields() {
  const Fname = "Akshay";
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          required
         id="outlined-number" label="Mobileno." type="number" />
      </div>
      <Button color="secondary">Back</Button>
      <Button color="secondary">Next</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
    </Box>
  );
}