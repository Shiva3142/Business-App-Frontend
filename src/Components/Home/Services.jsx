import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import '../../Styles/Home/Sevices.scss'
import BrainImage from '../../Assets/brain.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Services() {
    return (
        <Container>
            <div className='ServicesContainer'>
                <div className="containerHeadings">
                    <h1>SERVICES</h1>
                    <h2>COUSTOM GAME DEVELOPEMENT SERVICE</h2>
                </div>
                <div className="servicesContainer">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <div className="service leftservices">
                                <h1>Critical Thinking</h1>
                                <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde quidem molestias reiciendis aspernatur nam labore ex dolorem possimus dicta ullam fugit dolor non, odio voluptatem, commodi maxime
                                </p>
                                <h3>
                                    Included with....
                                </h3>
                                <ul>
                                    <li>Brainstroming</li>
                                    <li>Modernized Perspective</li>
                                    <li>Compare A/B Testing</li>
                                    <li>Bootstrap Latest Version</li>
                                </ul>
                                <h4>More Details <ArrowForwardIcon /></h4>
                                <img src={BrainImage} alt="" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>

                                    <div className="service">
                                        <h1>DevOps & QA</h1>
                                        <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                                        <img src={BrainImage} alt="" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="service">
                                        <h1>Software Testing</h1>
                                        <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                                        <img src={BrainImage} alt="" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="service">
                                        <h1>Data Security</h1>
                                        <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                                        <img src={BrainImage} alt="" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="service">
                                        <h1>App Development</h1>
                                        <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                                        <img src={BrainImage} alt="" />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                
            </div>
        </Container>
    )
}

export default Services
