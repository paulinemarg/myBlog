import React from 'react';
import '../../App.css';

export default function About() {
  return (
    <div className='about'>
      <div className="polaroid">
        <h1>About Me</h1>
        <img src='images/pauline.jpg' alt="pauline profile pic"/>
        <div className="container">
          <p>Hi there! Welcome to my Blog!<br></br>
            I am Pauline! A web developer and designer with business background. 
            I entered the tech world a year ago out of curiosity and immediately developed a passion for coding. <br></br>
            My blog is like a journal of my career journey, hope it helps you in some way, if you are in the same boat or thinking of changing career.<br></br>
          </p>
        </div>
      </div>
    </div>
  );
}
