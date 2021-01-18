import React, { useState, useEffect } from 'react';
import Chart from 'chart.js'
import functions from './functions'


// https://blogreact.com/chart-js-with-react/
// https://webdesign.tutsplus.com/tutorials/how-to-create-a-simple-line-chart-with-chartjs--cms-28129

const defaultDataInfo = {
    y:[0,0,0,0,0,0,0,0,0,0],
    t:[0,0,0,0,0,0,0,0,0,0],
    name:'default',
    type: 'line',
    deltaT:0,
}

const DashBoardItem = ({index}) => {
    const [data, setData] = useState({...defaultDataInfo})
    const [loading,setLoading] = useState(true)
    const timeTick = ()=>{
        const newData = functions[index]
        setData({...data,...newData})
        setLoading(false)
        //good place to place a fetch call to obtain actual data
    }  
    useEffect(()=>{
        const timeout = setTimeout(()=>timeTick(),data.deltaT*1000)
        return ()=>{
            clearTimeout(timeout)
        }
    })

    useEffect(() => {
        if(!loading){
            const ctx = document.getElementById(data.name);
            new Chart(ctx, {
                type: data.type,
                data: {
                    labels: data.t,
                    datasets: [
                        {
                            label: `#${data.name}`,
                            data: data.y,
                            borderColor: data.type==='line'?'#8899ac':'#ffffff',
                            fill: data.type==='radar',
                            backgroundColor:'#8899ac'
                        }
                    ],
                },
            });
        }
    },[data,loading,index]);



    return <li className='items'>
        {!loading && <canvas id={data.name}/>}
    </li>
}

export default DashBoardItem
