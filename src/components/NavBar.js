import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div>
        <header>
            <div className='logo'>
                <i><h2>Kamident Dental</h2></i>
            </div>
            <input type='checkbox' className='nav_check' hidden></input>
            <nav>
            <div className='logo'>
                <h2>Kamident </h2>
            </div>
                <ul>
                        <Link className='active' to='/'>Home</Link>
                   
                        <Link to='/services'>Services</Link>
                  
                        <Link to='/doctors'>Doctors</Link>
                 
                        <Link className='active2' to='/services/appointmentbooking'>Book Appointment</Link>

                </ul>
            </nav>
            <label for="nav_check" className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
            </label>
            
        </header>

        <div className='header2'>
            <div className='contact'>
                <h5>Phone no:+254-706-262-436</h5>
                <p>Githurai opp Equity Bank</p>
            </div>
            <div className='contact'>
                <h5>Opening Hours</h5>
                <p>Mon-Fri 8AM-3AM Sat 8AM-3PM</p>
            </div>
            
        </div>
    </div>
  )
}

export default NavBar
