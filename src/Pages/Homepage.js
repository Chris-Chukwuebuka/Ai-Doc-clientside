import React from 'react'
import HeroSection from "../Component/HomeComponents/HeroSection"
import AboutSection from '../Component/HomeComponents/AboutSection'
import FeatureSection from "../Component/HomeComponents/FeatureSection"
import WhyChooseUs from '../Component/HomeComponents/WhyChooseUs'
import ContactUs from '../Component/HomeComponents/ContactUs'
const Homepage = () => {
  console.log("Rendering Homepage");
  return (
    <div className=''>
        {console.log("Rendering HeroSection")}
        <HeroSection/>
        {console.log("Rendering AboutSection")}
        <AboutSection/>
        {console.log("Rendering FeatureSection")}
        <FeatureSection/>
        {console.log("Rendering WhyChooseUs")}
        <WhyChooseUs/>
        {console.log("Rendering ContactUs")}
        <ContactUs/>
    </div>
  )
}

export default Homepage