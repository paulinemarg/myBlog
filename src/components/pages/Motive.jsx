import React from 'react';
import '../../App.css';

export default function Motive() {
  return (
    <div className='article'>
      <h1>How To Stay Motivated</h1>
        <img src='images/motivation.jpg' alt='' />
        <div className="article-content">
          <div className='indent'>
            Motivation plays an important part in our lives. It allows us to pursue our passion and perform well in our everyday life. Goals are the stepping stones toward our dreams and to turn these dreams into reality we need motivation.
          </div>
          <div className='indent'>
            <h3>Getting Motivated</h3>
            <li>Set Yourself a specific, measurable, attainable, reasonable and time-bound goal (Such as professional development) because setting goals can help you stay focused and productive</li>
            <li>Think about how to include that goal in your daily routine, what you need to do to make it happen and then put a timeframe on it (such as a month or two)</li>
            <li>Break your goal into small, easy tasks (such as updating your projects, writing case studies, etc...)</li>
          </div>
          <div className='indent'>
            <h3>Staying on Track</h3>
            <li>Positive self-talk is very important and effective in staying on track, it can enhance your performance and general well-being. For example, instead of saying that is too difficult, try to say: It sounds challenging</li>
            <li>Celebrate your achievements by rewarding yourself (Maybe a day off, a mini vacation, etc...)</li>
          </div>
          <div className='indent'>
            <h3>What to do if you lose motivation</h3>
            Setbacks are normal, but it's important to be able to push through and pick up where you left off
            <ul>Some tips to help you find your motivation:</ul>
            <li>Manage your To-Do list, prioritize the most important things on the list, get rid of tasks that aren't essential and also move tasks that can be moved to another day  </li>
            <li>Remember why you wanted to reach that goal in the first place</li>
            <li>Take motivation from others - feel inspired by reading a book, blogs or articles of people who have achieved what you want to achieve or who are currently on the same boat as you. </li>
            <li>Go for a walk in nature, fresh air, a change of scenery can do wonders for your motivation</li>
          </div>
        </div>
    </div>
  );
}