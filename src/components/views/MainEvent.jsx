import React from 'react'; 

const MainEvent = ({ eventInfo })=> {
  return (
  <div className='event main-event'>{eventInfo.name}</div>
  )
}; 

export default MainEvent; 