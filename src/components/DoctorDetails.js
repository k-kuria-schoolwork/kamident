import React from 'react'
import { useParams } from 'react-router-dom'
import doctors from '../data'
import { Link } from 'react-router-dom';

function DoctorDetails() {
  const { doctorsId } = useParams();
  const doctor = doctors.find((doctor) => doctor.id ===parseInt(doctorsId));
console.log(doctor)
  // Check if doctor exists and has image property
  if (!doctor || !doctor.image) {
    return <div>Doctor not found</div>;
  }

  // Destructure doctor properties
  const { image, title,patients,experience,reviews,description1,description2 } = doctor;

  return (
    <div className='detailscontainer'>
      <div className='detailswrpper'>
        <div className='detailsdoc'>
          <img src={image} alt="Doctor" />
          <h5>{title}</h5>
          <h6>{description1}</h6>
          </div>
      </div>
      <div className='details'>
        <div className='detailsdiv'>
        <h5>Patients </h5>
        <h6>{patients}</h6>
        </div>

      <div className='detailsdiv'>
      <h5>experience </h5>
      <h6>{experience}</h6>
      </div>
      
      <div className='detailsdiv'>
      <h5>reviews </h5>
      <h6>{reviews}</h6>
      </div>
      </div>

      <div className='biography'>
        <h3>Biography</h3>
      <h5>{description2}</h5>
      <div className='servicebtn2'>
          <button >
          <Link to='appointmentbooking'>Book Apointment</Link>
            </button>
          </div> 
      </div>
    </div>
  );
}

export default DoctorDetails
