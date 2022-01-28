import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Contact = ({ formdata, setFormdata }) => {
  return (
    <div>
      <h1>Contact</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TextField
            required
            id="outlined-number"
            label="Mobileno."
            type="number"
            value={formdata.mobileno}
            onChange={(e) => {
              setFormdata({ ...formdata, mobileno: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-number"
            label="Email"
            type="email"
            value={formdata.email}
            onChange={(e) => {
              setFormdata({ ...formdata, email: e.target.value });
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default Contact;
