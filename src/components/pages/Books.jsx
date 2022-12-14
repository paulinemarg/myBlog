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
          <h3>Don't Make Me Think</h3>
          <div className='indent'>
            Don't Make Me Think is a book by Steve Krug about human interaction and web usability, it was recommended by my tutor and it was the first design book that I have read. I recommend it to those who are new to UX and user-centered design, it is easy to understand and enjoyable.
            <ul>Don't make me think thought me:</ul>
            <li>"Don't make users think": Everything on the web page should be obvious and easy for the user, when users spend time in thinking about what elements on a web page do, it is more likely they will not visit your web page again, since it is complicated. </li>
            <li>"Less is more": You just have to keep everything simple, remove words, icons, unnecessary animations that distract users. Everything should be self explanatory, you should keep everything short and simple.</li>
            <li>"Number of clicks doesn't matter, as long as they are mindless": Since clicking is one of the most used action in any application, we need to design it explicitly as possible.</li>
            <li>"Design pages for scanning, not reading": People are always in a hurry and eager to get the job done quickly, so create a clear visual hierarchy, break pages up into clearly defined areas and minimize noise.</li>
            <li>"There's no place like home": When the user is lost, they need a single click to get them home, because home gives them sense of assurance, therefore make home button visible and accessible.</li>
            <li>"A way to search": unless a site is very small, every page should have either a search box or a link to a search page.</li>
            <li>"The only way to find out if your site really works is to test it": You have already worked on your site for too long, you know too much and can not see any flaws, therefore conducting usability tests will give you new perspective.</li>
          </div>
          <h3>Steal Like An Artist</h3>
          <div className='indent'>
            Steal like an Artist is a masterpiece by Austin Kleon and again was suggested by my tutor. This book helps you understand that no art is completely original, all art are influenced by the art that came before them. You "steal" from the work of your heroes, you personalise it and create a new art. 
            <ul>Some of my favorites from this book:</ul>
            <li>???Every new idea is just a mashup or a remix of one or more previous ideas.???</li>
            <li>???Your job is to collect good ideas. The more good ideas you collect, the more you can choose from to be influenced by.???</li>
            <li>???Collect books, even if you don???t plan on reading them right away. Nothing is more important than an unread library.???</li>
            <li>???Carry a notebook and a pen with you wherever you go. Get used to pulling it out and jotting down your thoughts and observations.???</li>
            <li>???If you have two or three real passions, don???t feel like you have to pick and choose between them. Don???t discard. Keep all your passions in your life. ???</li>
            <li>"Don???t make excuses for not working-make things with the time, space, and materials you have, right now.???</li>
            <li>???If you ever find that you???re the most talented person in the room, you need to find another room.???</li>
            <li>???Instead of keeping a rejection file, keep a praise file.???</li>
            <li>???It???s the side projects that really take off.???</li>
            <li>???If you???re out of ideas, wash the dishes. Take a really long walk. Stare at a spot on the wall for as long as you can.???</li>
          </div>
          <h3>The Design of Everyday Things</h3>
          <div className='indent'>
            The design of everyday things is written by cognitive scientist and usability engineer Donald Norman and it was suggested by my mentor. The Design of Everyday Things explains that design serves the communication between the product and the user and we can optimize this communication by providing good and usable product which will make their experience enjoyable. 
            <ul>The Design of Everyday Things thought me:</ul>
            <li>Two of the most important characteristics of good design are discoverability and understanding. Always ask yourself: "Is it easy for the user to figure out what actions to perform to use the product?", "Is it easy for the user to figure out how the product can be used?".</li>
            <li>We should always design with user and their needs in mind, without a thorough understanding of people, designs are prone to being flawed, difficult to use, and difficult to understand.</li>
            <li>We rely on a combination of knowledge in the head and knowledge in the world to get us where we need to go. Designers must understand this in order to predict why and how products will succeed or fail.</li>
            <li>When no other option appears, simply design everything the same way so people only have to learn once.</li>
            <li>It is not the fault of the user for errors and malfunctions but rather the lack of intuitive guidance which is the result of poor design.</li>
            <li>Good designers never start to solve problems given to them, instead they try to understand what the real issue is.</li>
          </div>
          <h3>Hooked</h3>
          <div className='indent'>
            Hooked is about helping customers build habits around using your product or service so that they use it over and over again, it is written by Nir Eyal. I found this book during my search on the internet.
            <ul>Hooked thought me:</ul>
            <li>There are two factors in accessing habit-forming: frequency or how often product-related behaviors occur and perceived utility or how often and rewarding a behavior is in the user's mind.</li>
            <li>A behavior with enough frequency and perceived utility is more likely to become a default behavior in the future.</li>
            <li>The Hook Model is the process of connecting user's problem to their own product or service in a way that can form a habit. The model has four phases: trigger, action, variable reward and investment.</li>
            <li>There are four types of external triggers that initiates user behavior: paid triggers such as advertising, earned triggers such as media coverage, relationship triggers such as referral marketing and owned triggers such as email lists.</li>
            <li>Action is important for successful habit formation. The user must have motivation to complete the desired action and trigger must be present to initiate the action.</li>
            <li>There are three types of variable rewards: tribe rewards those that satisfy our social needs such as likes, shares and comments, hunt rewards those that satisfy our basic survival instincts and self rewards those that help us in self-determination by providing a sense of accomplishment.</li>
            <li>The more users invest time and effort into your product or service, the more they'll value it.</li>
          </div>
        </div>
    </div>
  );
}