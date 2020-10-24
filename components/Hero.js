import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import CTA from './CTA'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__group">
                <div>
                    <h1>New Collection Avaiable</h1>
                    <p>Feel fashion on your skin</p>
                    <CTA type="link" href="/category/women">Discover</CTA>
                </div>
            </div>

            
            <ProgressiveImage src="/images/webp/hero.webp" placeholder="/images/jpg/hero.jpg">
                {(src) => <img src={src} alt="hero_image" className="hero__image"/>}
            </ProgressiveImage>
            
        </div>
    )
}

export default Hero
