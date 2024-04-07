import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import Header from './Header';
import Footer from './Footer';


function Layout() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/about" exact element={<About/>} />
        <Route path="/blog" exact element={<Blog />} />
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