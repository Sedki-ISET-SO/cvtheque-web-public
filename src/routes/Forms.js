//import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyDocument } from "../components/MyPDF";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

function Forms() {
  let params = useParams();

  const [fullname, setFullname] = useState("");
  let handleFullname = (event) => {
    setFullname(event.target.value);
  };

  const [domain, setDomain] = useState("");
  let handleDomain = (event) => {
    setDomain(event.target.value);
  };

  const [email, setEmail] = useState("");
  let handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const [phone, setPhone] = useState("");
  let handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const [skill, setSkill] = useState("");
  let handleSkill = (event) => {
    setSkill(event.target.value);
  };

  const [role, setRole] = useState("");
  let handleRole = (event) => {
    setRole(event.target.value);
  };

  const [companyName, setCompanyName] = useState("");
  let handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  const [beginningDate, setBeginningDate] = useState("");
  let handleBeginningDate = (event) => {
    setBeginningDate(event.target.value);
  };

  const [endingDate, setEndingDate] = useState("");
  let handleEndingDate = (event) => {
    setEndingDate(event.target.value);
  };

  const [schoolName, setSchoolName] = useState("");
  let handleSchoolName = (event) => {
    setSchoolName(event.target.value);
  };

  const [degreeName, setDegreeName] = useState("");
  let handleDegreeName = (event) => {
    setDegreeName(event.target.value);
  };

  const [schoolBeginningDate, setSchoolBeginningDate] = useState("");
  let handleSchoolBeginningDate = (event) => {
    setSchoolBeginningDate(event.target.value);
  };

  const [schoolEndingDate, setSchoolEndingDate] = useState("");
  let handleSchoolEndingDate = (event) => {
    setSchoolEndingDate(event.target.value);
  };

  let cvId = parseInt(params.cvId);

  function handleSubmit(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    fetch(`http://localhost:8080/header/${cvId}`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        fullName: fullname,
        domain: domain,
        email: email,
        phoneNumber: phone,
      }),
    }).then((res) => res.json());
  }

  function handleSubmit1(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    fetch(`http://localhost:8080/skill/${cvId}`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        name: skill,
      }),
    }).then((res) => res.json());
  }

  function handleSubmit2(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    fetch(`http://localhost:8080/workExperience/${cvId}`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        role: role,
        companyName: companyName,
        beginningDate: beginningDate,
        endingDate: endingDate,
      }),
    }).then((res) => res.json());
  }

  function handleSubmit3(event) {
    event.preventDefault();

    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    fetch(`http://localhost:8080/education/${cvId}`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        schoolName: schoolName,
        degreeName: degreeName,
        beginningDate: schoolBeginningDate,
        endingDate: schoolEndingDate,
      }),
    }).then((res) => res.json());
  }

  //fetching
  const [theTop, setMyHeader] = useState("");
  useEffect(() => {
    console.log(theTop);
  }, [theTop]);

  useEffect(() => {
    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    fetch(`http://localhost:8080/header/${cvId}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((response) => setMyHeader(response.content));
  }, []);

  const [theSkill, setMySkill] = useState("");
  useEffect(() => {
    console.log(theSkill);
  }, [theSkill]);

  useEffect(() => {
    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    fetch(`http://localhost:8080/skill/${cvId}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((response) => {
        setMySkill(response.content);
        console.log(theSkill);
      });
  }, []);

  const [theExperience, setMyExperience] = useState("");
  useEffect(() => {
    console.log(theExperience);
  }, [theExperience]);

  useEffect(() => {
    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    fetch(`http://localhost:8080/workExperience/${cvId}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((response) => {
        setMyExperience(response.content);
        console.log(theExperience);
      });
  }, []);

  const [theEducation, setMyEducation] = useState("");
  useEffect(() => {
    console.log(theEducation);
  }, [theEducation]);

  useEffect(() => {
    var myHeaders = new Headers();
    let token = localStorage.getItem("realtoken");
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Access-Control-Allow-Origin", "*");
    fetch(`http://localhost:8080/education/${cvId}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((response) => {
        setMyEducation(response.content);
        console.log(theEducation);
      });
  }, []);

  return (
    <>
      <div style={{ width: "400px !important", marginLeft: "50px" }}>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/generate">Generate</Link> | <Link to="/">Home</Link>
          <button
            onClick={() => {
              localStorage.removeItem("realtoken");
            }}
          >
            <Link to="/login">logout</Link>
          </button>
        </nav>
        <h1>CV {params.cvId}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="fullname"
            name="fullname"
            value={fullname}
            onChange={handleFullname}
            required
          />
          <input
            type="text"
            placeholder="domain"
            name="domain"
            value={domain}
            onChange={handleDomain}
            required
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
          />
          <input
            type="text"
            placeholder="phone number"
            name="phone"
            value={phone}
            onChange={handlePhone}
            required
          />
          <button type="submit">add header</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit1}>
          <input
            type="text"
            placeholder="skill"
            name="skill"
            value={skill}
            onChange={handleSkill}
            required
          />
          <button type="submit">add skill</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit2}>
          <input
            type="text"
            placeholder="role"
            name="role"
            value={role}
            onChange={handleRole}
            required
          />
          <input
            type="text"
            placeholder="company name"
            name="companyName"
            value={companyName}
            onChange={handleCompanyName}
            required
          />
          <input
            type="text"
            placeholder="beginning date"
            name="beginningDate"
            value={beginningDate}
            onChange={handleBeginningDate}
            required
          />
          <input
            type="text"
            placeholder="ending date"
            name="endingDate"
            value={endingDate}
            onChange={handleEndingDate}
            required
          />
          <button type="submit">add work experinece</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit3}>
          <input
            type="text"
            placeholder="school name"
            name="schoolName"
            value={schoolName}
            onChange={handleSchoolName}
            required
          />
          <input
            type="text"
            placeholder="degree name"
            name="degreeName"
            value={degreeName}
            onChange={handleDegreeName}
            required
          />
          <input
            type="text"
            placeholder="education beginning date"
            name="schoolBeginningDate"
            value={schoolBeginningDate}
            onChange={handleSchoolBeginningDate}
            required
          />
          <input
            type="text"
            placeholder="education ending date"
            name="schoolEndingDate"
            value={schoolEndingDate}
            onChange={handleSchoolEndingDate}
            required
          />
          <button type="submit">add education</button>
        </form>
      </div>
      <div>
        <strong>generated cv below</strong>
        <div className="row" style={{ width: "400px !important" }}>
          {theTop && (
            <ul>
              {theTop.map((d) => (
                <div key={d.id}>{d.email}</div>
              ))}
            </ul>
          )}
        </div>
        <br /> <br /> <br />
        <MyDocument
          header={theTop}
          skill={theSkill}
          experience={theExperience}
          education={theEducation}
        />
      </div>
      <div>
        <PDFDownloadLink
          document={
            <MyDocument
              header={theTop}
              skill={theSkill}
              experience={theExperience}
              education={theEducation}
            />
          }
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </div>
    </>
  );
}

export default Forms;
