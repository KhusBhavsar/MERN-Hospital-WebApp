import React from 'react'
import doctor from './images/doctos.png'
import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  return (
  <>
    <Navbar/>
    <div className='home'>
      <div className="bgCreate" style={{width:"100%", height:"100%"}}>
      <div className="left">
        <h2>Your Life is In Safe Hands, Relax 	&#128516;</h2>
      </div>
      <div className="right">
        <img src={doctor} alt="doctor" />
        
      </div>
      </div>
    </div>

    <div className="home2">
      <div className="container1">
        <form>
          <fieldset>
            <legend>What is 24/7?</legend>
            <p>
              Welcome to 24/7, the Hospital WebApp where caring meets excellence. Our mission is to provide gentle and compassionate healthcare services that save lives. With a team of experienced doctors and emergency specialists, we are dedicated to delivering superfast and efficient medical care when it matters most. <br /><br />
              At 24/7, we understand the importance of timely and expert medical attention. Our skilled professionals are available round-the-clock, ensuring that you receive the highest quality care whenever you need it. Whether it's a minor ailment or a critical emergency, our team is prepared to handle any situation with expertise and precision. <br /><br />
              We take pride in our commitment to patient well-being. Every member of our staff is dedicated to providing personalized care tailored to your specific needs. From diagnosis to treatment, we strive for excellence in every aspect of your healthcare journey. <br /><br />
              When it comes to your health, trust matters. That's why at 24/7, we prioritize building strong relationships with our patients based on trust, respect, and open communication. We believe that by fostering a supportive environment, we can better understand your concerns and work together towards optimal health outcomes. <br /> <br />
              Experience the difference at 24/7 - where caring meets expertise in saving lives. We invite you to explore our comprehensive range of medical services and discover why we are the preferred choice for all your healthcare needs.
            </p>
            <center><Link to={"/Emergency"}><button class="button-24">Book Appointment</button></Link></center>
          </fieldset>
        </form>

        
      </div>
    </div>
   
  </>
  )
}

export default Home
