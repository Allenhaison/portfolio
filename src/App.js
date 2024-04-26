import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App">
  <Header/>
    <Content/>
    <Skill/>
    <Project/>
    <Footer/>
    </div>
  );
}

export default App;
