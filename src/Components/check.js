import React from 'react'
import Menu from './Menu';

const check = () => {
    const items = [{title:'Item 1', type: 'video'},
    {title:'Item 2', type: 'video'},
    {title:'Item 3', type: 'video'},
    {title:'Item 4', type: 'video'},
    {title:'Item 5', type: 'video'},
    {title:'Item 6', type: 'video'},
    {title:'Item 7', type: 'video'}];
  
   return (
    <ul>
      {items.map((item, index) => (
        <Menu title={item.title} type={item.type} />
      ))}
    </ul>
  )
}

export default check
