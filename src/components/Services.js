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
        </ul>
      </div>
      <div className="outlet">
        <Outlet />
        {/* <button className='servbutton'>Book Apointment</button> */}
        </div> 

        <div className='servicebtn'>
          <button className='booking'>
          <Link to='appointmentbooking'>Book Apointment</Link>
            </button>
          </div> 

          <div className='servicebody2'>
            <div className='home2'>
            <img src='https://lindennjdentist.com/static/fa76ee9df70c92381d384f33ee17e97b/01203/saturday-dentist1.jpg' alt='columnimage'></img>
            <div className='hometextbox'>
            <h2>The Best Technique Immediate & Effecient Result</h2>
            <p>We offer a total scope of dental and cleanliness medications, perfomed by talented and energetic experts in our medical procedure.Our motivation is to separate ourselves as a medical procedure that gives dentistry of the extremely most austanding quality that upgrades our patient's lives.</p>
            </div>
        </div>
            </div> 

            <div className='servicebody3'>
              <div className='column content'>
                <div className='contentcontainer'>
                  <h2>Common Questions Asked</h2>

                  
                  <div class="dropdown">
  <a class="btn btn-outline-secondary dropdown-toggle" href="#dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Do the implanted teeth look natural?
  </a>

  <ul class="dropdown-menu">
  <p>Dental implants are designed to look and feel just like your natural teeth. And when compared to other restorative options for missing teeth (i.e., bridges), dental implants are hands-down the most natural-looking option.</p>
  </ul>
</div>

<div class="dropdown">
  <a class="btn btn-outline-secondary dropdown-toggle" href="#dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    What is the duration of dental implants operation?
  </a>

  <ul class="dropdown-menu">
  <p>The Dental Implant process is basically a three phase process, which can be different for each person. Typically the entire process takes from 5 to 8 months.</p>
  </ul>
</div>

<div class="dropdown">
  <a class="btn btn-outline-secondary dropdown-toggle" href="#dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    How should dental care be after the operation?
  </a>

  <ul class="dropdown-menu">
  <p>Starting 24 hours after your tooth was pulled, gently rinse your mouth with warm salt water several times a day to reduce swelling and relieve pain. </p>
  </ul>
</div>

<div class="dropdown">
  <a class="btn btn-outline-secondary dropdown-toggle" href="#dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    When and how to brush my teeth?
  </a>

  <ul class="dropdown-menu">
  <p>Brushing twice a day is recommended as a minimum. Brush before breakfast, not afterwards to prevent tooth erosion. Brush your teeth for at least 2 minutes each time.</p>
  </ul>
</div>

<div class="dropdown">
  <a class="btn btn-outline-secondary dropdown-toggle" href="#dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    How to keep my teeth healthy?
  </a>

  <ul class="dropdown-menu">
  <p>Brush your teeth twice a day with fluoride toothpaste. Floss regularly. Visit your dentist routinely for a checkup and cleaning.</p>
  </ul>
</div>

<div class="dropdown">
  <a class="btn btn-outline-secondary dropdown-toggle" href="#dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    What toothpaste do you recommend?
  </a>

  <ul class="dropdown-menu">
  <p>One of the more common types of toothpaste is fluoride toothpaste. Because fluoride strengthens your teeth and prevents decay, dentists recommend it for children and adults. </p>
  </ul>
</div>
                  
 

                 

                </div>
              </div>

              <div className='column image'>
                <img src='https://img.freepik.com/premium-photo/young-confident-dentist-giving-consultation-young-african-woman-with-son_274679-32010.jpg?w=2000' alt='columnimage'></img>
              </div>
              </div> 

        </div>
  )
}

export default Services
