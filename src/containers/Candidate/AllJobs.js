import React, { useEffect, useState } from "react";

const AllJobs = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const availableJobs = () => {
    fetch("https://jobs-api.squareboat.info/api/v1/candidates/jobs", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  };

  useEffect(() => {
    availableJobs();
  }, []);

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
      <div
        key={d.id}
        className="card col-md-3 col-6"
        style={{ minHeight: "200px" }}
      >
        <div>
          <h6>{d.title}</h6>
          <p>{d.description}</p>
          <span>{d.location}</span>
        </div>
        <button
          onClick={() => {
            handleApply(d);
          }}
        >
          Apply
        </button>
      </div>
    );
  });
  return (
    <div>
      <h4>Jobs for you</h4>
      <div className="row">{jobDetail}</div>
    </div>
  );
};

export default AllJobs;
