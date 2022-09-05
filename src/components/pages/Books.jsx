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
            <li>"Number of clicks doesn't matter, as long as they are mindless": Clicks should be obvious and not require any thought. Since clicking is one of the most used action in any application, we need to design it explicitly as possible.</li>
          </div>
          <div className='indent'>
            <h3>Steal Like An Artist</h3>
            Steal like an Artist is a masterpiece by Austin Kleon and again was suggested by my tutor. This book helps you understand that no art is completely original, all art are influenced by the art that came before them. You "steal" from the work of your heroes, you personalise it and create a new art. 
            <ul>Some of my favorites from this book:</ul>
            <li>“Every new idea is just a mashup or a remix of one or more previous ideas.”</li>
            <li>“Your job is to collect good ideas. The more good ideas you collect, the more you can choose from to be influenced by.”</li>
            <li>“Collect books, even if you don’t plan on reading them right away. Nothing is more important than an unread library.”</li>
            <li>“Carry a notebook and a pen with you wherever you go. Get used to pulling it out and jotting down your thoughts and observations.”</li>
            <li>“If you have two or three real passions, don’t feel like you have to pick and choose between them. Don’t discard. Keep all your passions in your life. “</li>
            <li>"Don’t make excuses for not working-make things with the time, space, and materials you have, right now.”</li>
            <li>“If you ever find that you’re the most talented person in the room, you need to find another room.”</li>
            <li>“Instead of keeping a rejection file, keep a praise file.”</li>
            <li>“It’s the side projects that really take off.”</li>
            <li>“If you’re out of ideas, wash the dishes. Take a really long walk. Stare at a spot on the wall for as long as you can.”</li>
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