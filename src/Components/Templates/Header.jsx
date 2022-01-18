import { Button, Container } from '@mui/material'
import React from 'react'
import '../../Styles/main.scss'
import '../../Styles/Templates/Header.scss'
import Logo from '../../Assets/HeaderLogo.png'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink } from 'react-router-dom'

function Header() {
    function ToggleDarkMode(event) {
        document.body.classList.toggle('dark')
        let togglebar = document.getElementById('togglebar');
        let togglebutton = document.getElementById('togglebutton')
        if (togglebar.style.left === "1px") {
            togglebar.style.left = "26px"
            togglebutton.innerHTML = "Light Mode"
        } else {
            togglebar.style.left = "1px"
            togglebutton.innerHTML = "Dark Mode"

        }
    }
    function toggleNavbar(event) {
        let mobileNav = document.getElementById('mobileNav')
        if (mobileNav.style.left === '-250px') {
            mobileNav.style.left = "0px"
        } else {
            mobileNav.style.left = "-250px"
        }
    }
    return (
        <>
            <Container>
                <header>
                    <div className="logo">
                        <DehazeIcon className='navbarOptionBtn' id="navbarOptionBtn" onClick={toggleNavbar} />
                        <NavLink to="/">
                            <img src={Logo} alt="" />
                        </NavLink>
                    </div>
                    <nav className="desktopNav">
                        <NavLink to="/service">Services</NavLink><a href="#techstack">Tech-Stack</a><NavLink to="/about">About Us</NavLink><NavLink to="/career">Career</NavLink><NavLink to="/contact">Contac Us</NavLink>
                    </nav>
                    <div className="themeTogglebutton">
                        <Button onClick={ToggleDarkMode} id='togglebutton'>Light Mode</Button>
                        <div className="togglebutton" onClick={ToggleDarkMode}>
                            <div id="togglebar"></div>
                        </div>
                    </div>
                    <nav id="mobileNav">
                        <ClearIcon id="hideNavBar" onClick={toggleNavbar} />
                        <div className="links">
                            <NavLink to="/service">Services</NavLink><a href="#techstack">Tech-Stack</a><NavLink to="/about">About Us</NavLink><NavLink to="/career">Career</NavLink><NavLink to="/contact">Contac Us</NavLink>
                        </div>
                    </nav>
                </header>
            </Container>
        </>
    )
}

export default Header
