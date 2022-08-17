import React from 'react';
import '../../App.css';

export default function Design() {
  return (
    <div className='article'>
      <h1>Why UI Design?</h1>
        <img src='images/design.jpg' alt='' />
        <div className="article-content">
          <div className='indent'>
            After finishing Full-Stack, I have decided to enroll again at CareerFoundry in the <a href='https://careerfoundry.com/en/courses/become-a-ui-designer/'>UI Design</a>, to better design the websites I am developing. 
            UI design has taught me not only how to make my app beautiful but also functional. Even though the course focuses on the look and the feel of an app, it also pays attention to the user experience. 
          </div>
          <div className='indent'>
            As part of UI, I have learned about wireframes, prototypes, symbols, iconography, typography, color palettes, mood boards, grids, style guides, brand guidelines,  A/B testing, responsive design and Mockups.
          </div>
          <div className='indent'>
            As part of UX, I have learned about design processes, user psychology, conductiong user research, creating user personas and user stories, lean UX, user flows and diagram, exploratory sketching, rapid prototyping and user testing.
          </div>
          <div className='indent'>
            Learning UI gave me a new perspective of how to design an app, prior to UI, I have focused only if my app is beautiful, created non-sense animations thinking they were nice. But after taking the course, I realised that beautiful doesn't mean functional, understanding your user is the key of your product's success and "less is more" is always a good idea. 
          </div>
        </div>
    </div>
  );
}