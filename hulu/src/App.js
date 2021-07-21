import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';
import Footer from './Footer';

function App() {

  const [selectedOption,setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      
      <div className = 'app_header'>
        <Header/>
        <Nav setSelectedOption = {setSelectedOption}/>
      </div>
      <Results selectedOption = {selectedOption}/>
      <Footer/>
    </div>
  );
}

export default App;
