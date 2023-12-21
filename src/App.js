import React from 'react';
import Header from "./Header"
// import VideoCard from './components/VideoCard';
// import Sidebar from "./Sidebar"
import HomePage from './HomePage';
import './App.css';
import {BrowserRouter as Router ,Switch,Route, Routes} from "react-router-dom";
import SearchPage from './SearchPage';




function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
        <Route path="/search/:searchterm" element={<SearchPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        </Routes>
        

      </Router>
    </div>
  );
}
// style={{marginLeft:"570px", marginTop:"200px"}}


export default App;
