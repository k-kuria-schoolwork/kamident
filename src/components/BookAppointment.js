import React from 'react'

function BookAppointment() {
  return (
    <div className='bigdaddycont'>


    <div className='servicebody3'>
      <div className='column content'>
        <div className='contentcontainer'>

        <section>
        <h5>Book with us today</h5>

          <form id="consultation-form" class="feed-form" action="#">
            <input required="" placeholder="Name" type="text"/>
            <input name="phone" required="" placeholder="Phone number"/>
            <input name="data" id="data" type="date" class="infos"/>
            <textarea placeholder="Your message"></textarea>
            <button class="button_submit">Book Appointment</button>
          </form>
        </section>

        </div>
      </div>
      <div className='column image'>
              <img src='https://img.freepik.com/premium-photo/young-confident-dentist-giving-consultation-young-african-woman-with-son_274679-32010.jpg?w=2000' alt='columnimage'></img>
         </div>
    </div>
    

  </div>
  )
}

export default BookAppointment
