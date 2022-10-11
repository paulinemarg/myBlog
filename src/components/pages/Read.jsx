import React from 'react';
import '../../App.css';

export default function Read() {
  return (
    <div className='article'>
      <h1>Current Read</h1>
        <img src='images/read.jpg' alt='' />
        <div className="article-content">
          <div className='indent'>
            My current read is the Atomic Habits by James Clear. I found this book while I was searching online for good reads. An atomic habit is a small daily practices that are easy to do and will compound into remarkable results if you stick with them for years. 
          </div>
          <div className="indent">
            <ul>Sayings from the book that stuck in my head:</ul>
            <li>“Success is the product of daily habits—not once-in-a-lifetime transformations.”</li>
            <li>“Time magnifies the margin between success and failure. It will multiply whatever you feed it. Good habits make time your ally. Bad habits make time your enemy.”</li>
            <li>“Ultimately, it is your commitment to the process that will determine your progress.”</li>
            <li>“Getting 1 percent better every day counts for a lot in the long-run.”</li>
            <li>“It is a simple two-step process: Decide the type of person you want to be. Prove it to yourself with small wins.”</li>
            <li>“The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.”</li>
            <li>“A habit is a behavior that has been repeated enough times to become automatic.”</li>
            <li>“One of the best ways to build a new habit is to identify a current habit you already do each day and then stack your new behavior on top. This is called habit stacking.”</li>
            <li>“Small changes in context can lead to large changes in behavior over time.”</li>
            <li>“Once a habit is formed, it is unlikely to be forgotten.”</li>
          </div>
        </div>
    </div>
  );
}