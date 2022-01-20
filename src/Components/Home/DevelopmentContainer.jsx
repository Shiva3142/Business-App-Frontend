import { Button, Container } from '@mui/material'
import React from 'react'
import IOTImage from '../../Assets/iot.png'
import GameImage from '../../Assets/game.png'
function DevelopmentContainer() {
    return (
        <Container>
        <div className='ServicesContainer' style={{opacity:"1"}}>
            <div className="DevelopmentContainer">
                <div className="service" style={{ background: "#FCDDE1" }}>
                    <div className="description">
                        <h2>
                            IoT Solutions
                        </h2>
                        <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                        <Button variant='outlined'>Read More</Button>
                    </div>
                    <div className="image">
                        <img src={IOTImage} alt="" />
                    </div>
                </div>
                <div className="service" style={{ background: "#CEDDFF" }}>
                    <div className="description">
                        <h2>
                            Game Development
                        </h2>
                        <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                        <Button variant='outlined'>Read More</Button>
                    </div>
                    <div className="image">
                        <img src={GameImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </Container>

    )
}

export default DevelopmentContainer
