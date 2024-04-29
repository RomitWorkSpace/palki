import React from 'react'
import Logo from 'imgPath/PalkiLogo.png'

function Footer() {
    return (
        <>

  <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-12 footer-info">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src={Logo} alt="tecroost" height="180" />
          </a>
          <p className='clr-black text-justify'>Palki Food Services is providing Catering services to employees on daily basis in different industries, Palki Food Services offers multitude of outsourced services for its clients across sectors and geographical areas.</p>
          <div className="social-links d-flex mt-4">
            <a href="#" className="twitter"><i className="bi bi-twitter clr-palki"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook clr-palki"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram clr-palki"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin clr-palki"></i></a>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4 className="footer-title">Useful Links</h4>
          <ul className='footer-link'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-6 footer-links">
          <h4 className="footer-title">Our Services</h4>
          <ul className='footer-link'>
            <li><a href="#">Industrial Cafeteria Meals</a></li>
            <li><a href="#">Corporate Cafeteria Meals</a></li>
            <li><a href="#">Bulk Bakery Supplies</a></li>
            <li><a href="#">Corporate Supplies</a></li>
            <li><a href="#">Event Catering</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4 className="footer-title">Contact Us</h4>
          <p className='clr-black'>
          Plot No. 6, Sector 21,
Greater Noida, Gautam Budh Nagar,
UP - 201308 <br/><br/>
            <strong>Phone:</strong> +91-8178126122<br/>
            <strong>Email:</strong> admin@palki.in<br/>
          </p>

        </div>

      </div>
    </div>

    <div className="container-fluid mt-4 bg-palki footer-copyright p-3">
      <div className="copyright clr-white">
        &copy; Copyright <strong><span className=''>Palki Foods</span></strong>. All Rights Reserved
      </div>
      <div className="credits clr-white">

        Designed by <a href="https://livetechservices.in" className="">LTS</a>
      </div>
    </div>

  </footer>
        </>
    )
}

export default Footer