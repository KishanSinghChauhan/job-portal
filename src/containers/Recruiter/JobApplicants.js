import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import EventNoteIcon from "@material-ui/icons/EventNote";
import './recruiter_scss/JobApplicants.scss';
const JobApplicants = ({ match }) => {
  const [data, setData] = useState([]);

  const fetchApplicants = () => {
    fetch(
      `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${match.params.id}/candidates`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.message) {
          console.log(data.data);
          setData(data.data);
        } else {
          console.log(data);
        }
      });
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const applicantsDetail = data.map((d) => {
    return (
      <div key={d.id} className="col-md-3 col-6 job-det">
        <div style={{display:'flex' ,alignItems:'center',marginBottom:'20px'}}>
          <div>
            <Avatar className="ava-user">{d.name[0]}</Avatar>
          </div>
          <div style={{marginLeft:'20px'}}>
            <h6 className="applicant-title">{d.name}</h6>
            <p className="applicant-para">{d.email}</p>
          </div>
        </div>
        <div>
          <h6 className="applicant-title">Skills</h6>
          <p className="applicant-para">{d.skills}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="applicants-main">
      <div className="applicants">
        <h6 className="applicants-head">Applicants for this job</h6>
        <p className="applicants-para">Total {data.length} applicants</p>
        {data.length ? (
          <div className="row">{applicantsDetail}</div>
        ) : (
          <div className="no-job">
            <EventNoteIcon style={{ fontSize: "100px", color: "grey" }} />
            <h6 style={{ color: "#303F60", fontSize: "20px" }}>
               No applications available!
            </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplicants;
