import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './recruiter_scss/NewJobPost.scss'
const NewJobPost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");

  const [location, setLocation] = useState("");
  const [description, SetDescription] = useState("");

  const PostJob = () => {
    fetch("https://jobs-api.squareboat.info/api/v1/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization":localStorage.getItem('jwt')
      },
      body: JSON.stringify({
        title,
        description,
        location
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/recruiter/jobs");
      });
  };

  return (
    <div className="new-post-main">
      <div className="new-post">
        <h6 className="post-head">Post a Job</h6>
        <div className='post-inputs'>
          <label>Job title*</label>
          <input
            name="title"
            placeholder='Enter job title'
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label>Description*</label>

          <textarea
            name="description"
            placeholder='Enter a job description'
            type="text"
            className='post-des'
            value={description}
            onChange={(e) => SetDescription(e.target.value)}
          />
          <label>Location*</label>

          <input
            name="location"
            placeholder='Enter location'
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="post-sub-main">
          <button className="post-sub" onClick={() => PostJob()}>
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewJobPost;
