import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
    <div>
      <h4>Post a Job</h4>
      <input
        name="title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <textarea
        name="description"
        type="text"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
        row={10}
        required
      />
      <input
        name="location"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button onClick={() => PostJob()}>POST</button>
    </div>
  );
};

export default NewJobPost;
