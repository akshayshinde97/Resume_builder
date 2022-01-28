import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import Personalinfo from "./Personalinfo";
import Contact from "./Contact"; 
import WrokExperiance from "./WorkExperiance";
import Test1 from "./Test1";
import Button from "@mui/material/Button";
import formdata from "./resumedata"
import Resumep from "./Resumep";

const Multistepform = () => {
  const [formState, setFormstates] = useState(0);
  const formTitle = ["Personal-Info", "Contact", "Work-Experiance","Preview"];
  const [formdata, setFromdata] =useState({
      firstname :"",
      lastname :"",
      mobileno:12344567890,
      email:"",
      company:"",
      date:""
  });
  var btncolor="secondary";
  const Formdiv = ()=>{
      if(formState == 0)
      {
          return <Personalinfo formdata={formdata} setFormdata={setFromdata} />
      }
      else if(formState == 1)
      {
          return <Contact formdata={formdata} setFormdata={setFromdata}/>
      }
      else if(formState == 2)
      {
          return < WrokExperiance formdata={formdata} setFormdata={setFromdata} />
      }
      else if(formState == 3)
      {
        return < Resumep formdata={formdata} setFormdata={setFromdata} />
      }
  }
  return (
    <>
      <div className="formbody">
        <h1>{Formdiv()}</h1>
      </div>
      <footer className="formnav">
          {/* <button disabled={ formState === 0} onClick={() =>{setFormstates((currformState)=> currformState - 1)}}>Back</button>
          <button disabled={formState === formTitle.length -1} onClick={() =>{setFormstates((currformState)=> currformState + 1)}}>Next</button> */}
          <Button disabled={ formState === 0} onClick={() =>{setFormstates((currformState)=> currformState - 1)}} color="secondary">Back</Button>
          <Button  onClick={() =>{if(formState === formTitle.length -1)
            {   
                btncolor ="success"
                alert("Data Submitted");
                console.log(formdata);
            }
            else{
                setFormstates((currformState)=> currformState + 1)}
            }
            } color={btncolor}>{formState === formTitle.length -2?"Submit" :"Next" || formState === formTitle.length -1?"Download":"Back" }</Button>
     </footer>
    </>
  );
};


export default Multistepform;
