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
          <TextField
            required
            id="outlined-number"
            label="City,Country"
            type="Text"
            value={formdata.address}
            onChange={(e) => {
              setFormdata({ ...formdata, address: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-number"
            label="Current-Position/HighestEducation"
            type="Text"
            value={formdata.position}
            onChange={(e) => {
              setFormdata({ ...formdata, position: e.target.value });
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default Personalinfo;
