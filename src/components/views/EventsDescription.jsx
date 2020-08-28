import React from 'react'; 

const EventsDescription = ({ eventType }) => {
  return (
    <section className='events-description'>
      <h1 className='event-headline'>{eventType} odds</h1>
      <p className='events-blurb'>Trade and bet on a variety of tennis betting markets, including those on the French Open and Wimbledon.</p>
    </section>
  )
}; 

export default EventsDescription; 