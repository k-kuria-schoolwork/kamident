import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
  return (
    <div >
        <div>
        <img className='homeimage' src='https://www.findlaw.com/injury/medical-malpractice/can-i-sue-my-dentist/_jcr_content/pg/articleHeading/imageInLine.coreimg.jpeg/1589569975382.jpeg' alt='homeforo'></img>
          <div className='hometext'>
            <h1 >DENTAL CARE FOR</h1>
            <h2 >YOUR <span className='homespan'>NEW</span> </h2>
            <h2><span className='homespan'>SMILE</span></h2>
          </div>
        </div>
     
        <div className='home2'>
            <img src='https://sandimassedation.com/wp-content/uploads/cosmetic-dentist-2003.jpg' alt='home2'></img>
            <div className='hometextbox'>
            <h2>We Care For Your Dental Health</h2>
            <p>We will instruct and teach the exceptionally imperative estimation of oral wellbeing and what every single patient can do to keep his or her teeth solid during their lifetime. We are committed to offering our patients great dentistry in a minding and delicate way.</p>
            <button  onClick={() => navigate('Blog')}>Read More...</button>
            </div>
        </div>


        <div className='home3'>
            <div className='homeheader'>
               <h5>WHY CHOOSE US</h5>
                <h2>Flexible Care Delivery Models</h2>
            </div>
                <div className='homecard1'>
                <div class="card-group">
  <div class="card1">
    <img src="https://media.istockphoto.com/id/1186140156/photo/girl-receiving-dental-care.jpg?s=612x612&w=0&k=20&c=Tf_24tfMh8Y4sDTUsmVq9hBtzXee2qjICBbpy0XGIqg=" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">Teeth whitening</h2>
      <p class="card-text">.</p>
    </div>
  </div>
  <div class="card1">
    <img src="https://hendforddentalpractice.co.uk/wp-content/uploads/2020/05/AdobeStock_265678112-scaled.jpeg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">Teeth extraction</h2>
      <p class="card-text"></p>
    </div>
  </div>
  <div class="card1">
    <img src="https://hendforddentalpractice.co.uk/wp-content/uploads/2020/05/AdobeStock_265678112-scaled.jpeg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">Teeth extraction</h2>
      <p class="card-text"></p>
    </div>
  </div>
  
  <div class="card2">
    <img src="https://www.webb-orthodontics.com/wp-content/uploads/2021/10/Difference-Between-a-Dentist-and-an-Orthodontist-in-Charlotte.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h2 class="card-title">Implant braces</h2>
      <p class="card-text"></p>
    </div>
  </div>
</div>
                </div>
         </div>

         <div className='home2'>
         <img className='home4img' src='https://images.everydayhealth.com/images/dental-health/cs-sensitive-teeth-dentist-1440x810.jpg?sfvrsn=9186d2ea_0' alt=''></img>
            <div className='hometextbox'>
            <h2>We Care For Your Dental Health</h2>
              <p className='home2p'>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
              We’re here to care for you and your entire family. Regular visits to the doctor will depend on your age and general health!</p>    
            </div>
        </div>


      <div className='home5'>
        <h2>Testimonials</h2>
        <div className='home5wrapper'>
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">Halima </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">project manager</h6>
            <p class="card-text">My first time in this clinic and the services were exemplary ,i highly recommend anyone in search of a dental clinic.. </p>
            
          </div>
        </div>

        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">kevin Gitonga</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Enterprenuer</h6>
            <p class="card-text">The receptionist was so welcoming,the services were professional and the prices were fair.How can you not love it there. </p>
          </div>
        </div>
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">Bunny kanosh</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Fashion designer</h6>
            <p class="card-text">Shout out to my bwoy ya diig.The doctor gold platted me some dope shit.Thats wozzap</p>
           
          </div>
        </div>
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">Barbie Doll</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Spicey Wifey</h6>
            <p class="card-text">Heyyy guuurl.I got some shiny dimy on my teeth.PS i also got some braces.ahaaa.You thought i was feeling you. </p>
            
          </div>
        </div>
        </div>





      </div>

        
    </div>
  )
}

export default Home
