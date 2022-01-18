import { Button, Container } from '@mui/material'
import React from 'react'

import ChatIcon from '../../Assets/Contact/chat.png'
import EmailIcon from '../../Assets/Contact/email.png'
import PhoneIcon from '../../Assets/Contact/phone.png'
function ContactOptions() {
    return (
        <Container>
            <div className='ContactOptionsContainer'>
                <div className="ContactCard">
                    <img src={ChatIcon} alt="" />
                    <h2>Chat With Us</h2>
                    <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                    <a href="#chat">Chat With Us</a>
                </div>
                <div className="ContactCard">
                    <img src={EmailIcon} alt="" />
                    <h2>Chat With Us</h2>
                    <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                    <Button variant='contained'>Email Us</Button>
                </div>
                <div className="ContactCard">
                    <img src={PhoneIcon} alt="" />
                    <h2>Email us</h2>
                    <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                    <a href="#chat">97XXXXXXXX</a>
                </div>
            </div>
        </Container>
    )
}

export default ContactOptions
