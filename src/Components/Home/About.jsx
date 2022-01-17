import React from 'react'
import '../../Styles/Home/About.scss'
import AboutImage from '../../Assets/about.png'
import IdeaImage from '../../Assets/idea.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function About() {
    return (
        <div className='AboutContainer'>
            <div className="containerHeadings">
                <h1>About Us</h1>
                <h2>Know Us & Our Work Ethics</h2>
            </div>
            <div className="aboutDetail">
                <div className="content">
                    <img src={IdeaImage} alt="" />
                    <h1>Understand Your idea better, execute on point</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div>
                        <span>

                            Know More About Us
                        </span>
                        <ArrowForwardIcon />
                    </div>
                </div>
                <div className="image">
                    <img src={AboutImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
