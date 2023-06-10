import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Services() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline' ,
    }
  }
  return (
    <div className='bigdaddycont'>
      <div className='servicewrapper'>
        <img src='https://media.istockphoto.com/id/895319786/photo/close-up-of-scrub-nurse-taking-medical-instruments-surgery-and-emergency-concept.jpg?s=612x612&w=0&k=20&c=oOVnpdK-1QgwjwxF5SbfdgnqPFFoO27pG5-QWerhJfs=' alt='serviceimg'></img>
     <div className='servicetext'>
        <h5>SERVICE MENU</h5>
        <h2>Our Services</h2>
     </div>
      </div>

      <div className='servicebody'>
        <ul className='servicewraper'>
        <Link style={{navLinkStyles}} to='services/dentalcrown'>Dental Crown</Link>
        <Link style={{navLinkStyles}} to='services/toothextraction'>Tooth Extraction</Link>
        <Link style={{navLinkStyles} }to='services/metalbraces'>Metal Braces</Link>
        <Link style={{navLinkStyles}} to='services/teethwhitening'>Teeth Whitening</Link>
        <Link style={{navLinkStyles}} to='services/dentalimplants'>Dental Implants</Link>
        <Link style={{navLinkStyles}}to='services/dentalcare'>Dental Care</Link>
        </ul>
      </div>
      <div className="outlet">
        <Outlet />
        {/* <button className='servbutton'>Book Apointment</button> */}
        </div>    
        </div>
  )
}

export default Services
