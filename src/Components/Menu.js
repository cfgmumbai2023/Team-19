import React from 'react';
import '../Styles/Menu.css';

const Menu = ({title, type}) => {
  return (
    <div>
      <div className='menulist'>
        <div id="name"> {title} </div>
        <div id="type"> {type} </div>
      </div>
    </div>
  )
}

export default Menu
