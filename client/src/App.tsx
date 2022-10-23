import React from 'react';
import './App.scss';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import { AppWrap } from './wrapper';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <AppWrap
        component={Header}
        idName="home"
        bgClassName={''}
        motionClassNames={''}
      />
      <AppWrap
        component={About}
        idName="about"
        bgClassName="app__whitebg"
        motionClassNames="app__about"
      />
      <AppWrap
        component={Work}
        idName="work"
        bgClassName="app__primarybg"
        motionClassNames="app__works"
      />
      <AppWrap
        component={Skills}
        idName="skills"
        bgClassName="app__whitebg"
        motionClassNames="app__skills"
      />
      <AppWrap
        component={Testimonial}
        idName="testimonial"
        bgClassName="app__primarybg"
        motionClassNames="app__testimonial"
      />
      <AppWrap
        component={Footer}
        idName="contact"
        bgClassName="app__whitebg"
        motionClassNames="app__footer"
      />
    </div>
  );
}
