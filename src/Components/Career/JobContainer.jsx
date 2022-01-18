import React from 'react'
import JobItem from './JobItem'

import JobData from '../../Assets/Career/jobs.json'

function JobContainer() {
    return (
        <div className='JobContainer'>
            {
                JobData.map((value,index)=>{
                    return(
                        <JobItem key={index} data={value} index={index}/>
                    )
                })
            }
        </div>
    )
}

export default JobContainer
