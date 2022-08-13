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
          I am Pauline! A developer and designer.<br></br>
          I have never thought of writing a blog until recently, when my mentor gave me feedback on my case studies and pointed out that I have exceptional skills of storytelling and presentations. So I have decided to put my skill in use!    
          </p>
        </div>
      </div>
    </div>
  );
}
