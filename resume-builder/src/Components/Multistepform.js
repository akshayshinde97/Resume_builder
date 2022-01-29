import { ClassNames } from "@emotion/react";
import React, { useState } from "react";
import Personalinfo from "./Personalinfo";
import Links from "./Links";
import Skills from "./Skills";
import WrokExperiance from "./WorkExperiance";
import Button from "@mui/material/Button";
import Resumep from "./Resumep";
import Projects from "./Projects";
import Education from "./Education";

const Multistepform = () => {
  const [formState, setFormstates] = useState(0);
  const formTitle = [
    "Personal-Info",
    "Links",
    "Skills",
    "Work-Experiance",
    "Project",
    "Education",
    "Preview",
  ];
  const [formdata, setFromdata] = useState({
    firstname: "Akshay",
    lastname: "Shinde",
    mobileno: 12344567890,
    email: "kameshshinde27@gmail.com",
    address: "Nagpur/India",
    position: "SDE1@Amazon",
    githublink: "https://github.com/akshayshinde97/",
    leetcode: "https://leetcode.com/kameshshinde27/",
    skills: "Python,Js,Java,C",
    // company: [],
    company:"Amazon",
    wexposition:"SDE 1",
    startdate: "",
    enddate: "",
    projecttitle:"Drone catcher",
    projectdescription:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
    degree:"B.E CSE",
    insitutename:"GHRIET,NAGPUR",
    estartdate:"",
    eenddate:"",
    cgpa:"9.6"
  });
  // const [skills, setSkills] = useState([]);
  // const [skill, setskill] = useState();
  var btncolor = "secondary";
  const Formdiv = () => {
    if (formState == 0) {
      return <Personalinfo formdata={formdata} setFormdata={setFromdata} />;
    } else if (formState == 1) {
      return <Links formdata={formdata} setFormdata={setFromdata} />;
    } else if (formState == 2) {
      return <Skills formdata={formdata} setFormdata={setFromdata} />;
    } else if (formState == 3) {
      return <WrokExperiance formdata={formdata} setFormdata={setFromdata} />;
    } else if (formState == 4) {

      return <Projects formdata={formdata} setFormdata={setFromdata} />;
     
    }
    else if (formState == 5){

      return <Education formdata={formdata} setFormdata={setFromdata} />;
    }
    else if (formState == 6){

      return <Resumep formdata={formdata} setFormdata={setFromdata} />;
      
    }
  };
  const [Addmore, setAddmore] = useState(false);
  return (
    <>
      <div className="formbody">
      <h1>{Formdiv()}</h1>  
      {formState == 3 ? (
        <Button onClick={() => setAddmore(!Addmore)}>Add More</Button>
      ) : null}
      {Addmore == true ? (
        <div className="formbodywxp">
        <WrokExperiance formdata={formdata} setFormdata={setFromdata} />
        </div>
      ) : null}
      </div>
      <footer className="formnav">
        {/* <button disabled={ formState === 0} onClick={() =>{setFormstates((currformState)=> currformState - 1)}}>Back</button>
          <button disabled={formState === formTitle.length -1} onClick={() =>{setFormstates((currformState)=> currformState + 1)}}>Next</button> */}
        <Button
          disabled={formState === 0}
          onClick={() => {
            setFormstates((currformState) => currformState - 1);
          }}
          color="secondary"
        >
          Back
        </Button>
        <Button
          onClick={() => {
            if (formState === formTitle.length - 1) {
              btncolor = "success";
              alert("Data Submitted");
              console.log(formdata);
            } else {
              setFormstates((currformState) => currformState + 1);
            }
          }}
          color={btncolor}
        >
          {formState === formTitle.length - 2
            ? "Submit"
            : formState === formTitle.length - 1
            ? "Download"
            : "Next"}
        </Button>
      </footer>
    </>
  );
};

export default Multistepform;
