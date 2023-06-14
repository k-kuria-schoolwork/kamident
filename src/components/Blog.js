import React from 'react'

function Blog() {
  return (
    <div className='bigdaddycont'>


      <div className='servicebody3'>
        <div className='column content'>
          <div className='contentcontainer'>

          <section>
          <h5>Make an Appointment</h5>

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
        
      </div>
      

    </div>
  )
}

export default Blog
