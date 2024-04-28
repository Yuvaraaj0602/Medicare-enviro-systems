import React from 'react'
import "./processes.css"
import flow from './Group 25102.png'
import Footer from "../Components/Footer"
import Menu from '../Components/Menu'
import whitearrow from "../Assets/Vector 3.png"

function Process() {
    return (
        <div>
            <div className='bg-processes'>
            <Menu/>
                <h1 className='processes-head'>Process</h1>
                <img  src={whitearrow} className='arrow-line'/>
            </div>
            
            <img className="Flow" src={flow}/>
            <Footer/>
        </div>
    )
}

export default Process