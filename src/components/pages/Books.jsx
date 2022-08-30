import React from 'react';
import '../../App.css';

export default function Books() {
  return (
    <div className='article'>
      <h1>Books that helped me during UI/UX</h1>
        <img src='images/books.jpg' alt='' />
        <div className="article-content">
          <div className='indent'>
            Besides reading articles online, getting inspired from other people's work on Behance, Dribble and viewing websites and design portfolios and galleries, reading design related books have helped me improve my creativity, gave me new perspective and motivated me to pursue my goals.<br></br>
            Below books were either suggested by my tutor or mentor or found by me during my search on the internet.
          </div>
          <div className='indent'>
            <h3>Don't Make Me Think</h3>
            Don't Make Me Think is a book by Steve Krug about human interaction and web usability, it was recommended by my tutor and it was the first design book that I have read. I recommend it to those who are new to UX and user-centered design, it is easy to understand and enjoyable.
            <ul>Don't make me think thought me:</ul>
            <li>"Don't make users think": Everything on the web page should be obvious and easy for the user, when users spend time in thinking about what elements on a web page do, it is more likely they will not visit your web page again, since it is complicated. </li>
            <li>"Less is more": You just have to keep everything simple, remove words, icons, unnecessary animations that distract users. Everything should be self explanatory, you should keep everything short and simple.</li>
          </div>
          <div className='indent'>
            <h3>Steal Like An Artist</h3>
          </div>
          <div className='indent'>
            <h3>The Design of Everyday Things</h3>
          </div>
          <div className='indent'>
            <h3>Hooked</h3>
          </div>
        </div>
    </div>
  );
}