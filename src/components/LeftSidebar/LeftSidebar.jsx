import React from 'react';
import './LeftSidebar.css';
import { NavLink } from'react-router-dom';


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to ='/' className='side-nav-links' activeclassname = "active">
           <p>Experience Levels</p>
         </NavLink>
        <div className="side-nav-div">
          <div><label htmlFor="check">
                <input type="checkbox" id='check'/>
                <p style ={{fontSize: "13px"}}>0 Years</p>
            </label></div>
            <div><label htmlFor="check">
                <input type="checkbox" id='check'/>
                <p style ={{fontSize: "13px"}}>0 Years</p>
            </label></div>
            <div><label htmlFor="check">
                <input type="checkbox" id='check'/>
                <p style ={{fontSize: "13px"}}>0 Years</p>
            </label></div>
            <div><label htmlFor="check">
                <input type="checkbox" id='check'/>
                <p style ={{fontSize: "13px"}}>0 Years</p>
            </label></div>
            <div><label htmlFor="check">
                <input type="checkbox" id='check'/>
                <p style ={{fontSize: "13px"}}>0 Years</p>
            </label></div>
            <div><label htmlFor="check">
                <input type="checkbox" id='check'/>
                <p style ={{fontSize: "13px"}}>0 Years</p>
            </label></div>
        </div>
        <NavLink to ='/' className='side-nav-links' activeclassname = "active">
           <p>Sports</p>
         </NavLink>
         <NavLink to ='/registrationpage' className='side-nav-links' activeclassname = "active">
           <p>Registration Page</p>
         </NavLink>
      </nav>
    </div>
  )
}

export default LeftSidebar; 