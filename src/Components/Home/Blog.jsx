import { Grid } from '@mui/material'
import React from 'react'
import '../../Styles/Home/Blog.scss'

function Blog() {
    return (
        <div className='blogContainer'>
            <div className="containerHeadings">
                <h1>Blog</h1>
                <h2>OUR LATEST NEWS & BLOGS</h2>
            </div>
            <div className="containerDescription">
                <Grid container spacing={5}>
                    <Grid item xs={12} lg={6}>
                        <div className="smallCard">
                            <div className="image image1">
                            </div>
                            <div className="description">
                                <span>Game Dev</span>
                                <h1>What Our Client’s Say about Us</h1>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <div className="smallCard">
                            <div className="image image2">
                            </div>
                            <div className="description">
                                <span>Game Dev</span>
                                <h1>What Our Client’s Say about Us</h1>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="containerDescription">
                <Grid container spacing={5}>
                    <Grid item xs={12} lg={6}>
                        <div className="bigCard">
                            <div className="image image3">
                            </div>
                            <div className="description">
                                <span>Game Dev</span>
                                <h1>What Our Client’s Say about Us</h1>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <div className="bigCard">
                            <div className="image image4">
                            </div>
                            <div className="description">
                                <span>Game Dev</span>
                                <h1>What Our Client’s Say about Us</h1>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Blog
