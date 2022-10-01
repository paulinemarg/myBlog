import React from 'react';
import '../../App.css';

export default function Read() {
  return (
    <div className='article'>
      <h1>Current Read</h1>
        <img src='images/read.jpg' alt='' />
        <div className="article-content">
          <div className='indent'>
            My current read is the Atomic Habits by James Clear. I found this book while I was searrching online for good reads. An atomic habit is a small daily practices that are easy to do and will compound into remarkable results if you stick with them for years. 
          </div>
          <div className="indent">
            <ul>Sayings from the book that stuck in my head:</ul>
            <li>“Success is the product of daily habits—not once-in-a-lifetime transformations.”</li>
            <li>“Time magnifies the margin between success and failure. It will multiply whatever you feed it. Good habits make time your ally. Bad habits make time your enemy.”</li>
            <li>“Ultimately, it is your commitment to the process that will determine your progress.”</li>
            <li>“Getting 1 percent better every day counts for a lot in the long-run.”</li>
            <li>“It is a simple two-step process: Decide the type of person you want to be. Prove it to yourself with small wins.”</li>
          </div>
        </div>
    </div>
  );
}