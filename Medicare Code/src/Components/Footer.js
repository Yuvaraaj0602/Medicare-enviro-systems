import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faEnvelope, faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='foot-row'>
                <div className='foot-col'>
                    <h6 className='foot-head'>Office Address</h6>
                    <p className='foot-text'> 270, MIG, New Housing Unit, Serfoji college post, Thanjavur, Tamil Nadu 613005</p>
                    <FontAwesomeIcon icon={faLocationCrosshairs}className='icons3'/>
                </div>
                <div className='foot-col'>
                    <h6 className='foot-head'>Factory Address</h6> 
                   
                   <p className='foot-text'>208 & 209, Sengipatti Village, Ayyothipatti road, Thanjavur,Tamil Nadu 613402</p>
                   <FontAwesomeIcon icon={faLocationCrosshairs} className='icons'/>
                </div>
                <div className='foot-col'>
                    <h6 className='foot-head'>Menu</h6>
                    <ul className='foot-text'>
                        <li className='foot-text'><a href='/'>Home</a></li>
                        <li className='foot-text'><a href='#about'>About us</a></li>
                        <li className='foot-text'><a href='#service'>Our Services</a></li>
                        <li className='foot-text'><Link to='/process'>Process</Link></li>
                        <li className='foot-text'><Link to='/legal'>Legal</Link></li>
                        <li className='foot-text'><a href='#clients'>Client</a></li>
                        <li className='foot-text'><Link to='/gallery'>Gallery</Link></li>
                        <li className='foot-text'><a href='#contact'>Contact us</a></li>
                    </ul>

                </div>
                <div className='foot-col'>
                    <h6 className='foot-head'>Support</h6>
                    <ul className='foot-text'>
                        <li className='foot-text'><FontAwesomeIcon className='icons1' icon={faPhone}/>+91 96002 88998</li>
                        <li className='foot-text'><FontAwesomeIcon className='icons1' icon={faEnvelope}/> medicare@gmail.com</li>
                    </ul>
                </div>
            </div>
                <hr className='footer-line'/>
                <p className='created-text'><FontAwesomeIcon icon={faCopyright}/>2020 YM Automation Private Limited. All Rights Reserved.</p>
        </div>
    )
}
