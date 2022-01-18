import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Contactus() {
    return (
        <div className='ContactUsButton'>
            <div className="heading">
                <h1>Don't Hesitate To Contact Us Anytime</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>
            <div className="contactButton">
                <Button variant='contained'>
                    <NavLink to="/contact">Contact Us</NavLink>
                </Button>
            </div>
        </div>
    )
}

export default Contactus
