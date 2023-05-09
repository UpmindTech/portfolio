import footerData from '@data/DataAnalysis/footer.json';

const Footer = () => {
  return (
    <footer className="style-8 bg-gray2">
      <div className="container">
        <div className="content section-padding">
          <div className="logo-social">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="foot-logo">
                  <a href="#">
                    <img src="/assets/img/upmind-logo-black-no-bg-big.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end">
                <div className="socials">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="links-content">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="foot-info">
                  <h6 className="foot-title"> About Us </h6>
                  <p>{footerData.text}</p>
                  <ul className="mt-20">
                    <li>
                      <a href="#"> <i className="fas fa-envelope-open me-2 color-main"></i> {footerData.email}</a>
                    </li>
                    <li>
                      <a href="#"> <i className="fas fa-phone me-2 color-main"></i> {footerData.phone}</a>
                    </li>
                    <li>
                      <a href="#"> <i className="fas fa-map-marker-alt me-2 color-main"></i> {footerData.address}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="links">
                  <h6 className="foot-title"> What We Do </h6>
                  <ul>
                    {
                      footerData.links.map((link, i) => (
                        <li key={i}>
                          {/* <a href={link.href}>{link.text}</a> */}
                          {link.text}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot py-4 border-1 border-top brd-gray text-center">
          <p>© 2023 Copyrights by <a href="#" className="fw-bold text-decoration-underline">Upmind Tech</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer