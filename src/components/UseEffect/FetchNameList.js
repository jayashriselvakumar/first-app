import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchNameList = () => {
  const [name, setName] = useState([]);
  useEffect(() => {
    // axios
    //   .get("http://universities.hipolabs.com/search?country=United+States")
    
    //   .then(res=>{
    //     setName(res.data)
    //   }
    //  )
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const fetchData=async ()=>{
      const response= await fetch('http://universities.hipolabs.com/search?country=United+States')
      const jsonData = await response.json()
      setName(jsonData)

    }
    fetchData();
  },[]);
  return (
    <div>
      <div>Display the list of Names</div>
      <ul>
        {name.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default FetchNameList;
