import React, { useState } from 'react'
import "./Legal.css"
import legal1 from './Group 24969.png'
import legal2 from './Group 24970.png'
import report1 from "./report1.jpeg"
import report2 from "./report2.jpeg"
import report3 from "./report3.jpeg"
import Footer from '../Components/Footer'
import Menu from '../Components/Menu'
import whitearrow from "../Assets/Vector 3.png"
import File1 from './File 01.jpg'
import File2 from './File 02.jpg'
import File3 from './File 03.jpg'
import File4 from './File 04.jpg'
import File5 from './File 05.jpg'
import File6 from './File 06.jpg'


function Legal() {
  let data = [
    {
      id: 1,
      Src: legal1,
      
    },
    {
      id: 2,
      Src: legal2,
     
    },
    {
      id: 3,
      Src: report1,
      
    },
    {
      id: 4,
      Src: report2,
     
    },
    {
      id: 5,
      Src: report3,
      
    },
    {
      id: 6,
      Src: File1,
     
    },
    {
      id: 7,
      Src: File2,
      
    },
    {
      id: 8,
      Src: File3,
     
    },
    {
      id: 9,
      Src: File4,
     
    },
    {
      id: 10,
      Src: File5,
     
    },
    {
      id: 11,
      Src: File6,
     
    },
  

  ]
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState("");
  const getImg = (Src) => {
    setTempSrc(Src);
    setModel(true);
  }
  

  return (
    <div className='legal-container'>
      <div className='legal-header'>
      <Menu/>
      <h1 className='legal-head-text'>Legal</h1>
      <img src={whitearrow} className='legal-arrow'/>
      </div>
      
        <div className={model ? "model open" : "model"}>
          <img src={tempSrc}  className='Enlarge'/>
          <span className='legal-cut' onClick={()=>{setModel(false)}}>X</span>
        </div>
        <div className='legal-img-container'>
          {data.map((item, index) => {
            return [
              <div className='img-leg' key={index} onClick={() => { getImg(item.Src) }} >
                <img src={item.Src}  className='legal-img'/>   
              </div>
            ]       
            })}

        </div>
      <Footer/>
    </div>
  )
}

export default Legal