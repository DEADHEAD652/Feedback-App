import{FaQuestion} from 'react-icons/fa'
import React from 'react'
import {Link, link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to="/about">
        <FaQuestion size={30} />  
        </Link>
    
    </div>
  )
}

export default AboutIconLink
