import React from 'react'; 

export const formatMatchName = name => {
  return name ? name.split(' vs ') : [null, null]; 
}

const MatchName = ({ name }) => {
  const [firstName, secondName] = formatMatchName(name); 

  return (
    <div className='match-name-container'>
      <h3 className='match-name'>{firstName}</h3>
      <h3 className='match-name'>{secondName}</h3>
    </div>
  )
}; 

export default MatchName; 