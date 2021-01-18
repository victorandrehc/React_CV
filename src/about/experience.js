import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

import {jobsList} from './jobs.js'

import './About.css';


const Experience = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = () => {
    const newJobs = jobsList
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  const { companyLong, dates, duties, title } = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>Professional Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.companyShort}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{companyLong}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      {/* <button type='button' className='btn'>
        more info
      </button> */}
    </section>
  )
}

export default Experience
