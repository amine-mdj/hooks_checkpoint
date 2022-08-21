import React from 'react'
import {useLocation} from 'react-router-dom'

const Description = ()=>{
    const location = useLocation();
    return(
        <div>
        <iframe width="420" height="315"
       src={location.state.trailer}>
       </iframe>
        <h1>{location.state.descreption}</h1>
        </div>)
}

export default Description