import React from 'react'
import profileImage from '../assets/profile_picv2.png'
const Intro = () => {
    return (
    <>
        <div className='intro'> 
        <div className='topBar'>      
            <section class="avatar">
            <img src={profileImage} alt="profile pic"/>
            </section>
        </div>
        <div className='description'>
            <p> 
            I'm a engineer who is enthusiastic about designing and implementing challenging projects.  
            Currently I am a member of the software engineering team at the update from SOAR telescope adaptive optics module. A MIMO control system to astronomical instrumentation.
            </p>
            <p>
            Keywords: Control, Automation, Embedded Systems, Systems Engineering, IoT, Industry 4.0.
            </p>
        </div>
        </div>
    </>
    )
}

export default Intro
