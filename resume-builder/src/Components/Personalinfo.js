import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";


const Personalinfo = ({ formdata, setFormdata }) => {
  return (
    <div>
      <h1>Personal info</h1>
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
            id="outlined-required"
            label="FirstName"
            value={formdata.firstname}
            onChange={(e) => {
              setFormdata({ ...formdata, firstname: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="LastName"
            value={formdata.lastname}
            onChange={(e) => {
              setFormdata({ ...formdata, lastname: e.target.value });
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default Personalinfo;
