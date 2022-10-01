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
        </div>
    </div>
  );
}