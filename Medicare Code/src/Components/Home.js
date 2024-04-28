import React from 'react'
import "./Home.css"
import Menu from './Menu'

export default function Home() {
    return (
        <div className="container">
            <div className='overlay'>
            <Menu/>
            <h1 className='title'>Medicare <br/>Enviro Systems </h1>
            <p className='content'>Safeguarding public health and the environment through efficient and compliant disposal of biological waste. </p></div>
        </div>

    )
}
