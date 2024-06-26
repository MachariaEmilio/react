import React from 'react';
import ItemComponent from '../itemcomponent/items';
const ListComponent = ({ list }) => (
  <div>
    {list.map(item => (
      <ItemComponent key={item.objectID} item={item} />
    ))}
  </div>
);
 
export default ListComponent;