import React from 'react'
import { Populate } from '../shoe.component/shoe'

function Datamap({items}) {
  return (
    items.map((item)=>
    <Populate key={item.productID} item={item}/>
    )
  )
}

export default Datamap
