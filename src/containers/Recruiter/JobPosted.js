import React, { useEffect, useState } from 'react'

const JobPosted = () => {

    const [data,setData] = useState([]);
    const Jobs = () => {
      fetch("https://jobs-api.squareboat.info/api/v1/recruiters/jobs", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          'Authorization':localStorage.getItem('jwt')
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data.data);
          setData(data.data.data)
        });
    };

    useEffect(()=> {
        Jobs();
    },[])

    const ViewApplications = (id) => {
      fetch(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${id}/candidates`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          'Authorization': localStorage.getItem("jwt"),
        }
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };

    const handleApplication = (d) => {
        console.log(d.id);
        ViewApplications(d.id)
    }

   const jobDetails = data.map((d) => {
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
             handleApplication(d);
           }}
         >
           View Applications
         </button>
       </div>
     );
   });
    return (
        <div>
            <h1>Job Posted by you</h1>
            <div>
                {jobDetails}
            </div>
        </div>
    )
}

export default JobPosted;
