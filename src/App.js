import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Skill from './components/Skill';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main';
import Datenschutz from './components/Datenschutz'
import Impressum from './components/Impressum';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Route path="/" component={Main} exact/>
      <Route path="/Datenschutz" component={Datenschutz} />
      <Route path="/Impressum" component={Impressum} />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;

/*
 <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Skill resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
      */