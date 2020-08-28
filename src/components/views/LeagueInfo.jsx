import React from 'react'; 

const parseSlug = slug => {
  if (!slug) return [null, null]; 

  const slugArray = slug.split('/'); 
  const sport = slugArray[2].toUpperCase(); 
  const league = slugArray[3].toUpperCase(); 
  return [sport, league]; 
}


const LeagueInfo = ({ eventSlug }) => {
  const [sport, league] = parseSlug(eventSlug); 
  
  return (
    <span class='league-info'>{sport} | {league}</span>
  ); 
}; 

export default LeagueInfo; 