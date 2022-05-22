import React from "react";
// import Searchbar from "./components/SearchBar/Searchbar";
import './App.css'
import Form from "./components/Stepform/Form";
// import Buttons from "./components/Modals/Buttons";
// import Data from "./components/Data";
// import BookData from './Data.json'
function App() {
  return (
    <div className="App">
      {/* <Buttons /> */}
      {/* <Data /> */}
      {/* <Searchbar placeholder="Enter a Book name..." data={BookData}/> */}
      <Form/>
    </div>
  );
}

export default App;
