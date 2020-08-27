import React from 'react'; 

const Event = ({ eventInfo, gridId }) => {
  return (
  <div className={`event event-card event-card-${gridId}`}>{eventInfo.name}</div>
  )
}; 

export default Event; 