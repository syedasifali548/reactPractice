import React, { useEffect, useState } from "react";
import Pages from "./Pages";


const Data = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const paginationFunc = async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await res.json();
          setData(data);
        };
        paginationFunc();
      }, []);
  return (
    <div>
       {data.length > 0 ? (
        <Pages data={data} />
      ) : (
        <p>Loading Please Wait.....</p>
      )}

    </div>
  )
}

export default Data