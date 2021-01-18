import React,{useState, useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
// import {jobsList} from './jobs.js'
import './About.css';
import schoolsList from './schools';


const Academic = () => {
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(-1);
    const [schools, setSchools] = useState([]);

    const handleIndex = (newIndex) =>{
        if(newIndex>schools.length-1){
            return setIndex(0);
        }
        else if(newIndex<0){
            return setIndex(schools.length-1)
        }
        else{
            return setIndex(newIndex)
        }
    }

    const fetchSchools = () => {
        const newSchools = schoolsList
        setSchools(newSchools)
        setLoading(false)
    }
    useEffect(() => {
        fetchSchools()
        setIndex(0)
    }, [])

    useEffect(() => {
        const slider = setInterval(() => {
            handleIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    if (loading) {
        return (
            <section className='section loading'>
            <h1>Loading...</h1>
            </section>
            )
    }
    return (
       <section className='section'>
            <div className='title'>
                <h2>Academic Background</h2>
                <div className='underline'></div>
            </div>
            <div className='section-center'> 
                <button className="prev" onClick={() => handleIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                {schools.filter((school,schoolIndex)=>schoolIndex===index).map((school, schoolIndex) => {
                    const { id, name, degree, field, desc } = school;
                    return (
                    <article className={`academic-info`}   key={id}>
                        {/* <img src={image} alt={name} className="person-img" /> */}
                        <h3>{degree}</h3>
                        <h4>{name}</h4>
                        <p>{field}</p>
                        <div className="academic-desc">
                        <p>{desc}</p>
                        </div>
                        
                    </article>
                    );
                })}
                <button className="next" onClick={() => handleIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
       </section>
    )
}

export default Academic
