import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Links = ({ formdata, setFormdata }) => {
  return (
    <div>
      <h1>Links</h1>
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
            label="Github"
            type="link"
            value={formdata.githublink}
            onChange={(e) => {
              setFormdata({ ...formdata, githublink: e.target.value });
            }}
          />
          <TextField
            required
            id="outlined-number"
            label="Leetcode"
            type="link"
            value={formdata.leetcode}
            onChange={(e) => {
              setFormdata({ ...formdata, leetcode: e.target.value });
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default Links;
