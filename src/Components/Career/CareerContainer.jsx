import { Container } from '@mui/material'
import React, { useState } from 'react'
import InternshipContainer from './InternshipContainer'
import JobContainer from './JobContainer'

function CareerContainer() {
    let [option, updateoption] = useState(0)
    return (
        <Container>
            <div className="CareerDescriptionContainer">
                <div className="DescriptionNavigation">
                    <div className="buttonContainer">
                        <div className="buttonDiv">
                            <input type="radio" defaultChecked name="career" id="job" />
                            <label htmlFor="job" className="button" onClick={() => {
                                updateoption(0)
                            }}>Job</label>
                        </div>
                        <div className="buttonDiv">
                            <input type="radio" name="career" id="intership" />
                            <label htmlFor="intership" className="button" onClick={() => {
                                updateoption(1)
                            }}>Internship</label>
                        </div>
                    </div>
                </div>
                <div className="CarrerDetails">

                    {
                        option === 0 ? (<>
                            <JobContainer />
                        </>) : (
                            <>
                                <InternshipContainer />
                            </>
                        )
                    }
                </div>
            </div>
        </Container>
    )
}

export default CareerContainer
