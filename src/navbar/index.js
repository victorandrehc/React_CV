import React, { useState, useRef, useEffect } from 'react'
import { FaBars} from 'react-icons/fa'
import {IconContext} from "react-icons";
import { Link } from 'react-router-dom';
import { links, social } from './data'
// import logo from './logo.svg'
import './Navbar.css';

const Navbar = ({currentPath, paths}) => {
  const [showLinks, setShowLinks] = useState(false)
  const [activeLinkValue, setActiveLinkValue] = useState(0);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks){
        linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
        linksContainerRef.current.style.height = '0px'
    }
  },[showLinks])

  useEffect(() => {
   const index = paths.findIndex((p)=>p===currentPath)
   setActiveLinkValue(index)
  },[paths,currentPath])

  return <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        {/* <img src={logo} alt='logo'/> */}
        <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
         {links.map((link, index)=>{
           const {id, url, text} = link
           return <li key={id} >
             <Link to={url}/*  onClick={()=>setActiveLinkValue(index)} */>{text}</Link>
             {activeLinkValue===index && <div className='underline'></div>}
           </li>
         })}
        </ul>      
      </div>
      <IconContext.Provider value={{color:'#8899ac', size:'1.5rem'}}>
        <ul className='social-icons'>
          {social.map((socialIcon)=>{
            const {id,url,icon} = socialIcon
            return <li key={id}>
                    <a href={url}>
                      {icon}
                    </a>
                    </li>
          })}
        </ul>
      </IconContext.Provider>
    </div>
  </nav>
}

export default Navbar
