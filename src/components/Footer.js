import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>

            <div className='sb_footer-links'>
            <div className='socalmedia'>
            </div>           
                 </div>
            <div className='sb_footer-link_div'>
            <i><h7 className='mambokubwa'>Kamident Dental</h7></i>            
                <h5>Your best life begines with a <span className='footspan'>SMILE</span>.</h5>
                <h3>+254 706 262 436</h3>
                <div className='socialmedia'>
                    <p><i class="fa-brands fa-instagram"></i></p>
                    <p><i class="fa-brands fa-twitter"></i></p>
                    <p><i class="fa-brands fa-facebook"></i></p>
                </div>
            </div>

            <div>
      <div className='sb_footer-link_div'>
            <h6>Quick links</h6>
            <a href='/'>
                <p>Home</p>
            </a>
            <a href='/services'>
                <p>Services</p>
            </a> <a href='/doctors'>
                <p>Doctors</p>
            </a>
            </div>
      </div>
      
        <div className='sb_footer-link_div'>
            <h6>Working Hours</h6>
                <p>Mon - Fri: 8am - 6pm</p>
                <p>Saturday: 8am - 5pm</p>
                <p>Sunday: closed</p>
        </div>



        <div className='sb_footer-link_div'>
            <h6>Contact Us</h6>

                <div className='socialmediaa'>
                    <p><i class="fa-brands fa-instagram"><h7>kamdident</h7></i></p>
                    <p><i class="fa-brands fa-twitter"><h7>kamdident</h7></i></p>
                    <p><i class="fa-brands fa-facebook"><h7>kamdident</h7></i></p>
                </div>
        </div>

      </div>
    
        <div className='sb_footer-below'>
            <div className='sb_footer-copyright'>
                <p>copyright <span className='footspan'>Kamident Dental</span>. All rights reserved</p>
            </div>

        </div>
      </div>

    </div>
  )
}

export default Footer
