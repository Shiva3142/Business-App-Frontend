import { Container } from '@mui/material'
import React from 'react'
import IOTImage from '../../Assets/iot.png'

function PartnersContainer() {
    return (
        <Container>
        <div className="PartnersContainer">
            <div className="containerHeadings">
                <h1>PARTNERS</h1>
                <h2>The Best Partner who Help U To Create XYZ company</h2>
            </div>
            <div className="partnersCard">
                <div className="Partner">
                    <img src={IOTImage} alt="" />
                </div>
                <div className="Partner">
                    <img src={IOTImage} alt="" />
                </div>
                <div className="Partner">
                    <img src={IOTImage} alt="" />
                </div>
                <div className="Partner">
                    <img src={IOTImage} alt="" />
                </div>
            </div>
        </div>
    </Container>
    )
}

export default PartnersContainer
