import React from 'react'
import '../../Styles/Home/Career.scss'
import CareerImage from '../../Assets/career.png'
import IdeaImage from '../../Assets/idea.png'
import { Button } from '@mui/material'

function Career() {
    return (
        <div className="CareerContainer">
            <div className="containerHeadings">
                <h1>Career</h1>
                <h2>GROW WITH US</h2>
            </div>
            <div className="careerDetailsContainer">
                <div className="image">
                    <img src={CareerImage} alt="" />
                </div>
                <div className="content">
                    <img src={IdeaImage} alt="" />
                    <h1>Understand Your idea better, execute on point</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Button variant='outlined'>Apply Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Career
