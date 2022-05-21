import React from "react";
import Searchbar from "./components/SearchBar/Searchbar";
import './App.css'
// import Buttons from "./components/Modals/Buttons";
// import Data from "./components/Data";
import BookData from './Data.json'
function App() {
  return (
    <div className="App">
      {/* <Buttons /> */}
      {/* <Data /> */}
      <Searchbar placeholder="Enter a Book name..." data={BookData}/>
    </div>
  );
}

export default App;
