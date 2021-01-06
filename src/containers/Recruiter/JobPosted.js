import React, { useEffect, useState } from "react";
import "./recruiter_scss/JobPosted.scss";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
const JobPosted = () => {
  const [data, setData] = useState([]);
  const Jobs = () => {
    fetch("https://jobs-api.squareboat.info/api/v1/recruiters/jobs", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.data);
        setData(data.data.data);
      });
  };

  useEffect(() => {
    Jobs();
  }, []);

  const ViewApplications = (id) => {
    fetch(
      `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${id}/candidates`,
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
        console.log(data);
      });
  };

  const handleApplication = (d) => {
    console.log(d.id);
    ViewApplications(d.id);
  };

  const jobDetails = data.map((d) => {
    return (
      <div key={d.id} className="col-md-3 col-6 job-det">
        <h6 className="job-title">{d.title}</h6>
        <p className="job-para">{d.description}</p>
        <p className='location'>
          <LocationOnOutlinedIcon style={{ color: "#43AFFF" }} />
          {d.location}
        </p>
        <button
        className='view-applicants'
          onClick={() => {
            handleApplication(d);
          }}
        >
          View Applications
        </button>
      </div>
    );
  });
  return (
    <div className="job-posted-main">
      <div className="job-posted">
        <h1 className="job-posted-head">Job Posted by you</h1>
        <div className="row">{jobDetails}</div>
      </div>
    </div>
  );
};

export default JobPosted;
