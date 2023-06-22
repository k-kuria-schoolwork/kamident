import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import alertify from 'alertifyjs';


function BookAppointment() {
const form = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_fx02hl6', 'template_rs0rjis', form.current, 'QHjfvohYmK-wX_pdK')
  .then((result) => {
      console.log(result.text);
      alertify.alert('Bookings', 'Appointment Booked Successfully!', function(){ alertify.success('Ok'); });
    }, (error) => {
      console.log(error.text);
      alert("Oops!Something went wrong!")

  });
   e.target.reset()
}



  return (
    <div className='bigdaddycont'>
    <div className='servicebody4'>
        <div className='contentcontainer'>
        <h5>Book with us today</h5>
          <form ref={form} onSubmit ={sendEmail} id="consultation-form" class="feed-form" action="#">
            <input name="user_name" required="" placeholder="Name" type="text"/>
            <input name="user_phone" required="" placeholder="Phone number"/>
            <input name="user_email" required="" placeholder="Email" type="email"/>
            <input name="date" id="data" type="date" class="infos"/>
            <textarea name='message' placeholder="Your message"></textarea>
            <button type='submit' value="send" class="button_submit">Book Appointment</button>
          </form>
        </div>
      <div>
              <img  id='image101' src='https://avenuedentalarts.com/wp-content/uploads/2018/02/West_Hartford_CT_Dentist_Dental_Appointment_on_Calendar.jpeg' alt='columnimage'></img>
         </div>
    </div>
    

  </div>
  )
}

export default BookAppointment
