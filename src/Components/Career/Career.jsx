import { Container } from '@mui/material'
import React from 'react'
import '../../Styles/Career/Career.scss'
import PartnersContainer from '../Service/PartnersContainer'
import Footer from '../Templates/Footer'
import Header from '../Templates/Header'
import CareerContainer from './CareerContainer'
import Contactus from './Contactus'
import { motion } from "framer-motion"

function Career() {
    return (
        <motion.div initial={{x:"100vw"}} animate={{x:"0"}} exit={{x:"100vw"}}>

        <div className='CareerPageContainer'>
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
                            <h2>CAREER</h2>
                        </div>
                        <h2>HOME . CAREER</h2>
                    </div>
                </Container>
            </div>
            <CareerContainer />
            <Contactus />
            <PartnersContainer />
            <Footer />
        </div>
        </motion.div>

    )
}

export default Career
