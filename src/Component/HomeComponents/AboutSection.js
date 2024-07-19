import React from 'react'
import { Element } from 'react-scroll'
import '../../Styles/aboutsection.css'

const AboutSection = () => {
  return (
    <div>
        {/* <!-- About us section starts here --> */}
        <Element name='about'>
      <section id='about' className="container-fluid about-section">
        <div>
          <h1 className="about-text">How AI_DOC Works</h1>
        </div>
        <div className="row  ">
          <div className="col-lg-4 mb-3">
            <div className="card about-card ">
              <div className="card-body ">
                <h3 className="card-no">1.</h3>
                <h3 className="card-title about-card-title">
                  Describe the Symptoms
                </h3>
                <p className="card-text about-card-text">
                  Utilize our intuitive chat-like interface to describe your
                  symptoms in plain language.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="card about-card">
              <div className="card-body">
                <h3 className="card-no">2.</h3>
                <h3 className="card-title about-card-title">AI-Powered Analysis</h3>
                <p className="card-text about-card-text">
                  Our advanced Natural Language Processing (NLP) algorithms
                  analyze your symptoms to generate preliminary medical advice.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3">
            <div className="card about-card">
              <div className="card-body">
                <h3 className="card-no">3.</h3>
                <h3 className="card-title about-card-title">Instant Guidance</h3>
                <p className="card-text about-card-text">
                  Receive clear and concise responses tailored to your symptoms,
                  guiding you on whether to seek immediate medical attention,
                  schedule an appointment, or manage symptoms at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Element>
    </div>
  )
}

export default AboutSection