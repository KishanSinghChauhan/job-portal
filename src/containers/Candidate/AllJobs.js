import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import "./candidate_scss/AllJobs.scss";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const AllJobs = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [page, setPage] = useState(1);
  const availableJobs = (page) => {
    fetch(
      `https://jobs-api.squareboat.info/api/v1/candidates/jobs?page=${page}`,
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
        console.log(data.data);
        setData(data.data);
      });
  };

  useEffect(() => {
    availableJobs(page);
  }, [page]);

  const applyJob = () => {
    fetch("https://jobs-api.squareboat.info/api/v1/candidates/jobs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        jobId: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleApply = (d) => {
    setId(d.id);
    if (id) {
      applyJob();
    }
  };
  const jobDetail = data.map((d) => {
    return (
      <div key={d.id} className="col-md-3 col-6 job-det">
        <h6 className="job-title">{d.title}</h6>
        <p className="job-para">{d.description}</p>
        <p className="location">
          <LocationOnOutlinedIcon style={{ color: "#43AFFF" }} />
          {d.location}
        </p>
        <button
          className="apply-job"
          onClick={() => {
            handleApply(d);
          }}
        >
          Apply
        </button>
      </div>
    );
  });

  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  return (
    <div className="all-job-main">
      <div className="all-job">
        <h6 className="all-job-head">Jobs for you</h6>
        <div className="row">{jobDetail}</div>
        <div className="job-pagination">
          <Pagination count={4} shape="rounded" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
