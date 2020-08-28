import React from 'react'; 

const BettableTag = ({ bettable }) => {
  return(
    <span className={bettable ? 'bettable-tag bettable' : 'bettable-tag not-bettable'}>
      {bettable ? 'BETTABLE' : 'EXPIRED'}
    </span>
  )
}; 

export default BettableTag; 