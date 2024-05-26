import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState}) => {
  return (
    <div className='about'>
     <div className="about-left">
      <img src={about} alt=""  className='about-img'/>
      <img src={play_icon} alt=""  className='play-icon' onClick={()=>
        { setPlayState(true)}
      }/>
     </div>

     <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
         <h2>Engineering Dreams, Crafting Realities.</h2>
         <p>Welcome to our university, where engineering excellence is our foundation. Our mission is to inspire and empower students to become innovators and leaders in their fields. With a commitment to hands-on learning and cutting-edge
             research, we prepare our graduates to tackle the challenges of tomorrow.</p>
         <p>Our world-class faculty and state-of-the-art facilities provide an environment where creativity and technical expertise
              thrive. We believe in fostering a culture of curiosity and 
              collaboration, ensuring that every student has the opportunity
               to excel. Through real-world projects and industry partnerships, 
            our students gain invaluable experience that sets them apart.</p>
            <p>Join our vibrant community of thinkers and doers, where your potential is nurtured, and your ambitions are realized. At our university, you’ll not only learn the principles of engineering but also how to apply them to create innovative solutions. Together, we are building 
                a future driven by engineering brilliance and transformative ideas.</p>
     </div>

    </div>
  )
}

export default About