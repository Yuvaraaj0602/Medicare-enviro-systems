import React from 'react'
import Arrowline from "../Assets/Vector 1.png"
import hex1 from '../Assets/process/Group 25096.png'
import hex2 from '../Assets/process/Group 25097.png'
import hex3 from '../Assets/process/Group 25098.png'
import hex4 from '../Assets/process/Group 25099.png'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contact-bg' id='contact'>
        <hr className='contact-line'/>
        <h1 className='contact-head '>CONTACT US</h1><img src={Arrowline} className='contact-underline'/>
        <div className='section'>
        <div className='contact-list'>
            <ul className='con-items'>
                <li className='con-item' ><img src={hex1} className='hexc-img'/>270, MIG, New Housing Unit, Serfoji college post,<br/><span className='phno1'> Thanjavur, Tamil Nadu - 613005</span></li>
                <li className='con-item'><img src={hex2} className='hexc-img'/>+91 9600288998</li>
                <li className='con-item'><img src={hex3} className='hexc-img'/>medicare@gmail.com</li>
                <li className='con-item'><img src={hex4} className='hexc-img'/>Open :Mon - Sat :- 9:00 am - 6:00 pm,<br/><span className='phno1'>Sun:- Closed.</span></li>
            </ul>
        </div>
        <div className='map-work'>
            <p className='con-item'>Registered Office Unit-I</p>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9842513790627!2d79.11844172124196!3d10.75389296901289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9f55ee87423%3A0x31cc0548ae7eff46!2sMedicare%20Enviro%20System!5e0!3m2!1sen!2sin!4v1708404246277!5m2!1sen!2sin"}></iframe>
            <p className='con-item'>FACTORY UNIT-II</p>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1960.1046296462569!2d78.97916441921116!3d10.7183368962161!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708405166510!5m2!1sen!2sin"} ></iframe>
        </div>
        </div>
    </div>
  )
}
