import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div>
        <header>
            <div className='logo'>
                <h2>Kamident </h2>
            </div>
            <input type='checkbox' className='nav_check' hidden></input>
            <nav>
            <div className='logo'>
                <h2>Kamident </h2>
            </div>
                <ul>
                        <Link className='active' to='/'>Home</Link>
                   
                        <Link to='/services'>Services</Link>
                  
                        <Link to='/about'>About</Link>
                 
                        <Link to='/blog'>Blog</Link>
                </ul>
            </nav>
            <label for="nav_check" className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
            </label>
        </header>
    </div>
  )
}

export default NavBar
