import Navbar from '@components/Navbars/DataAnalysis';

const Header = () => {
  return (
    <header className="style-8 bg-gray2">
      <Navbar />
      <div className="container">
        <div className="content section-padding">
          <div className="row align-items-center gx-0">
            <div className="col-lg-6">
              <div className="info">
                <p className="fw-bold color-main text-uppercase wow fadeInUp"> Empowering Innovation, Elevating Success </p>
                <h1 className="wow fadeInUp">Transform your business using <br /> AI &amp; DevOps</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mt-4 mt-lg-0 wow fadeIn">
                <img src="/assets/img/header/3d_vector_head8.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header