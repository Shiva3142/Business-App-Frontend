import { Button, Container } from '@mui/material'
import React from 'react'
import Header from '../Templates/Header'
import '../../Styles/Home/HomePage.scss'
import Contact from './Contact'
import Blog from './Blog'
import WorkProgress from './WorkProgress'
import Services from './Services'
import Career from './Career'
import Feedback from './Feedback'
import About from './About'
import Tech from './Tech'
import HomeImage from '../../Assets/homeImage.png'
import FacebookIcon from '../../Assets/facebook.png'
import BahanceIcon from '../../Assets/behance.png'
import LinkedinIcon from '../../Assets/linkedin.png'
import InstagramIcon from '../../Assets/instagram.png'
import Footer from '../Templates/Footer'
import DevelopmentContainer from './DevelopmentContainer'
function HomePage() {
    return (
        <>
            <div className='HomePageContainer'>
                <Header />
                <div className=" homeCotainer bubbleContainer">
                    <div className="bubbles">
                        <div className="bubble bubble1"></div>
                        <div className="bubble bubble2"></div>
                        <div className="bubble bubble3"></div>
                        <div className="bubble bubble4"></div>
                    </div>
                    <div className="content">
                        <h1>An Idea To Realtiy</h1>
                        <p>When you brianstrom on your ideas, We are there for you to bring your idea into reality from apps to platform</p>
                        <Button variant='contained'>Start Here</Button>
                        <div className="links">
                            <div className="link">
                                <img src={InstagramIcon} alt="" />
                            </div>
                            <div className="link" >
                                <img style={{ filter: "invert(1)", width: "65%" }} src={BahanceIcon} alt="" />
                            </div>
                            <div className="link">
                                <img src={FacebookIcon} style={{ width: "65%" }} alt="" />
                            </div>
                            <div className="link">
                                <img src={LinkedinIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <img src={HomeImage} alt="" />
                    </div>
                </div>
            </div>
            <Services />
                <DevelopmentContainer/>
            <WorkProgress />
            <Tech />
            <About />
            <Career />
            <Feedback />
            <Contact />
            <Container>
                <Blog />
            </Container>
            <Footer />
        </>

    )
}

export default HomePage
