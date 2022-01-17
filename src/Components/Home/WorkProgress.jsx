import { Container } from '@mui/material'
import React from 'react'
import ServiceImg from '../../Assets/research.png'
import '../../Styles/Home/WorkProgress.scss'

function WorkProgress() {
    return (
        <div className='WorkProgressContainer'>
            <Container className='Heading'>
                <h1>We Follow Our Work Process</h1>
                <p>Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow value whereas accurate e-commerce parallel quality vectors.</p>
            </Container>
            <div className="itemcontainer">
                <div className="item">
                    <img src={ServiceImg} alt="" />
                    <h2>Research</h2>
                    <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                </div>
                <div className="item">
                    <img src={ServiceImg} alt="" />
                    <h2>Designing</h2>
                    <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                </div>
                <div className="item">
                    <img src={ServiceImg} alt="" />
                    <h2>Building</h2>
                    <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                </div>
                <div className="item">
                    <img src={ServiceImg} alt="" />
                    <h2>Deliver</h2>
                    <p>When you brianstrom on your ideas, We are there for you to bring your</p>
                </div>

            </div>
        </div>
    )
}

export default WorkProgress
