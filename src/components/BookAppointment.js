import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

function BookAppointment() {
const form = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_fx02hl6', 'template_rs0rjis', form.current, 'QHjfvohYmK-wX_pdK')
  .then((result) => {
      console.log(result.text);
      alert("Appointment booked successfully!")
  }, (error) => {
      console.log(error.text);
      alert("Oops!Something went wrong!")

  });
   e.target.reset()
}



  return (
    <div className='bigdaddycont'>
    <div className='servicebody3'>
      <div className='column content'>
        <div className='contentcontainer'>

        <section>
        <h5>Book with us today</h5>

          <form ref={form} onSubmit ={sendEmail} id="consultation-form" class="feed-form" action="#">
            <input name="user_name" required="" placeholder="Name" type="text"/>
            <input name="user_phone" required="" placeholder="Phone number"/>
            <input name="user_email" required="" placeholder="Email" type="email"/>
            <input name="date" id="data" type="date" class="infos"/>
            <textarea name='message' placeholder="Your message"></textarea>
            <button type='submit' value="send" class="button_submit">Book Appointment</button>
          </form>
        </section>

        </div>
      </div>
      <div className='column image'>
              <img src='https://blackhealthmatters.com/wp-content/uploads/2023/05/Addressing-Racial-Disparities-in-Dental-Care-for-African-Americans.jpg' alt='columnimage'></img>
         </div>
    </div>
    

  </div>
  )
}

export default BookAppointment
