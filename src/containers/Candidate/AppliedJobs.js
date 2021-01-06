import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './candidate_scss/AppliedJobs.scss';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import EventNoteIcon from "@material-ui/icons/EventNote";
const AppliedJobs = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const appliedJobs = () => {
    fetch("https://jobs-api.squareboat.info/api/v1/candidates/jobs/applied", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        'Authorization': localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setData(data);
        } else {
          setData(data.data);
          console.log(data);
        }
      });
  };
  useEffect(() => {
    appliedJobs();
  }, []);
  return (
    <div className='applied-main'>
      <div className='applied'>
        <h6 className='applied-head'>Applied Jobs</h6>
        <div className="row">
          {!data.message ? (
            data.map((d) => {
              return (
                <div key={d.id} className="col-md-3 col-6 applied-det">
                  <h6 className="applied-title">{d.title}</h6>
                  <p className="applied-para">{d.description}</p>
                  <p className="location">
                    <LocationOnOutlinedIcon style={{ color: "#43AFFF" }} />
                    {d.location}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="no-applied">
              <EventNoteIcon style={{ fontSize: "100px", color: "grey" }} />
              <h6 style={{ color: "#303F60", fontSize: "20px" }}>
                Your applied jobs will show here!
              </h6>
              <button
                className="see-job"
                onClick={() => history.push("/candidate/jobs")}
              >
                See all jobs
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
