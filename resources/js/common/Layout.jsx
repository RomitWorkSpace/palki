import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import Header from './Header';
import Footer from './Footer';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Blog from '../components/pages/Blog';
import Service from '../components/pages/Service';
import ServiceDetail from '../components/pages/ServiceDetail';
import Booking from '../components/pages/Booking';


function Layout() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/services" exact element={<Service />} />
        <Route path="/service-detail" exact element={<ServiceDetail />} />
        <Route path="/share-query" exact element={<Booking />} />
        {/* <Route path="/about" exact element={<About/>} />
        <Route path="/hostel" exact element={<HostelRoom />} />
        <Route path="/room-detail" exact element={<RoomDetail />} />
        <Route path='/facilities/:slug' exact element={<Service />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/contact" exact element={<Contact />} /> */}
    </Routes>
    <Footer />
    </>
  );
}

export default Layout;