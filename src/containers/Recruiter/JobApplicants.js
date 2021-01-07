import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";

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
        console.log(data.data);
        setData(data.data);
      });
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const applicantsDetail = data.map((d) => {
    return (
      <div>
        <div>
          <div>
            <Avatar className="ava-user">{d.name[0]}</Avatar>
          </div>
          <div>
            <h6>{d.name}</h6>
            <p>{d.email}</p>
          </div>
        </div>
        <div>
          <h6>Skills</h6>
          <p>{d.skills}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1>Job applicants</h1>
      <div>{applicantsDetail}</div>
    </div>
  );
};

export default JobApplicants;
