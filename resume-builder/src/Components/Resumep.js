import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import {formdata} from  './Multistepform';
import Button from "@mui/material/Button";

const Resumep = ({ formdata, setFormdata }) => {
  const downloadResume = () => {
    const input = document.getElementById("resumepreview");
    console.log(document);
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        // pdf.output('dataurlnewwindow');
        pdf.save("resume.pdf");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log("formdata", formdata);
  return (
    <>
      <Button variant="contained" onClick={downloadResume}>
      Download
      </Button>
      <div className="ResumePreview" id="resumepreview">
        <div class="container">
          <div class="row" id="resumeheader">
            <div class="col-7">
              <h1 id="name">{formdata.firstname + " " + formdata.lastname}</h1>
              <span id="position">{formdata.position}</span>
            </div>
            <div class="col-5" id="details">
              <img src="./assests/img/Home.png" />
              <span>{formdata.mobileno}</span>
              <span>{formdata.email}</span>
              <span>{formdata.address}</span>
            </div>
          </div>
          <div class="row" id="resumeData">
            <div class="col-4">
              <div id="sidebox">
                <div className="ResumeSection">
                <h3 id="header">Skills</h3>
                <ul>
                  {
                  formdata.skills.split(",").map((obj)=>
                    <li>{obj}</li>
                  )
                  }
                  <li></li>
                </ul>
              </div>
              <div className="ResumeSection">
                <h3 id="header">Links</h3>
                <div id="leetcode">
                    <a href={formdata.leetcode}>Leetcode</a>
                    <span>{formdata.leetcode}</span>
                </div>
                <div id="github">
                  <a href={formdata.githublink}>Github</a>
                  <span>{formdata.leetcode}</span>
                </div>
              </div>
              </div>
            </div>
            <div class="col-8">
              <div className="ResumeSection">
                <h3 id="header">Profile</h3>
                <p id="description">
                  Directly collaborated with CEO and Product team to prototype,
                  design and deliver the UI and UX experience with a lean design
                  process: research, design, test, and iterate.
                </p>
              </div>
              <div className="ResumeSection">
                <h3 id="header">Employment History</h3>
                <h6 id="Role">{formdata.wexposition}</h6>
                <h6 id="compname">{formdata.company}</h6>
                <p id="datexp">{formdata.startdate}-{formdata.enddata}</p>
                <div id="description">
                  <ul>
                    <li>
                      Directly collaborated with CEO and Product team to
                      prototype
                    </li>
                    <li>
                      Design and deliver the UI and UX experience with a lean
                      design process.
                    </li>
                    <li>research, design, test, and iterate.</li>
                  </ul>
                </div>
              </div>
              <div className="ResumeSection">
                <h3 id="header">Projects</h3>
                <h6 id="Role">{formdata.projecttitle}</h6>
                {/* <h6 id="compname">Enterprise name</h6>
                <span id="datexp">Aug 2018 - Present -1 year, Paris</span> */}
                <div id="description">
                   {/* <ul>
                    <li>
                      Directly collaborated with CEO and Product team to
                      prototype
                    </li>
                    <li>
                      Design and deliver the UI and UX experience with a lean
                      design process.
                    </li>
                    <li>research, design, test, and iterate.</li>
                  </ul>  */}
                  <p>{formdata.projectdescription}</p>
                </div>
              </div>
              <div className="ResumeSection">
                <h3 id="header">Education</h3>
                <h6 id="Role">{formdata.degree}</h6>
                <h6 id="compname">{formdata.insitutename}</h6>
                <p id="datexp">{formdata.estartdate}-{formdata.eenddata}</p>
                <div id="description">
                  {/* <ul>
                    <li>
                      Directly collaborated with CEO and Product team to
                      prototype
                    </li>
                    <li>
                      Design and deliver the UI and UX experience with a lean
                      design process.
                    </li>
                    <li>research, design, test, and iterate.</li>
                  </ul> */}
                  <p>Cgpa:{formdata.cgpa}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Resumep;
