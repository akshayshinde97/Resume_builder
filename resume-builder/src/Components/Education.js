import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Education = ({ formdata, setFormdata }) => {
  return <div>
      <h1>Education</h1>
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
            label="Degree"
            type="text"
            value={formdata.degree}
            onChange={(e) => {
              setFormdata({ ...formdata, degree: e.target.value });
            }}
          />
           <TextField
            required
            id="outlined-required"
            label="Institute Name"
            type="text"
            value={formdata.insitutename}
            onChange={(e) => {
              setFormdata({ ...formdata, insitutename: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            label='Start Date'
            type="date"
            placeholder='Start Date'
            value={formdata.estartdate}
            onChange={(e) => {
              setFormdata({ ...formdata, estartdate: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            type="date"
            label='End Date'
            value={formdata.eenddate}
            onChange={(e) => {
              setFormdata({ ...formdata, eenddate: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            label='CGPA/Percentage'
            type="Number"
            value={formdata.cgpa}
            onChange={(e) => {
              setFormdata({ ...formdata, cgpa: e.target.value });
            }}
          />
        </div>
      </Box>
      {console.log(formdata)}
  </div>;
};

export default Education;
