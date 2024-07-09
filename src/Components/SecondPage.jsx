import React from 'react';
import Card from './Card';

function SecondPage() {
  const data = {
    items: [
      {
        title: 'People',
        description: 'Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.',
        src: './images/people.png',
        btn: 'Connect',
        hoverColor:"#8064A2"
      },
      {
        title: 'Place',
        description: 'Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.',
        src: './images/Vector.png',
        btn: 'Meet up',
         hoverColor:"#77933C"
      },
      {
        title: 'Product',
        description: 'Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.',
        src: './images/location.png',
        btn: 'Get it',
         hoverColor:"#C0504D"
      },
      {
        title: 'Program',
        description: 'Find events, meetups and workshops related to your hobby. Register or buy tickets online.',
        src: './images/time.png',
        btn: 'Attend',
         hoverColor:"#0096C8"
      }
    ]
  };
  
  return (
    <div className='second-page'>
     <div className='card-can'>
     {data.items.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} src={item.src} btn={item.btn} hoverColor={item.hoverColor} />
      ))}
     </div>


    
    </div>
  );
}

export default SecondPage;
