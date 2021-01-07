import React, { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import "./recruiter_scss/JobPosted.scss";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import EventNoteIcon from "@material-ui/icons/EventNote";

const JobPosted = () => {
  const history = useHistory();
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

  const jobDetails = data.map((d) => {
    return (
      <div key={d.id} className="col-md-3 col-6 job-det">
        <h6 className="job-title">{d.title}</h6>
        <p className="job-para">{d.description}</p>
        <p className="location">
          <LocationOnOutlinedIcon style={{ color: "#43AFFF" }} />
          {d.location}
        </p>
        <Link to={`/job/${d.id}/applicants`}
          className="view-applicants"
        >
          View Applications
        </Link>
      </div>
    );
  });

  const handleClick = () => {
    history.push("/recruiter/jobs/post");
  };
  return (
    <div className="job-posted-main">
      <div className="job-posted">
        <h1 className="job-posted-head">Job Posted by you</h1>
        {data ? (
          <div className="row">{jobDetails}</div>
        ) : (
          <div className="no-job">
            <EventNoteIcon style={{ fontSize: "100px", color: "grey" }} />
            <h6 style={{ color: "#303F60", fontSize: "20px" }}>
              Your posted jobs will show here!
            </h6>
            <button className="post-job" onClick={handleClick}>
              Post a Job
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPosted;
