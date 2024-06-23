import React from 'react'
import "./list.css"

export const List = ({list}) => {
  return (
    <div className='div'>
            
      <p>title :{list.title}</p>
      <p>imageurl :{list.imageurl}</p>
      <p>price:{list.price}</p>
      <p>location: {list.location}</p>
      <p>date: {list.date}</p>
      <p>category:{list.category}</p>
         </div>
  )
}


