// MyComponent.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://658a3849ba789a962236cede.mockapi.io/api/danhmuc"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* {data ? (
        <ul>
          {data.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
};

export default MyComponent;
