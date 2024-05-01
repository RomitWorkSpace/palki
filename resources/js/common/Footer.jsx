import React from 'react'
import Logo from 'imgPath/PalkiLogo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

  <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-12 footer-info">
          <Link to="index.html" className="logo d-flex align-items-center">
            <img src={Logo} alt="tecroost" height="180" />
          </Link>
          <p className='clr-black text-justify'>Palki Food Services is providing Catering services to employees on daily basis in different industries.</p>
          <div className="social-links d-flex mt-4">
            <Link to="#" className="twitter"><i className="bi bi-twitter clr-palki"></i></Link>
            <Link to="https://www.facebook.com/pg/PalkiFoodServices/posts/" className="facebook"><i className="bi bi-facebook clr-palki"></i></Link>
            <Link to="#" className="instagram"><i className="bi bi-instagram clr-palki"></i></Link>
            <Link to="https://www.linkedin.com/company/palki-foods-india-pvt-ltd-/?originalSubdomain=in" className="linkedin"><i className="bi bi-linkedin clr-palki"></i></Link>
          </div>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4 className="footer-title">Useful Links</h4>
          <ul className='footer-link'>
            <li><Link to="">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="col-lg-3 col-6 footer-links">
          <h4 className="footer-title">Our Services</h4>
          <ul className='footer-link'>
            <li><Link to="/service/industrial-cafeteria-meals">Industrial Cafeteria</Link></li>
            <li><Link to="/service/corporate-cafeteria-meals">Social Event Catering</Link></li>
            <li><Link to="/service/bulk-bakery-supplies">Bulk Bakery Supplies</Link></li>
            <li><Link to="/service/corporate-supplies">Corporate Supplies</Link></li>
            
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4 className="footer-title">Contact Us</h4>
          <p className='clr-black'>
          Plot no. 228 Udhyog Kendra 1st Ecotech 3, Extension, Noida <br/><br/>
            <strong>Phone:</strong> + 91-8860619770 / 71<br/>
            <strong>Email:</strong> info@palkifoods.co.in<br/>
          </p>

        </div>

      </div>
    </div>

    <div className="container-fluid bg-palki footer-copyright p-3">
      <div className="copyright clr-white">
        &copy; Copyright <strong><span className=''>Palki Foods</span></strong>. All Rights Reserved
      </div>
      <div className="credits clr-white">

        Designed by <Link to="https://livetechservices.in" className="">LTS</Link>
      </div>
    </div>

  </footer>
        </>
    )
}

export default Footer