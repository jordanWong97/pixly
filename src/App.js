import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Search from "./Search";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div>
          <Search></Search>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;