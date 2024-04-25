import React from 'react'
import MobileBanner from './MobileBanner';
import DesktopBanner from './DesktopBanner';

function PageBanner({props}) {

    const isMobileBanner = window.matchMedia('(max-width: 768px)').matches;
    if (isMobileBanner){
        return ( <MobileBanner banner = {props.mobile_banner} /> );
    }else {
        return ( <DesktopBanner banner = {props.desktop_banner} />);
    }
}

export default PageBanner
