import React,{useEffect} from 'react'

// import profileImage from '../assets/default-image.jpeg'
// import backgroundImage from '../assets/about_background.jpg'

import Intro from './intro'
import Experience from './experience'
import Academic from './academic'

import './About.css';


const About = ({setPath}) => {
  useEffect(()=>{
    setPath('/about')
  })
  return (
    <>
    <Intro/>
    <Experience/>
    <Academic/>
    
    </>              
  )
}

export default About
