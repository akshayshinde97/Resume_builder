import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const WrokExperiance = ({ formdata, setFormdata }) => {
  const [companyname,setCompany] = useState("")
  return (
    <div>
      <h1>Work Experiance</h1>
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
          {/* <TextField
            required
            id="outlined-required"
            label="Company"
            value={companyname}
            onChange={(e) =>
            
              (setCompany(e.target.value)
              )
            }
            
          />
          setFormdata({ ...formdata, company: [...formdata.company,companyname] }) */}
          <TextField
            required
            id="outlined-required"
            label="Company Name"
            type="text"
            value={formdata.company}
            onChange={(e) => {
              setFormdata({ ...formdata, company: e.target.value });
            }}
          />
           
           <TextField
            required
            id="outlined-required"
            label="Position"
            type="text"
            value={formdata.wexposition}
            onChange={(e) => {
              setFormdata({ ...formdata, wexposition: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            type="date"
            value={formdata.startdate}
            onChange={(e) => {
              setFormdata({ ...formdata, startdate: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            type="date"
            value={formdata.enddate}
            onChange={(e) => {
              setFormdata({ ...formdata, enddate: e.target.value });
            }}
          />
          {console.log(formdata.company)}
        </div>
      </Box>
    </div>
  );
};

export default WrokExperiance;
