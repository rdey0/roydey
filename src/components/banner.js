import React from 'react'
import background_image from '../images/BLACK_II_LARGE.jpg'
import { ParallaxBanner } from 'react-scroll-parallax';
export default function Banner(props){
    return(
        <div id='home-container' className='parallax'>
            <ParallaxBanner
                className='home-image'
                layers={[
                    {
                        image: background_image,
                        amount: 0.7
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='home-content'>
                    <h1 className='home-title'>Hi, I'm Roy Dey</h1>
                    <div className='descriptors'>Full Stack Developer / Designer / Other Horseshit</div>
                </div>
                
            </ParallaxBanner>
        </div>
    )
}