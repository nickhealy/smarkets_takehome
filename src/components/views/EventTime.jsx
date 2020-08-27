import React from 'react'; 

const getDayOfWeek = date => {
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']; 

  return days[date.getDay()]
};

const formatTime = date => {
  const time = new Date(date);
  let hours = time.getUTCHours();
  let minutes = time.getUTCMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+ minutes : minutes; 
  return hours + ':' + minutes + ' ' + ampm;
}; 


const getTodayTomorrowOrYesterday = (date, today = new Date()) => {
  const eventDate = new Date(date); 

  return eventDate.getDate() === today.getDate()
    ? 'TODAY'
    : eventDate.getDate() + 1
    ? 'TOMORROW'
    : eventDate.getDate() - 1
    ? 'YESTERDAY'
    : getDayOfWeek(eventDate)
}

const EventTime = ({ start_datetime }) => {
  const day = getTodayTomorrowOrYesterday(start_datetime); 
  const time = formatTime(start_datetime); 
  return (
    <p className='event-time'>
      <span className='event-time'>{day} {time}</span>
    </p>
  )
}; 

export default EventTime; 
