import { Container, Grid } from '@mui/material'
import React from 'react'
import '../../Styles/Templates/Footer.scss'
import FacebookIcon from '../../Assets/facebook.png'
import BahanceIcon from '../../Assets/behance.png'
import LinkedinIcon from '../../Assets/linkedin.png'
import InstagramIcon from '../../Assets/instagram.png'

function Footer() {
    return (
        <footer>
            <Container>
                <Grid className='footer' container spacing={1}>
                    <Grid item xs={12} md={5} className='siteDesc'>
                        <div className="siteDesc">
                            <section>
                                <h1>
                                    About xyz company
                                </h1>
                            </section>
                            <div className="decription">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen It has survived not only five centuries .
                            </div>
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
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Grid container className='footerElement' spacing={1}>
                            <Grid item md={4}>
                                <div className='footerDetails' >
                                    <h1>SERVICES</h1>
                                    <ul>
                                        <li>TERMS OF SERVICE</li>
                                        <li>TERMS OF SERVICE</li>
                                        <li>TERMS OF SERVICE</li>
                                        <li>TERMS OF SERVICE</li>
                                        <li>TERMS OF SERVICE</li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className='footerDetails' >
                                    <h1>USEFUL LINKS</h1>
                                    <ul>
                                        <li>TERMS OF SERVICE</li>
                                        <li>TERMS OF SERVICE</li>
                                        <li>TERMS OF SERVICE</li>
                                        <li>TERMS OF SERVICE</li>
                                        <li>TERMS OF SERVICE</li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className='footerDetails' >
                                    <h1>Contact Us</h1>
                                    <ul>
                                        <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                                        <li>NO :- 97XXXXXXX</li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            <div className='footerText'>
                <span>PRIVACY POLICY</span><span>TERMS OF SERVICE</span><span>OUR POLICIES</span>
            </div>
            </Container>
        </footer>
    )
}

export default Footer
