import React from 'react'
import { List } from '../list.component/list'
export const Product = ({productdata}) => {
  return (
    <div>
      {productdata.map((datalist)=>
      <List key={datalist.id} list={datalist} />)}
    </div>
  )
}


