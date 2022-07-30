import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Blog</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/books.jpg' // Photo from Unsplash
              text='Books that helped me during UI/UX'
              label='New'
              path='/articles'
            />
            <CardItem
              src='images/motivation.jpg' // Photo by Cristofer Maximilian on Unsplash
              text='How I stay motivated'
              label='31 July 2022'
              path='/articles'
            />
          </ul>
          <ul className='cards__items'>
             <CardItem
              src='images/growth.jpg' // Photo by Kyle Glenn on Unsplash
              text='Planning my professional development'
              label='24 July 2022'
              path='/articles'
            />
            <CardItem
              src='images/possible.jpg' // Photo by Towfiqu barbhuiya on Unsplash
              text='How challenging is it to come from a Non-Tech Background'
              label='17 July 2022'
              path='/articles'
            />
            <CardItem
              src='images/coding.jpg' // Photo by AltumCode on Unsplash
              text='How I entered the Tech World'
              label='10 July 2022'
              path='/articles'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
