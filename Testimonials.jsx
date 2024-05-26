import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx=0; 
    // initial value of translate x

   const slideForward = () => {
    if(tx > -50){
        tx-=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
   }

   const slideBackward = () => {
    if(tx < 0){
        tx+=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
   }




  return (
    <div className='testimonials'>
        <img src={next_icon} alt=""  className='next-btn'
         onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' 
        onClick={slideBackward}/>
        <div className="slider">

            <ul ref={slider}>
                <li>
                    <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Annabeth Chestnut</h3>
                            <span>Edusity, London</span>
                        </div>
                    </div>
                    <p>Attending this university has been a transformative experience. The hands-on projects and supportive 
                        faculty have truly prepared me for successful engineering career.</p>
                        </div>
                </li>
                <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Raj Koothrappali</h3>
                            <span>Edusity, London</span>
                        </div>
                    </div>
                    <p>This university has exceeded my expectations in every way. The mentorship and industry connections have
                         given me the confidence and skills to excel in my future career.</p>
                         </div>
                </li>
                <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3> Christine Hemsworth</h3>
                            <span>Edusity, London</span>
                        </div>
                    </div>
                    <p>Being part of this vibrant community has been incredible. The collaborative environment and real-world
                         applications have made my education both practical and inspiring.</p>
                         </div>
                </li>
                <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Leonardo Dicaprio</h3>
                            <span>Edusity, London</span>
                        </div>
                    </div>
                    <p>The cutting-edge facilities and innovative curriculum have allowed me 
                        to push the boundaries of my knowledge. I feel ready to tackle any challenge in the engineering field.</p>
                        </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Testimonials