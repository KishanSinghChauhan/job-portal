import React, { useEffect, useState } from 'react'

const AllJobs = () => {
    const [data,setData] = useState([])
    const availableJobs = () => {
        fetch("https://jobs-api.squareboat.info/api/v1/candidates/jobs", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            'Authorization':localStorage.getItem('jwt')
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.data);
            setData(data.data)
          });
    }

    useEffect(() => {
        availableJobs();
    },[])

    const jobDetail = data.map( d => {
      
      return (
        <div key={d.id}>
          <p>{d.title}</p>
        </div>
      );
    })
    return (
        <div>
          
            <h4>Jobs for you</h4>
            {jobDetail}
        </div>
    )
}

export default AllJobs
