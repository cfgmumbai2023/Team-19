import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Navbar.css';
import football from '../../assets/football.png';
import search from '../../assets/search.png';
import Avatar from '../../components/Avatar/Avatar';

const Navbar = () => {
    var User = null
  return (
    <nav className='main-nav'>
    <div className=" navbar">
        <Link to = '/' className ='nav-item nav-logo'>
        <img src = {football} alt = 'football' width ="30px" className ='logo'/>
        </Link>
        <Link to = '/' className ='nav-item nav-btn'>About</Link>
        <Link to = '/' className ='nav-item nav-btn'>Courses</Link>
        <Link to = '/' className ='nav-item nav-btn'>My Learning</Link>
        <form>
            <input type="text" placeholder="Search..."/>
          <img src ={search} alt= "search" width ="18" className='search-icon'/>
        </form>
        {User === null  ?
          <Link to = '/Auth' className ='nav-item nav-Links'>Log in</Link> :
          <> 
          <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius= "50%" color='white' ><Link to ={`/Users/${User?.result?.id}`} style={{ color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
          <button className = 'nav-item nav-Links'>Log out</button>
          </>
           }
    </div>
</nav>
  )
}

export default Navbar