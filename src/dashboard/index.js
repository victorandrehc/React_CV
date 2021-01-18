import React,{useEffect} from 'react';

import DashBoardItem from './dashBoardItem'
import './Dashboard.css';
import functions from './functions'


const Dashboard = ({setPath}) => {
  useEffect(()=>{
    setPath('/')
  })
  return (
      <ul className='items'>
    {functions.map((func,index) =>{
      return <DashBoardItem key={func.name} index={index}/>
    })}
  </ul>
  )
}

export default Dashboard
