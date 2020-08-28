import React from 'react'; 

// NOTE: I wrote these date and time functions by hand because, given the limited functionality I needed, it seemed like overkill to import another library, especially one as big as moment.js

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

// returns the string "today" 'tomorrow' or 'yesterday', or finds day of the week, depending on date event is supposed to happen
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
