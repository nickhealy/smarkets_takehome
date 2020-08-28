import React from 'react'; 

// a simple tag that either says bettable or expired depending on the boolean passed to it
const BettableTag = ({ bettable }) => {
  return(
    <span className={bettable ? 'bettable-tag bettable' : 'bettable-tag not-bettable'}>
      {bettable ? 'BETTABLE' : 'EXPIRED'}
    </span>
  )
}; 

export default BettableTag; 