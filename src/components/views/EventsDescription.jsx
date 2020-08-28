import React from 'react'; 

// this is relatively hard-coded for now, in reality this blurb would be fetched from somewhere
const EventsDescription = ({ eventType }) => {
  return (
    <section className='events-description'>
      <h1 className='event-headline'>{eventType} odds</h1>
      <p className='events-blurb'>Trade and bet on a variety of tennis betting markets, including those on the French Open and Wimbledon.</p>
    </section>
  )
}; 

export default EventsDescription; 