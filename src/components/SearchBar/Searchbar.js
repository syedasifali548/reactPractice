import React, { useState } from "react";
import "./searchbar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function Searchbar({placeholder,data}) {
    const[filteredData,setFilteredData] = useState([])
    const [wordFiltered,setWordFiltered] = useState('')
    const handlefilter=(e)=>{
        const searchWord = e.target.value;
        setWordFiltered(searchWord)
        const newFilter = data.filter((value)=>{
           return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })
        if(searchWord===''){
            return setFilteredData([])     
           }
        else{
            setFilteredData(newFilter)
        }
    };
    const clearInput=()=>{
        setFilteredData([]) ;
        setWordFiltered("")

    }
  return (
    <div className="search">
        <h1>Search a Book</h1>
      <div className="searchInputs">
        <input
          type="text"
          value={wordFiltered}
          placeholder={placeholder}
          onChange={handlefilter}
        />
        <div className="searchIcon">
            {filteredData.length===0 ?  <SearchIcon />:
            <CloseIcon id="clearBtn"
            onClick={clearInput}
            />}
           
        </div>
      </div>
      {filteredData.length != 0&& (

           <div className="dataResult">
           {
               filteredData.slice(0,15).map((value,key)=>{ 
               return(
                 <a className="dataItem" href={value.link} target="_blank">
                 <p>{value.title} </p>
               </a>
               )
 
             })
           }
         </div>
      )
    }
       
    
    </div>
  );
}

export default Searchbar;

