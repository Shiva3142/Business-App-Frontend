import React from 'react'
import InternshipData from '../../Assets/Career/internships.json'
import JobItem from './JobItem'

function InternshipContainer() {
    return (
        <div>
            {
                InternshipData.map((value, index) => {
                    return (
                        <JobItem key={index} data={value} index={index}/>
                    )
                })
            }
        </div>
    )
}

export default InternshipContainer
