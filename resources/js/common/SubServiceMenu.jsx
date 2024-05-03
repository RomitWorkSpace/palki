import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function SubServiceMenu({ props }){
    const [submenu, setSubMenu] = useState([]);
    
    useEffect(() => {

        axios.get(`https://filmcityinfo.com/api/subservices/${props}`).then(res=>{
            if(res.status === 200)
            {
                setSubMenu(res.data.subservices)
                // setLoading(false);
            }
        });

    }, []);

    const handleSebMenu = () =>{
        document.querySelector("body").classList.remove("mobile-nav-active");
    }

    var subserviceMenu = "";

    subserviceMenu = submenu.map( (item, index) => {
        return (
            <>
                  <li onClick={() => handleSebMenu()}><Link to={ `/service/${item.slug}` }>{item.title}</Link></li>
            </>
        )
    })

    return(
        <>
            { subserviceMenu }
        </>
    );

}

export default SubServiceMenu;