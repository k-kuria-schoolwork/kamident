import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import doctors from '../data'

function Doctors() {
  return (
    <div>
      <div className='bigdaddycont'>
      <div className='servicewrapper'>
        <img src='https://media.defense.gov/2019/Aug/22/2002174235/1200/1200/0/190819-F-VX133-333.JPG' alt='serviceimg'></img>
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
                  <p class="card-text">{doctor.description}</p>
                  <button className='servicebtn2'><Link to={`/doctors/${doctor.id}`}>View more</Link></button>
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
