import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "../Hooks/pagination";
import './pages.css'
const Pages = ({ data }) => {
const [darkMode,setDarkMode] = useState(false)

  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = usePagination(5, data.length);
  return (
    <div className={darkMode?"dark_mode":"light_mode"}
    style={{ marginLeft: "20px" }}>
      <h1>User Posts</h1>
  <label className="switch">
  <input type="checkbox" defaultChecked
  onChange={()=>setDarkMode(!darkMode)}
  />
  <span className="slider round" />
</label>
<label className="switch-label">{darkMode?"Dark":"Light"}</label>
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id}>
              <h3>
                <span>{i + 1}</span> {data[i].title}{" "}
              </h3>
              <p>{data[i].body}</p>
            </div>
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        count={totalPages}
        onChange={(event, value) => displayPage(value)}
      />
    </div>
  );
};

export default Pages;