import React from 'react';
import './App.scss';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import { AppWrap } from './wrapper';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <AppWrap component={Header} idName="home" />
      <AppWrap component={About} idName="about" />
      <AppWrap component={Work} idName="work" />
      <AppWrap component={Skills} idName="skills" />
      {/* <Skills /> */}
      {/* <Testimonial /> */}
      {/* <Footer /> */}
    </div>
  );
}
