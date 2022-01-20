import { Container } from '@mui/material'
import React from 'react'
import '../../Styles/Contact/Contact.scss'
import PartnersContainer from '../Service/PartnersContainer'
import Footer from '../Templates/Footer'
import Header from '../Templates/Header'
import ContactForm from './ContactForm'
import ContactOptions from './ContactOptions'
import { motion } from "framer-motion"

function Contact() {
    return (
        <motion.div initial={{y:"100vh"}} animate={{y:"0"}} exit={{y:"100vh"}}>

        <div className='ContactPageContainer'>
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
                            <h2>CONTACT US</h2>
                        </div>
                        <h2>HOME . CONTACT</h2>
                    </div>
                </Container>
            </div>
            <ContactOptions/>
            <ContactForm/>
            <PartnersContainer/>
            <Footer/>
        </div>
        </motion.div>
    )
}

export default Contact
