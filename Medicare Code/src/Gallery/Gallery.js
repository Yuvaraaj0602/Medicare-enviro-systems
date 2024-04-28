import React, { useState } from 'react'
import Footer from '../Components/Footer'
import './Gallery.css'
import whitearrow from "../Assets/Vector 3.png"
import img1 from "./images/image 1.jpg"
import img2 from "./images/image 2.jpg"
import img3 from "./images/image 3.jpg"
import img4 from "./images/image 6.jpg"
import img5 from "./images/image 4.jpg"
import img6 from "./images/image 5.jpg"
import img7 from "./images/image 7.jpg"
import img8 from "./images/image 8.jpg"
import Menu from '../Components/Menu'
import img9 from "./images/IMG_0960 1.png"
import img10 from "./images/IMG_0959 1.png"
import img11 from "./images/IMG_0946 1.png"
import img12 from "./images/IMG_0954 1.png"

export default function Gallery() {
  let verimg = [{ src: img9, value: "ONLINE STOCK GAS ANALYZER" }, { src: img10, value: "EMISSION MONITORING SYSTEM" }, { src: img11, value: "AUTOCLAVE" }, { src: img12, value: "CHIMNEY" }]
  let data = [
    {
      id: 1,
      Src: img1,
      value: "ENTRANCE"
    },
    {
      id: 2,
      Src: img2,
      value: "ENTRANCE"
    },
    {
      id: 3,
      Src: img3,
      value: "MAIN SHED"
    },
    {
      id: 4,
      Src: img4,
      value: "COLLECTION VEHICLE"
    },
    {
      id: 5,
      Src: img5,
      value: "INCINERATION"
    },
    {
      id: 6,
      Src: img6,
      value: "AUTOCLAVE"
    },
    {
      id: 7,
      Src: img7,
      value: "ONLINE MONITORING & CCTV"
    },
    {
      id: 8,
      Src: img8,
      value: "GREENITIES"
    },

  ]
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState("");
  const getImg = (Src) => {
    setTempSrc(Src);
    setModel(true);
  }

  return (
    <>
      <div>
        <div className='bg-gallery'>
          <Menu />
          <h1 className='gallery-head'>GALLERY</h1>
          <img src={whitearrow} className='arrow' alt='img' />
        </div>


        <div className={model ? "model open" : "model"}>
          <img src={tempSrc} className='Enlarge' alt='img' />
          <span className='gal-cut' onClick={() => { setModel(false) }}>X</span>
        </div>

        <div className='img-container'>
          {data.map((item, index) => {
            return (
              <div className='img-gal' key={index} onClick={() => { getImg(item.Src) }} >
                <img src={item.Src} className='gal-img' alt='img' />
                <p className='gal-text'>{item.value}</p>
              </div>
            )
          })}
        </div>
        <div className='img-container'>
          {verimg.map((item, index) => {
            return (
              <div className='img-gal' key={index} onClick={() => { getImg(item.src) }} >
                <img src={item.src} className='gal-img1' alt='img'/>
                <p className='gal-text'>{item.value}</p>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}
