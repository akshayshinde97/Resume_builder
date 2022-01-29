import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Projects = ({formdata, setFormdata }) => {
  return <div>
      <h1>Projects</h1>
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
            label="ProjectTitle"
            type="text"
            value={formdata.projecttitle}
            onChange={(e) => {
              setFormdata({ ...formdata, projecttitle: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Project Description"
            type="text"
            placeholder="MultiLine with rows: 2 and rowsMax: 4"
            multiline
            rows={2}
            maxRows={2}
            value={formdata.projectdescription}
            onChange={(e) => {
              setFormdata({ ...formdata, projectdescription: e.target.value });
            }}
          />
          {/* <TextField
            required
            id="outlined-required"
            label="Date"
            type="date"
            value={formdata.enddate}
            onChange={(e) => {
              setFormdata({ ...formdata, enddate: e.target.value });
            }}
          /> */}
        </div>
      </Box>
  </div>;
};

export default Projects;
