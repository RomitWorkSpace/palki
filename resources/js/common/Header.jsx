import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'imgPath/PalkiLogo.png'
import SubServiceMenu from './SubServiceMenu';


const Header = () => {

  const [dropdownData, setDropdownData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [navTrack, setNavTrack] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://filmcityinfo.com/api/services');
        const data = await response.json();
        setDropdownData(data.services);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    const fetchServiceData = async () => {
      try {
        const response = await fetch('https://filmcityinfo.com/api/services');
        const data = await response.json();
        setServiceData(data.services);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };
    setNavTrack(window.location.pathname);
    fetchServiceData();
  }, []);


  const toggleDropdown = (e, index) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleRoomDropdown = () =>{
      setDropdown1Visible(!dropdown1Visible);
  }

  const toggleServiceDropdown = () =>{
    setDropdown2Visible(!dropdown2Visible);
}

  const handleNav = () =>{
    if(!clicked){
        document.querySelector("body").classList.add("mobile-nav-active");
      }
      else{
        document.querySelector("body").classList.remove("mobile-nav-active");
      }
    setClicked(!clicked);
    setNavTrack(window.location.pathname);
  }


  return (
    <>
    <header className='header_area'>
    <div id="header" className={'header d-flex align-items-center fixed-top wrapper-bg box-shadow'}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/" className="logo d-flex align-items-center">
        
        <img src={ Logo } alt="Raghuma Logo" />
      </Link>
      <div className="" style={{zIndex:'9999'}} onClick={() => handleNav()}>
      <i className={ clicked ? "mobile-nav-toggle mobile-nav-show bi bi-x" : "mobile-nav-toggle mobile-nav-show bi bi-list"}></i>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li onClick={() => handleNav()}><Link to="/" className={(navTrack === '/') ? 'active' : ''}>Home</Link></li>
          <li onClick={() => handleNav()}><Link to="/about" className={(navTrack === '/about') ? 'active' : ''}>About</Link></li>
          <li className="dropdown" onClick={() => toggleServiceDropdown()}><Link to="#" id="down" className={dropdown2Visible ? 'active' : 'deactive'}><span>Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul id="inner-down" className={dropdown2Visible ? 'dropdown-active' : 'dropdown-deactive'}>
                    
 
                      {serviceData.map((service, index) => (
                          
                          <li className="dropdown myList" onClick={(e) => toggleDropdown(e, index)}><Link to="#" className={activeDropdown === index? 'active' : 'hidden'}><span>{ service.name }</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                              <ul className={activeDropdown === index? 'dropdown-active' : 'hidden'}>
                                  <SubServiceMenu props = {service.slug} handleNavbar = { handleNav } />
                              </ul>
                          </li>
                      ))}

            </ul>
          </li>

          {/* <li className="dropdown" onClick={() => toggleServiceDropdown()}><Link to="" id="down" className={dropdown1Visible ? 'active' : 'deactive'}><span>Events</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul id="inner-down" className={dropdown1Visible ? 'dropdown-active' : 'dropdown-deactive'}>
     
                        {dropdownData.map((dropdown) => (
                          
                          <li onClick={() => handleNav()}><Link to={`/facilities/${dropdown.slug}`}>{dropdown.name}</Link></li>
                        ))}

            </ul>
          </li> */}

          <li onClick={() => handleNav()}><Link to="/blog" className={(navTrack == '/blog') ? 'active' : ''}>Blog</Link></li>
          <li onClick={() => handleNav()}><Link to="/contact" className={(navTrack == '/contact') ? 'active' : ''}>Contact</Link></li>
          <li onClick={() => handleNav()}><Link to="/share-query" className="get-a-quote bg-palki">Get Free Quote</Link></li>
        </ul>
      </nav>

    </div>
    </div>
  </header>

    </>
  );
};

export default Header;