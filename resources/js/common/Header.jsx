import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'imgPath/PalkiLogo.png'


const Header = () => {
  const [dropdownData, setDropdownData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://palki.com/api/services');
        const data = await response.json();
        setDropdownData(data.services);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    const fetchRoomData = async () => {
      try {
        const response = await fetch('https://palki.com/api/rooms');
        const data = await response.json();
        setRoomData(data.rooms);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchRoomData();
  }, []);


  const toggleDropdown = (e, index) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleServiceDropdown = () =>{
      setDropdown1Visible(!dropdown1Visible);
  }

  const toggleRoomDropdown = () =>{
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
  }


  return (
    <>
    <header className='header_area'>
    <div id="header" className={'header d-flex align-items-center fixed-top wrapper-bg'}>
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/" className="logo d-flex align-items-center">
        
        <img src={ Logo } alt="Raghuma Logo" />
      </Link>
      <div className="" style={{zIndex:'9999'}} onClick={() => handleNav()}>
      <i className={ clicked ? "mobile-nav-toggle mobile-nav-show bi bi-x" : "mobile-nav-toggle mobile-nav-show bi bi-list"}></i>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li onClick={() => handleNav()}><Link to="/" className="active">Home</Link></li>
          <li onClick={() => handleNav()}><Link to="/about">About</Link></li>
          <li className="dropdown" onClick={() => toggleRoomDropdown()}><Link to="" id="down" className={dropdown2Visible ? 'active' : 'deactive'}><span>Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul id="inner-down" className={dropdown2Visible ? 'dropdown-active' : 'dropdown-deactive'}>
                    
                        {roomData.map((room) => (
                          
                          <li><Link to={`/rooms/${room.slug}`}>{room.name}</Link></li>
                        ))}

            </ul>
          </li>

          <li className="dropdown" onClick={() => toggleServiceDropdown()}><Link to="" id="down" className={dropdown1Visible ? 'active' : 'deactive'}><span>Events</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul id="inner-down" className={dropdown1Visible ? 'dropdown-active' : 'dropdown-deactive'}>
     
                        {dropdownData.map((dropdown) => (
                          
                          <li><Link to={`/facilities/${dropdown.slug}`}>{dropdown.name}</Link></li>
                        ))}

            </ul>
          </li>

          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="" className="get-a-quote bg-palki" href="">Get Free Quote</Link></li>
        </ul>
      </nav>

    </div>
    </div>
  </header>

    </>
  );
};

export default Header;