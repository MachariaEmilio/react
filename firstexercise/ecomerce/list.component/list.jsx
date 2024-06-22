import React from 'react'

export const List = ({list}) => {
  return (
    <div>
            
      <p>title :{list.title}</p>
      <p>imageurl :{list.imageUrl}</p>
      <p>price:{list.price}</p>
      <p>location: {list.location}</p>
      <p>date: {list.date}</p>
      <p>category:{list.category}</p>
         </div>
  )
}


