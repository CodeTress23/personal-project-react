import React from 'react';
import Logo from '../assets/1.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className='navbar'>
            <nav>
                <img src={Logo}/>
                <header className='header-edit'>
                    <div className="nav-bar">
                        <Link className='nav-space' to = "/"> Home </Link>
                        <Link className='nav-space' to = "/about"> About </Link>
                        <Link className='nav-space' to = "/login"> Login </Link>
                        <Link className='nav-space' to = "/quiz"> Quiz </Link>
                        <Link className='nav-space' to = "/resources"> Resources </Link>
                    </div>
                </header>
            </nav>
        </div>
    )
}

export default Header;