
import React from 'react'
import MobileSlider from '../components/HomeComponents/MobileSlider';
import DesktopSlider from '../components/HomeComponents/DesktopSlider';

function MainSlider({props}) {

    const isMobileBanner = window.matchMedia('(max-width: 768px)').matches;
    if (isMobileBanner){
        return ( <MobileSlider /> );
    }else {
        return ( <DesktopSlider />);
    }
}

export default MainSlider