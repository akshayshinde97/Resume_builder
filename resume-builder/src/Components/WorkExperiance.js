import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const WrokExperiance = ({ formdata, setFormdata }) => {
  return (
    <div>
      <h1>Wrok Experiance</h1>
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
            label="Company"
            value={formdata.company}
            onChange={(e) => {
              setFormdata({ ...formdata, company: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Date"
            type="date"
            value={formdata.date}
            onChange={(e) => {
              setFormdata({ ...formdata, date: e.target.value });
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default WrokExperiance;
