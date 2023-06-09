import React from 'react'
import { Link } from 'react-router-dom'
import doctors from '../data'

function Doctors() {
  return (
    <div>
      <div className='bigdaddycont'>
      <div className='servicewrapper'>
      <img src='https://dental.uonbi.ac.ke/sites/dental.uonbi.ac.ke/files/styles/mt_slideshow/public/2022-11/Gataka%20Medical%20Camp7_0.jpg?itok=13-YL7l_' alt='columnimage'></img>
     <div className='servicetext'>
     <h5>OUR</h5>
        <h2>Doctors</h2>
     </div>
      </div>

        <div className='doctorsbody'>
        <div class="row row-cols-1 row-cols-md-3 g-3" >

          {doctors.map((doctor) =>{
            return(
              <div class="col" key={doctor.id}>
              <div  class="card">
                <img   class="card-img-top" src={doctor.image} alt="..."/>
                <div class="card-body">
                  <h3 class="card-title">{doctor.title}</h3>
                  <p class="card-text">{doctor.description1}</p>
                  <button className='booking'><Link to={`/doctors/${doctor.id}`}>View more</Link></button>
                </div>
              </div>
            </div>

            )
          })

          }

        </div>
        </div>

        </div>
    </div>
  )
}

export default Doctors
