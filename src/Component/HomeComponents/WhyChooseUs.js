import React from 'react'

import "../../Styles/whychooseus.css"

const WhyChooseUs = () => {
  return (
    <div>
        {/* <!-- why section starts here --> */}
      <section className="container why-section">
        <h1 className="why-intro">Why Choose AI_DOC?</h1>
        <div className="row">
          <div className="col mb-4">
            <div className="card why-card first">
              <div className="card-body">
                <h3 className="card-title why-card-title">Instant Guidance</h3>
                <p className="card-text why-card-text">
                  Receive clear and concise responses tailored to your symptoms,
                  guiding you on whether to seek immediate medical attention,
                  schedule an appointment, or manage symptoms at home.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card why-card second">
              <div className="card-body">
                <h3 className="card-title why-card-title">
                  Confidential and Secure
                </h3>
                <p className="card-text why-card-text">
                  Your health information is encrypted and handled with the
                  utmost privacy.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card why-card third">
              <div className="card-body">
                <h3 className="card-title why-card-title">
                  Continuous Improvement
                </h3>
                <p className="card-text why-card-text">
                  We continuously update our AI model to provide you with the
                  latest and most accurate information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUs