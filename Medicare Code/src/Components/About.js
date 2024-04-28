import React from 'react'
import "./About.css"
import back from '../Assets/medibg.png'
import abt from '../Assets/AboutPic.png'
import Arrowline from "../Assets/Vector 1.png"

function About() {
  return (
    <div  className="container-1" id="about">
      <img  className="bg-pic" src={back} alt='img'/>
        <div className='cols-1'>
          <img className='about-pic' src={abt} alt='img'/>
        </div>
        <div className='cols-2'>
            <h1 className='about-head'>ABOUT US</h1>
            <img src={Arrowline} className='about-underline' alt='img'/>
            <p className='about-content'>"Medicare Enviro Systems, established in <b>2004</b> stands as a pioneering entity in the medical waste management sector in Thanjavur. With a dedicated team of qualified engineers, technicians, and skilled employees, we uphold the highest standards in our operations. Our commitment to safety and environmental responsibility is evident in our adherence to the stringent guidelines set by the <b>Pollution Control Board (PCB)</b> for the safe and secure disposal of medical waste.</p>
            <p className='about-content'>Moreover, we pride ourselves on staying at the forefront of technological advancements. Embracing the era of Industrial 4.0, we have integrated state-of-the-art machinery and equipment into our processes. An exemplary instance of this is our utilization of autoclaves, which exemplify the cutting-edge solutions we employ to efficiently manage medical waste while minimizing environmental impact.</p>
            <p className='about-content'>At Medicare Enviro Systems, we continuously strive to innovate and improve our practices to ensure the well-being of both our clients and the environment we serve.</p>
        </div>
    </div>
  )
}
export default About