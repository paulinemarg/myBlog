import React from 'react';
import '../../App.css';

export default function Read() {
  return (
    <div className='article'>
      <h1>Current Read</h1>
        <img src='images/read.jpg' alt='' />
        <div className="article-content">
          <div className='indent'>
            My current read is the Atomic Habits by James Clear. I found this book while I was searrching online for good reads. 
          </div>
        </div>
    </div>
  );
}