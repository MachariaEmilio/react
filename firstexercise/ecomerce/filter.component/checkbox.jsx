import React from 'react'

function checkbox(name,onchange) {
  return (
    <>
    <input type="checkbox" name={name} onChange={onchange} />
    
    </>
      
    
  )
}

export default checkbox
