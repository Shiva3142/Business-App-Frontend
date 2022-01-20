import { Container } from '@mui/material'
import React from 'react'
import Services from '../Home/Services'
import DevelopmentContainer from '../Home/DevelopmentContainer'
import Header from '../Templates/Header'
import Footer from '../Templates/Footer'
import '../../Styles/Service/Service.scss'
import GameImage from '../../Assets/game.png'
import PartnersContainer from './PartnersContainer'
import { motion } from "framer-motion"

function Service() {
    return (
        <motion.div initial={{width:"0"}} animate={{width:"auto"}} exit={{width:"0"}}>
        
        <div className='ServicePageContainer'>
            <div className="bubbleContainer HomeServiceContainer">
                <Header />
                <Container>
                    <div className="bubbleContainer ServiceHomeCotainer">
                    <div className="bubbles">
                        <div className="bubble bubble1"></div>
                        <div className="bubble bubble2"></div>
                        <div className="bubble bubble3"></div>
                        <div className="bubble bubble4"></div>
                    </div>
                        <div className="containerHeadings">
                            <h1>XYZ COMPANY</h1>
                            <h2>SERVICES</h2>
                        </div>
                        <h2>HOME . SERVICES</h2>
                    </div>
                </Container>
            </div>
            <Services />
            <Container>

                <div className="FeaturesContainer">
                    <div className="containerHeadings">
                        <h1>FEATURES</h1>
                        <h2>COUSTOM GAME DEVELOPEMENT SERVICE</h2>
                    </div>
                    <div className="featuresCardsContainer">
                        <div className="FeatureCard">
                            <img src={GameImage} alt="" />
                            <h2>IoT Solutions</h2>
                            <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                        </div>
                        <div className="FeatureCard">
                            <img src={GameImage} alt="" />
                            <h2>IoT Solutions</h2>
                            <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                        </div>
                        <div className="FeatureCard">
                            <img src={GameImage} alt="" />
                            <h2>IoT Solutions</h2>
                            <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                        </div>
                    </div>
                </div>
            </Container>
            <DevelopmentContainer />
            <PartnersContainer/>
            <Footer />
        </div>
        </motion.div>
    )
}

export default Service
