import React from 'react'
import FeedbackImage from '../../Assets/feedback.png'
import ClientIcon from '../../Assets/client.png'
import '../../Styles/Home/Feedback.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Feedback() {
    return (
        <div className=' FeedbackContainer'>
            <div className="content">
                <div className="containerHeadings">
                    <h1>Feedback</h1>
                    <h2>What Our Client’s Say about Us</h2>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <div className="client">
                    <div className="icon">
                        <img src={ClientIcon} alt="" />
                    </div>
                    <div className="details">
                        <h2>
                            Designing
                        </h2>
                        <p>Our Company Client</p>
                    </div>
                </div>
                <div className="arrows">
                    <div className="arrow"><ArrowBackIosIcon/> </div>
                    <div className="arrow"><ArrowForwardIosIcon/> </div>
                </div>
            </div>
            <div className="image">
                <img src={FeedbackImage} alt="" />
            </div>
        </div>
    )
}

export default Feedback
