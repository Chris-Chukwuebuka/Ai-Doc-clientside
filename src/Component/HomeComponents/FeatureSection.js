import React from 'react'
import "../../Styles/featuresection.css"
import Arrow from "../../Assets/arrow vector.png"
import Symptons from "../../Assets/symptons.png"
import Support from "../../Assets/support.png"
import Friendly from "../../Assets/friendly.png"
import Content from "../../Assets/contents.png"

const FeatureSection = () => {
  return (
    <div>
              <section class="container feature-section">
        <div className="row">
          <div className="col">
            <h1 className="feature-intro">Key Features</h1>
            <img src={Arrow} alt="" class="feature-img" />
          </div>
          <div className="col">
            <div className="feature-card">
              <div className="line"></div>
              <img src= {Symptons} alt="" class="feature-img" />
              <h3 class="feature-title">Smart Symptoms Analysis</h3>
              <p class="feature-para">
                Our AI understands your symptoms and provides accurate and
                personalized responses.
              </p>
            </div>
            <div class="feature-card">
              <div class="line"></div>
              <img src={Support} alt="" class="feature-img" />
              <h3 class="feature-title">Decision Support</h3>
              <p class="feature-para">
                Receive guidance on the urgency of seeking in-person medical
                care based on the severity of your symptoms.
              </p>
            </div>
            <div class="feature-card">
              <div class="line"></div>
              <img src={Friendly} alt="" class="feature-img" />
              <h3 class="feature-title">User Friendly Interface</h3>
              <p class="feature-para">
                Easily navigate through the system with a chatbot interface
                designed for simplicity and convenience.
              </p>
            </div>
            <div class="feature-card">
              <div class="line"></div>
              <img src= {Content} alt="" class="feature-img" />
              <h3 class="feature-title">Innovative Contents</h3>
              <p class="feature-para">
                Access a wealth of medical information to better understand
                common conditions, treatments, and preventive measures.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default FeatureSection