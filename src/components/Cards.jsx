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
              text=''
              label='Coming Soon'
              path='/books'
            />
            <CardItem
              src='images/read.jpg' // Photo by Annelies Geneyn on Unsplash
              text='Current Read'
              label='18 Sep 2022'
              path='/read'
            />
          </ul>
          <ul className='cards__items'>
             <CardItem
              src='images/interview.jpg' // Photo by Christina wocintechchat.com on Unsplash
              text='Job Interview Tips'
              label='11 Sep 2022'
              path='/interview'
            />
            <CardItem
              src='images/books.jpg' // Photo from Unsplash
              text='Books that helped me during UI/UX'
              label='04 Sep 2022'
              path='/books'
            />
            <CardItem
              src='images/motivation.jpg' // Photo by Cristofer Maximilian on Unsplash
              text='How To stay motivated'
              label='28 Aug 2022'
              path='/motive'
            />
          </ul>
          <ul className='cards__items'>
             <CardItem
              src='images/growth.jpg' // Photo by Kyle Glenn on Unsplash
              text='Planning My Professional Development'
              label='21 Aug 2022'
              path='/dev'
            />
            <CardItem
              src='images/design.jpg' // Photo by Amélie Mourichon on Unsplash
              text='Why UI design?'
              label='14 Aug 2022'
              path='/design'
            />
            <CardItem
              src='images/coding.jpg' // Photo by AltumCode on Unsplash
              text='How I Entered the Tech World'
              label='07 Aug 2022'
              path='/tech'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
