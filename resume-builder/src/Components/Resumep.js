import React from 'react';
// import {formdata} from  './Multistepform';

const Resumep = ({ formdata, setFormdata }) => {
    console.log("formdata",formdata);
  return <div className='ResumePreview'>
    <div class="container">
    <div class="row" id="resumeheader">
    <div class="col-7">
        <h1 id='name'>{formdata.firstname +" "+formdata.lastname}</h1>
        <span id="position">Frontend Dev</span>
    </div>
    <div class="col-5" id="details">
        <span>Email</p>
        <p>Phone</p>
        <p>Address</p>
    </div>
  </div>
  <div class="row" id='resumeData'>
    <div class="col-4">
      <div id="sidebox" >
          <h1>Side content</h1>
      </div>

    </div>
    <div class="col-8">
      <div className='ResumeSection'>
          <h3 id="header">Profile</h3>
          <p id="description">Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.</p>
      </div>
      <div className='ResumeSection'>
          <h3 id="header">Employment History</h3>
          <h6 id="Role">Job Role UI/UX Product Designer</h6>
          <h6 id="compname">Enterprise name</h6>
          <span id="datexp">Aug 2018 - Present -1 year, Paris</span>
          <div id="description">
              <ul>
                <li>Directly collaborated with CEO and Product team to prototype</li>
                <li>Design and deliver the UI and UX experience with a lean design process.
                <li>research, design, test, and iterate.</li></li> 
              </ul>
          </div>
      </div>
      <div className='ResumeSection'>
          <h3 id="header">Projects</h3>
          <h6 id="Role">Job Role UI/UX Product Designer</h6>
          <h6 id="compname">Enterprise name</h6>
          <span id="datexp">Aug 2018 - Present -1 year, Paris</span>
          <div id="description">
              <ul>
                <li>Directly collaborated with CEO and Product team to prototype</li>
                <li>Design and deliver the UI and UX experience with a lean design process.
                <li>research, design, test, and iterate.</li></li> 
              </ul>
          </div>
      </div>
      <div className='ResumeSection'>
          <h3 id="header">Education</h3>
          <h6 id="Role">Job Role UI/UX Product Designer</h6>
          <h6 id="compname">Institute Name name</h6>
          <span id="datexp">Aug 2018 - Present -1 year, Paris</span>
          <div id="description">
              <ul>
                <li>Directly collaborated with CEO and Product team to prototype</li>
                <li>Design and deliver the UI and UX experience with a lean design process.
                <li>research, design, test, and iterate.</li></li> 
              </ul>
          </div>
      </div>
    </div>
  </div>
 
</div>
  </div>;
};

export default Resumep;
