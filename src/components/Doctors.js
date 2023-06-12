import React from 'react'

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
        <div class="row row-cols-1 row-cols-md-3 g-3">
  <div class="col">
    <div class="card">
      <img src='../images/doctor2.jpg'  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Dr.Anne Mutwe</h3>
        <p class="card-text">DENTAL ASSISTANT</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src='../images/doctor3.jpg'  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Dr.Eunice Njoki</h3>
        <p class="card-text">ORTHODONTIST</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src='../images/doctor4.jpg'  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Dr.Jackson Mutwe</h3>
        <p class="card-text">DENTAL ASSISTANT</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src='../images/doctor5.jpg'  class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Dr.Keffin Omunyala</h3>
        <p class="card-text">GENERAL DENTIST</p>
      </div>
    </div>
  </div>
</div>
        </div>
             
        </div>
    </div>
  )
}

export default Doctors
