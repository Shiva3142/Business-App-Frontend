import React from 'react'
import { Button, Grid } from '@mui/material'
import '../../Styles/Home/Contact.scss'
function Contact() {
    return (
        <div className='ContactContainer' id='ContactContainer'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className='ContactHeader'>
                        <h1>We Provides Top-Quality Software Development, Graphic Design & Support Services</h1>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <div className="inputContainer"> */}
                    <div className="inputContainer">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <div className="input">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" name="fname" id="fname" placeholder='First Name' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="input">
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" name="lname" id="lname" placeholder='Last Name' />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <div className="input">
                                    <label htmlFor="phone">Phone No</label>
                                    <input type="number" name="phone" id="phone" placeholder='Phone No' />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div className="input">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder='Email' />
                                </div>
                            </Grid>
                        </Grid>
                        <div className="messageBox">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder='Message'></textarea>
                        </div>
                        <div>

                            <Button variant="contained">Start Here</Button>
                        </div>
                        {/* </div> */}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
