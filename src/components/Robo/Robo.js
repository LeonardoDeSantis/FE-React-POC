import React from 'react';
import RoboInput from './RoboInput'
import RoboImg from './RoboImg'
import './Robo.scss'

const Robo = () => {
    return (
        <div className='content'>            
            <RoboInput/>
            <RoboImg/>  
        </div>
    )
}

export default Robo;