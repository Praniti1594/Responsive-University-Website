import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "Your access key");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };






  return (
    <div className='contact'>
      <div className="contact-col">
       <h3>Send us a message <img src={msg_icon} alt="" /></h3>
       <p>We are here to assist you with any questions or 
        concerns you may have. Please reach out to us for more
         information about our programs, admissions, or campus facilities.</p>
      <ul>
        <li>  <img src={mail_icon} alt="" />sherlockholmes221@gmail.com</li>
        <li> <img src={phone_icon} alt="" />1234567890</li>
        <li> <img src={location_icon} alt="" />Imperial College London, Exhibition Road, <br/>London, SW7 2AZ, United Kingdom.
</li>
      </ul>
      </div>
      <div className="contact-col">
       <form onSubmit={onSubmit}>
         <label>Your name</label>
         <input type="text"  name='name' placeholder='Enter your name' required/>
        <label>Phone Number</label>
        <input type="tel"  name='phone' placeholder='Enter your Mobile number' required/>
        <label>Write Your message here</label>
        <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
       <button type='submit' className='btn dark-btn'>Submit</button>
       </form>
       <span>
      {result }
       </span>
       </div>
    </div>
  )
}

export default Contact
