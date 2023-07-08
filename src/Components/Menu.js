import React from 'react'

const Menu = ({title, type}) => {
  return (
    <div>
      <div className='menLlist'>
        <p id="name"> {title} </p>
        <p id> {type} </p>
      </div>
    </div>
  )
}

export default Menu
