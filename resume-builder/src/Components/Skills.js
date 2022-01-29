import React,{useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";

const Skills = ({ formdata, setFormdata }) => {

  return <div>
  <h1>Skills</h1>
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
        label="Skill1"
        type="text"
        value={formdata.skills}
        onChange={(e) =>  setFormdata({...formdata,skills: e.target.value})}
      />
       <Alert severity="info">Please use "," as a seperator eg:-Pyhton,JS </Alert>
      {/* <TextField
        required
        id="outlined-number"
        label="skill2"
        type="text"
        value={formdata.leetcode}
        onChange={(e) => {
          setFormdata({ ...formdata, formdata.skills.concat(e.target.value) });
        }}
      /> */}
    </div>
  </Box>
</div>
};

export default Skills;

