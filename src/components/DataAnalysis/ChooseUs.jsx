import React from 'react'

const ChooseUs = () => {
  return (
    <section className="choose-us style-8 section-padding">
      <div className="container">
        <div className="row gx-0 justify-content-between">
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-8 wow fadeInUp">
                <h3> Why UpMind? </h3>
              </div>
              <div className="row">
                <div className="col-12">
                <p>We specialize in providing a wide range of cutting-edge services to help you succeed in today's fast-paced and ever-changing digital landscape. Here are a few reasons why we should be a part of your next technology venture:</p>
                <ol>
                  <li>
                    <strong>Expertise in Machine Learning:</strong> Our experienced data scientists and machine learning experts can help you gain valuable insights from your data.
                  </li>
                  
                  <li>
                    <strong>Cloud Infrastructure:</strong> We specialize in building and deploying secure and scalable cloud infrastructure on AWS/GCP/Azure.
                  </li>
                  
                  <li>
                    <strong>DevOps Solutions:</strong> Our DevOps experts can help you automate your software development and deployment processes for faster and more reliable releases.
                  </li>
                  
                  <li>
                    <strong>Secure Development:</strong> Our experienced full-stack developers specialize in building secure end-to-end solutions, from front-end user interfaces to back-end systems.
                  </li>
                  
                  <li>
                    <strong>Customer Satisfaction:</strong> We're committed to delivering high-quality solutions that exceed your expectations and tailor our services to meet your specific requirements.
                  </li>
                </ol>

                <p>We're passionate about technology and dedicated to helping you succeed.</p>
                </div>
              </div>
              <div className="d-flex align-items-center mt-40 wow fadeInUp">
                <div className="inf ms-4">
                  <p className="color-999"> Reach out to us! </p>
                  <a href="#" className="color-000 fw-bold"> hello@upmind.tech </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img mt-5 mt-lg-0 wow fadeIn">
              <img src="/assets/img/choose_us/3d_vector1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs