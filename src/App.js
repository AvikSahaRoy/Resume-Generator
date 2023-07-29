import React, { useState } from "react";
import './App.css';
import Swal from 'sweetalert2'
import Logo from './Logo.png';

function ResumeBuilder() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");

  const [about, setAbout] = useState("");

  const [experiences, setExperiences] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [companyDate, setCompanyDate] = useState("");
  const [companyDes, setCompanyDes] = useState("");
  const [showExperienceSection, setShowExperienceSection] = useState(true); // State variable for the checkbox

  const [educations, setEducations] = useState([]);
  const [degree, setDegree] = useState("");
  const [institute, setInstitute] = useState("");
  const [date, setDate] = useState("");
  const [marks, setMarks] = useState("");

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const [projects, setProjects] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [interests, setInterests] = useState([]);
  const [interest, setInterest] = useState("");

  const [certificationCourse, setCertificationCourse] = useState([]);
  const [certification, setCertification] = useState("");

  // Add Profile Liniks ---------------------
  const addLink = () => {
    if (link.trim() === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    setLinks([...links, link]);
    setLink("");
  };

  // Add Experience --------------------
  const addExperience = () => {
    if (company.trim() === "" || position.trim() === "" || companyDate.trim() === "" || companyDes.trim() === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }

    setExperiences([...experiences, { company, position, companyDate, companyDes }]);
    setCompany("");
    setPosition("");
    setCompanyDate("");
    setCompanyDes("");
  };

  // Add Education ------------------
  const addEducation = () => {
    if (degree.trim() === "" || institute.trim() === "" || date.trim() === "" || marks.trim() === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    setEducations([...educations, { degree, institute, date, marks }]);
    setDegree("");
    setInstitute("");
    setDate("");
    setMarks("");
  };

  // Add Skills -----------------------
  const addSkill = () => {
    if (skill.trim() === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    setSkills([...skills, skill]);
    setSkill("");
  };

  // Add Projects -----------------
  const addProject = () => {
    if (projectTitle.trim() === "" || projectDescription.trim() === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    setProjects([...projects, { title: projectTitle, description: projectDescription }]);
    setProjectTitle("");
    setProjectDescription("");
  };

  // Add Interest -----------------
  const addInterest = () => {
    if (interest.trim() === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    setInterests([...interests, interest]);
    setInterest("");
  };

  // Add Certification ---------------------
  const addCertificationCourse = () => {
    if (certification.trim() === "") {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    setCertificationCourse([...certificationCourse, { title: certification }]);
    setCertification("");
  };

  // Print the resume ------------------------------------
  const handlePrint = () => {
    const printDiv = document.getElementById("print-preview");
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    const iframeWindow = iframe.contentWindow;
    const printDocument = iframeWindow.document;

    // Define print-specific styles in the iframe's document
    printDocument.open();
    printDocument.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print Resume</title>
        <link rel="stylesheet" href="path/to/print-styles.css" media="print">
        <!-- Link the external CSS file for print styles -->
        <style>
        /* Add any additional styles directly here if needed */
        @media print {
          .text-break { /* Add the 'text-break' className to long text elements */
            word-wrap: break-word;
          }
          // Use when two column
          // .col-6 {
          //   float: left;
          //   width: 50%;
          // }
          .name{
            text-align: center;
            text-transform: uppercase;
          }
          .details {
            text-align: center;
          }
          body {
            font-family: Arial, Helvetica, sans-serif;
          }
          hr {
            border: 1px solid black;
          }
          #print-preview {
            display: block; /* Ensure the 'print-preview' section is visible when printing */
            max-width: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
          }
        </style>
      </head>
      <body>
        ${printDiv.innerHTML}
      </body>
    </html>
  `);
    printDocument.close();

    iframeWindow.focus();
    iframeWindow.print();
    document.body.removeChild(iframe);
  };


  return (
    <div>
      {/* Navbar -----------------------------------------*/}
      <nav className="container navbar navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <span className="navbar-brand h1">
            <img src={Logo} alt='logo' />
            <span className='appname'> Resume Generator</span>
          </span>
          <span className='text-white'>Welcome to my Resume Generator App!</span>
        </div>
      </nav>
      {/* Form Start ----------------------------- */}
      <div className="contaiiner">
        <h2><center>Make Your Resume</center></h2>
        <p><center>Open desktop mode for better experience</center></p>
        {/* ------------------------------------- */}
        <div>
          <h2 className="bg-dark text-white rounded">Personal Information</h2>
          <div className="row">
            <div className="mb-3 col-md-4">
              <label className="form-label"><b>Full Name</b></label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}
                className="form-control" placeholder="Enter your full name" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label"><b>Email</b></label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label"><b>Phone Number</b></label>
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control" placeholder="Enter your phone number" />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-md-4">
              <label className="form-label"><b>Address</b></label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                className="form-control" placeholder="Enter your address" />
            </div>
            <div className="mb-3 col-md-4">
              <label className="form-label"><b>Profile Link</b></label>
              <input type="text" value={link} onChange={(e) => setLink(e.target.value)}
                className="form-control" placeholder="Enter your profile link" />
            </div>
            <div className="mb-3 col-md-4">
              <button className="btn btn-success addLink" onClick={addLink}>Add Link</button>
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}
        <div>
          <h2 className="bg-dark text-white rounded">About</h2>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>About</b></label>
              <textarea value={about} onChange={(e) => setAbout(e.target.value)}
                className="form-control" placeholder="Enter your about" />
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}
        <div>
          <h2 className="bg-dark text-white rounded">Experience</h2>
          {/* Checkbox to show/hide Experience section */}
          <div class="form-check form-switch">
            <input
              type="checkbox"
              class="form-check-input"
              checked={showExperienceSection}
              onChange={() => setShowExperienceSection(!showExperienceSection)}
            />
            <label className="badge rounded-pill bg-warning text-dark mb-2"> Show Experience Section</label>
          </div>
          {showExperienceSection && (
            <>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label"><b>Company Name</b></label>
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}
                    className="form-control" placeholder="Enter your company name" />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><b>Position</b></label>
                  <input type="text" value={position} onChange={(e) => setPosition(e.target.value)}
                    className="form-control" placeholder="Enter your company position" />
                </div>
              </div><div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label"><b>Date</b></label>
                  <input type="text" value={companyDate} onChange={(e) => setCompanyDate(e.target.value)}
                    className="form-control" placeholder="Enter your joining date" />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label"><b>Description</b></label>
                  <textarea type="text" value={companyDes} onChange={(e) => setCompanyDes(e.target.value)}
                    className="form-control" placeholder="Enter your company description" />
                </div>
                <div className="mb-3 col-md-6">
                  <button className="btn btn-success" onClick={addExperience}>Add Experience</button>
                </div>
              </div>
            </>
          )}
        </div>
        {/* ------------------------------------- */}
        <div>
          <h2 className="bg-dark text-white rounded">Education</h2>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Degree</b></label>
              <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)}
                className="form-control" placeholder="Enter your degree" />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Institute Name</b></label>
              <input type="text" value={institute} onChange={(e) => setInstitute(e.target.value)}
                className="form-control" placeholder="Enter your institute name" />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Date</b></label>
              <input type="text" value={date} onChange={(e) => setDate(e.target.value)}
                className="form-control" placeholder="Enter your starting degree" />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Marks</b></label>
              <input type="text" value={marks} onChange={(e) => setMarks(e.target.value)}
                className="form-control" placeholder="Enter your marks" />
            </div>
            <div className="mb-3 col-md-6">
              <button className="btn btn-success" onClick={addEducation}>Add Education</button>
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}
        <div>
          <h2 className="bg-dark text-white rounded">Skills</h2>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Skill</b></label>
              <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)}
                className="form-control" placeholder="Enter your skill" />
            </div>
            <div className="mb-3">
              <button className="btn btn-success" onClick={addSkill}>Add Skill</button>
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}
        <div>
          <h2 className="bg-dark text-white rounded">Projects</h2>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Title</b></label>
              <input type="text" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)}
                className="form-control" placeholder="Enter your project title" />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Description</b></label>
              <textarea value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}
                className="form-control" placeholder="Enter your project description" />
            </div>
            <div className="mb-3 col-md-6">
              <button className="btn btn-success" onClick={addProject}>Add Project</button>
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}
        <div>
          <h2 className="bg-dark text-white rounded">Interests</h2>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Interests</b></label>
              <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)}
                className="form-control" placeholder="Enter your interest" />
            </div>
            <div className="mb-3">
              <button onClick={addInterest} className="btn btn-success">Add Interest</button>
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}
        <div>
          <h2 className="bg-dark text-white rounded">Certification Course</h2>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label"><b>Certification Name</b></label>
              <input type="text" value={certification} onChange={(e) => setCertification(e.target.value)}
                className="form-control" placeholder="Enter your certification course" />
            </div>
            <div className="mb-3">
              <button className="btn btn-success" onClick={addCertificationCourse}>Add Certification Course</button>
            </div>
          </div>
        </div>

      </div>
      {/* Form End ----------------------------- */}

      {/* Resume Preview Start ------------------------- */}
      <div>
        <h2 className="text-center mt-4">Resume Preview</h2>
        <div id="print-preview" className="border border-dark" style={{ maxWidth: '60%', width: '100%', margin: '20px auto', padding: '20px' }}>
          <h1 className="name text-uppercase" style={{ textAlign: 'center' }}>{fullName}</h1>
          <div className="details" style={{ textAlign: 'center' }}>
            {email} | {phoneNumber} | {address} <br />
            {links.map((link, index) => (
              <span className="text-break" key={index}> {link}</span>
            ))}
          </div>
          <hr />
          <h3>About</h3>
          <p className="text-break">{about}</p>
          <hr />
          {showExperienceSection && ( // Conditional rendering based on checkbox and experiences
            <div>
              <h3>Experience</h3>
              <ul>
                {experiences.map((experience, index) => (
                  <li key={index}>
                    <b>
                      <span className="text-break">{experience.company}</span> -
                      <span className="text-break"> {experience.position}</span>
                    </b>
                    <span className="text-break"> ({experience.companyDate})</span> <br />
                    <span className="text-break">{experience.companyDes}</span>
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          )}
          <h3>Education</h3>
          <ul>
            {educations.map((education, index) => (
              <li key={index}>
                <b>
                  <span className="text-break">{education.institute}</span> |
                  <span className="text-break"> {education.degree}</span>
                </b> <br />
                <span className="text-break">{education.marks}</span> |
                <span className="text-break"> {education.date}</span>
              </li>
            ))}
          </ul>
          <hr />
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li className="text-break" key={index}>{skill}</li>
            ))}
          </ul>
          <hr />
          <h3>Projects</h3>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <strong className="text-break" >{project.title}:</strong> <br />
                <span className="text-break">{project.description}</span>
              </li>
            ))}
          </ul>
          <hr />
          <h3>Interests</h3>
          <ul>
            {interests.map((interest, index) => (
              <li className="text-break" key={index}>{interest}</li>
            ))}
          </ul>
          <hr />
          <h3>Certification</h3>
          <ul>
            {certificationCourse.map((certification, index) => (
              <li className="text-break" key={index}>
                {certification.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Resume Preview End ------------------------- */}
      {/* Print resume button --------------------- */}
      <div className="d-grid  col-4 mx-auto">
        <button className="btn btn-dark" onClick={handlePrint}>Print Resume</button>
      </div>

      {/* Footer */}
      <footer className="container footer  bg-dark text-white text-center " style={{ marginTop: "39px" }}>
        <div className="container">
          <span>
            – Thanks for visiting! – <br />
            Resume Generator | <span className="far fa-copyright" aria-hidden="true"></span> 2023 All Rights Reserved.
          </span>
        </div>
      </footer>

    </div>
  );
}

export default ResumeBuilder;
