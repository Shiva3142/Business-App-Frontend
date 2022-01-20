import { Button, Container } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../Templates/Header'
import '../../Styles/Home/HomePage.scss'
import Contact from './Contact'
import Blog from './Blog'
import WorkProgress from './WorkProgress'
import Services from './Services'
import Career from './Career'
import Feedback from './Feedback'
import About from './About'
import Tech from './Tech'
import HomeImage from '../../Assets/homeImage.png'
import FacebookIcon from '../../Assets/facebook.png'
import BahanceIcon from '../../Assets/behance.png'
import LinkedinIcon from '../../Assets/linkedin.png'
import InstagramIcon from '../../Assets/instagram.png'
import Footer from '../Templates/Footer'
import DevelopmentContainer from './DevelopmentContainer'
function HomePage() {
    let done1 = 0;
    let done2 = 0;
    let done3 = 0;
    let done4 = 0;
    let done5 = 0;
    let done6 = 0;
    let done7 = 0;
    let done8 = 0;
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.innerWidth>899) {
            let innerHeight = window.innerHeight;
            let ServicesContainer = document.getElementById('ServicesContainer');
            let ServicesContainercurrentPositon = ServicesContainer.getBoundingClientRect().top;
            // console.log(innerHeight - ServicesContainercurrentPositon);
            if (ServicesContainer) {
                if ((innerHeight - ServicesContainercurrentPositon) < 500 && (innerHeight - ServicesContainercurrentPositon) > -800 && done1 === 0) {
                    // window.alert("please animate it");
                    ServicesContainer.style.opacity="1"
                    done1++
                }
            }

            let WorkProgressContainer = document.getElementsByClassName('WorkProgressContainer')[0];
            if (WorkProgressContainer) {
                let WorkProgressContainercurrentPositon = WorkProgressContainer.getBoundingClientRect().top;
                if ((innerHeight - WorkProgressContainercurrentPositon) < -500 && (innerHeight - WorkProgressContainercurrentPositon) > -1000 && done2 === 0) {
                    // window.alert("please animate it");
                    done2 = 1
                    WorkProgressContainer.classList.add('scaletohigh')
                }
            }


            let TechContainer = document.getElementsByClassName('TechContainer')[0];
            if (TechContainer) {
                let TechContainercurrentPositon = TechContainer.getBoundingClientRect().top;
                if ((innerHeight - TechContainercurrentPositon) < -500 && (innerHeight - TechContainercurrentPositon) > -1000 && done3 === 0) {
                    document.getElementsByClassName('card1')[0].classList.add('leftzero')
                    document.getElementsByClassName('card2')[0].classList.add('rightzero')
                    document.getElementsByClassName('card3')[0].classList.add('leftzero')
                    // window.alert("please animate it");
                    done3 = 1
                }
            }
            let AboutContainer = document.getElementsByClassName('AboutContainer')[0];
            if (AboutContainer) {

                let AboutContainercurrentPositon = AboutContainer.getBoundingClientRect().top;
                if ((innerHeight - AboutContainercurrentPositon) < -500 && (innerHeight - AboutContainercurrentPositon) > -1000 && done4 === 0) {
                    document.getElementsByClassName('aboutDetailcontent')[0].classList.add('leftzero')
                    document.getElementsByClassName('aboutDetailimage')[0].classList.add('rightzero')
                    // window.alert("please animate it");
                    done4 = 1
                }
            }

            let CareerContainer = document.getElementsByClassName('CareerContainer')[0];
            if (CareerContainer) {

                let CareerContainercurrentPositon = CareerContainer.getBoundingClientRect().top;
                if ((innerHeight - CareerContainercurrentPositon) < -500 && (innerHeight - CareerContainercurrentPositon) > -1000 && done5 === 0) {
                    CareerContainer.classList.add('opacityhigh')
                    // window.alert("please animate it");
                    done5 = 1
                }
            }

            let FeedbackContainer = document.getElementsByClassName('FeedbackContainer')[0];
            if (FeedbackContainer) {
                let FeedbackContainercurrentPositon = FeedbackContainer.getBoundingClientRect().top;
                if ((innerHeight - FeedbackContainercurrentPositon) < -500 && (innerHeight - FeedbackContainercurrentPositon) > -1000 && done6 === 0) {
                    FeedbackContainer.classList.add('rightzero')
                    // window.alert("please animate it");
                    done6 = 1
                }
            }
            let ContactContainer = document.getElementById('ContactContainer');
            if (ContactContainer) {

                let ContactContainercurrentPositon = ContactContainer.getBoundingClientRect().top;
                if ((innerHeight - ContactContainercurrentPositon) < -500 && (innerHeight - ContactContainercurrentPositon) > -1000 && done7 === 0) {
                    ContactContainer.classList.add('scaletohigh')
                    // window.alert("please animate it");
                    done7 = 1
                }
            }
            let blogContainer = document.getElementsByClassName('blogContainer')[0];
            if (blogContainer) {
                let blogContainercurrentPositon = blogContainer.getBoundingClientRect().top;
                if ((innerHeight - blogContainercurrentPositon) < -500 && (innerHeight - blogContainercurrentPositon) > -1000 && done8 === 0) {
                    blogContainer.classList.add('leftzero')
                    // window.alert("please animate it");
                    done8 = 1
                }
            }
        }
        })

    }, [])

    return (
        <><div id="HomePageContainer">

            <div className='HomePageContainer'>
                <Header />
                <div className=" homeCotainer bubbleContainer">
                    <div className="bubbles">
                        <div className="bubble bubble1"></div>
                        <div className="bubble bubble2"></div>
                        <div className="bubble bubble3"></div>
                        <div className="bubble bubble4"></div>
                    </div>
                    <div className="content">
                        <h1>An Idea To Realtiy</h1>
                        <p>When you brianstrom on your ideas, We are there for you to bring your idea into reality from apps to platform</p>
                        <Button variant='contained'>Start Here</Button>
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
                    <div className="image">
                        <img src={HomeImage} alt="" />
                    </div>
                </div>
            </div>
            <Services />
            <DevelopmentContainer />
            <WorkProgress />
            <Tech />
            <About />
            <Career />
            <Feedback />
            <Contact />
            <Container>
                <Blog />
            </Container>
            <Footer />
        </div>
        </>

    )
}

export default HomePage
