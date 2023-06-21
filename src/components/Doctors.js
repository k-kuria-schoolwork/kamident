import React from 'react'
import { Link } from 'react-router-dom'
import doctors from '../data'

function Doctors() {
  return (
    <div>
      <div className='bigdaddycont'>
      <div className='servicewrapper'>
      <img src='../images/teeth13.jpg' alt='contimage'></img>
     <div className='servicetext'>
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
