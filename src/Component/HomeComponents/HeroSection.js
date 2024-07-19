import React from 'react'
import '../../Styles/herosection.css'
import HeroBanner from '../../Assets/Hero Banner.png'

const HeroSection = () => {
  return (
    <div>
        <section className="container hero-section">
        <div className="row d-flex ">
          <div className="col-lg-6 hero-text">
            <h1 className="text-1">Welcome to AI_DOC:</h1>
            <h1 className="text-2">Your Intelligent Health Care Companion</h1>
            <p>
              AI_DOC is an innovative web application that harnesses the power
              of artificial intelligence to provide personalized symptom
              analysis and preliminary medical advice. Our mission is to empower
              users to make informed decisions about their health, offering
              guidance that is quick, reliable, and accessible.
            </p>
            <div class="hero-btn mt-5">
              <a href="/signup" class="hero-btn">GET STARTED</a>
            </div>
          </div>
          <div className="col-lg-6 hero-img">
            <img src= {HeroBanner} alt="" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default HeroSection