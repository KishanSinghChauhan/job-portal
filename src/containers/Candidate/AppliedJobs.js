import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
    <>
      <h1>Applied Jobs</h1>
      <div className="row">
        {!data.message ? (
          data.map((d) => {
            return (
              <div
                key={d.id}
                className="card col-md-3 col-6"
                style={{ minHeight: "100px" }}
              >
                <div>
                  <h6>{d.title}</h6>
                  <p>{d.description}</p>
                  <span>{d.location}</span>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <h4>{data.message}</h4>
            <button onClick={() => history.push("/all-jobs")}>
              see all jobs
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default AppliedJobs;
