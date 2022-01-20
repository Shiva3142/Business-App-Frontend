import React from 'react'
import '../../Styles/Home/Tech.scss'
import ReactIcon from '../../Assets/react.png'
import PythonIcon from '../../Assets/python.png'
import JavaScriptcon from '../../Assets/javascript.png'
import IdeaImage from '../../Assets/idea.png'

function Tech() {
    return (
        <div className='TechContainer'>
            <div className="cardContainer">

                <div className="images">
                    <div className="card card1">
                        <img src={ReactIcon} alt="" />
                    </div>
                    <div className="card card2">
                        <img src={JavaScriptcon} alt="" />

                    </div>
                    <div className="card card3">
                        <img src={PythonIcon} alt="" />

                    </div>
                </div>
            </div>
            <div className="content">
                <div className="containerHeadings">
                    <h1>Tech</h1>
                    <h2>Know Us and Our Work Ethics</h2>
                </div>
                <img src={IdeaImage} alt="" />
                <h1>Understand Your idea better, execute on point</h1>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
    )
}

export default Tech
