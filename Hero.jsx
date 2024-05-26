import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
         <h1>Explore. Innovate. Inspire.</h1>
         <p>At our university, engineering is more than a discipline; 
            it is a passion. We cultivate thinkers and problem-solvers ready to make an impact. With world-class facilities and mentorship from industry leaders, students gain invaluable experience and insights. Embark on a journey with us to push the 
            boundaries of what is possible and drive the innovations
             of tomorrow.</p>
             <button className='btn'>Learn more<img src={dark_arrow} alt=''/></button>
        </div>


    </div>
  )
}

export default Hero