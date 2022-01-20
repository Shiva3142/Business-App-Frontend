import { Container } from '@mui/material'
import React from 'react'
import Header from '../Templates/Header'
import Footer from '../Templates/Footer'
import '../../Styles/About/About.scss'
import SkillImage from '../../Assets/About/skill.png'
function About() {
    return (
        <div className='AboutPageContainer'>
            <div className="  AboutHeadingContainer">
                <Header />
                <Container>
                    <div className=" bubbleContainer ServiceHomeCotainer">
                        <div className="bubbles">
                            <div className="bubble bubble1"></div>
                            <div className="bubble bubble2"></div>
                            <div className="bubble bubble3"></div>
                            <div className="bubble bubble4"></div>
                        </div>
                        <div className="containerHeadings">
                            <h1>XYZ COMPANY</h1>
                            <h2>ABOUT US</h2>
                        </div>
                        <h2>HOME . ABOUT US</h2>
                    </div>
                </Container>
            </div>
            <Container>

                <div className="AboutWorkContainer">
                    <div className="containerHeadings">
                        <h1>ABOUT US</h1>
                        <h2>Know Us & Our Work Ethics</h2>
                    </div>
                    <div className="descriptionContainer">
                        <h5>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <div className="workAboutContainer">
                    <div className="work">
                        <h1>80</h1>
                        <h3>Business Partner</h3>
                    </div>
                    <div className="work">
                        <h1>132</h1>
                        <h3>Finished Project</h3>
                    </div>
                    <div className="work">
                        <h1>45</h1>
                        <h3>Happy Client</h3>
                    </div>
                    <div className="work">
                        <h1>8</h1>
                        <h3>Award Winning</h3>
                    </div>
                </div>
            </Container>
            <div className="AboutSkillsContainer">
                <div className="image">
                    <img src={SkillImage} alt="" />
                </div>
                <div className="content">
                    <div className="containerHeadings">
                        <h1>SKILLS</h1>
                        <h2>GET THE BEST ON THE INDUSTRY STANDARD</h2>
                    </div>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="skillsMeters">
                        <div className="meterdetails">
                            <div className="metername">
                                <label for="development">DEVELOPMENT</label>
                            </div>
                            <div className="metervalue">
                                <meter id="development" value="0.85">85%</meter>
                                85%
                            </div>
                        </div>
                        <div className="meterdetails">
                            <div className="metername">
                                <label for="experience">EXPERIENCE</label>
                            </div>
                            <div className="metervalue">
                                <meter id="experience" value="0.65">65%</meter>
                                65%
                            </div>
                        </div>
                        <div className="meterdetails">
                            <div className="metername">
                                <label for="engineering">ENGINEERING</label>
                            </div>
                            <div className="metervalue">
                                <meter id="engineering" value="0.73">73%</meter>
                                73%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ExpertDetailsConteiner">
                <div className="aboutGrid1">

                    <div className="containerHeadings">
                        <h1>TEAM</h1>
                        <h2>OUR EXPERT TEAM MEMBERS</h2>
                    </div>
                    <div className="TeamMember">
                        <div className="container">

                        </div>
                        <h1>Designing</h1>
                        <h6>Our Company Client</h6>
                    </div>
                    <div className="TeamMember">
                        <div className="container">

                        </div>
                        <h1>Designing</h1>
                        <h6>Our Company Client</h6>
                    </div>
                </div>
                <div className="AboutFlex1">
                    <div className="TeamMember">
                        <div className="container">

                        </div>
                        <h1>Designing</h1>
                        <h6>Our Company Client</h6>
                    </div>
                    <div className="TeamMember">
                        <div className="container">

                        </div>
                        <h1>Designing</h1>
                        <h6>Our Company Client</h6>
                    </div>
                    <div className="TeamMember">
                        <div className="container">

                        </div>
                        <h1>Designing</h1>
                        <h6>Our Company Client</h6>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
