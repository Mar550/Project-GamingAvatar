import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {navlinks} from '../utils/constant';
import { useAppContext } from '../context/app_context';

import imga from '../assets/imga.png'
import {GiHamburgerMenu} from "react-icons/gi"


const Navbar = () => {
    const {OpenSidebar}= useAppContext();
    return (
        <Wrapper class="navbar">            
            <div className="logo">
                <img class="imglogo" src={imga}/>
            </div>
            
            <div>
                <ul className="Links">
                    {
                        navlinks.map((item) => {
                            return (<li class="txtlinks" key={item.id}>
                                <Link to={item.url}>
                                    {item.text}
                                </Link>
                            </li>);
                        })
                    }
                <div classname="burger" >
                <button className="burgermenu" onClick={OpenSidebar}>
                    <GiHamburgerMenu />
                </button>
            </div>
                </ul>
                
            </div>
            <div className ="navsecond">  
                    <div>
                        <button className="burgermenu" onClick={OpenSidebar}>
                        <GiHamburgerMenu />
                        </button>
                    </div>
            </div>            
        </Wrapper> 
    )
}

const Wrapper = styled.header`

display: flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:100%;
height:140px;
border: 1px solid black;
background: linear-gradient(#7F00FF,black);


ul{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    flex-gap: 30px;
    width:110%;
    list-style-type: none;
    text-decoration: none;  
}

li{
    color: #0060B6;
    text-decoration: none;
    margin-left: 30px;
}
.logo {
    width: 100px;
    heigth: 100px;
    margin-left: -40px;
}

.imglogo{
    width: 90%;
    height: 90%;
}

a {
    color: white;
    text-decoration: none;
    font-weight:bold;
    font-weight:bold;
    font-size:24px;
    gap: 10px;
}

a:hover {
    color: white; 
    text-decoration:none; 
    cursor:pointer;  
    font-weight:bold;
    font-size:28px;
    text-shadow: 1px 1px 2px grey;
}

.burgermenu{
    border-radius:50%;
    font-size: 30px;
    border: 1px solid black;
    margin-left:200px;
}




@media only screen and (max-width: 768px) {
    display:none;
    .burgermenu{
        display:block;
    }

}
    

@media only screen and (min-width: 769px) and (max-width: 991px) {
    display:none;
    .burgermenu{
        display:block;
        text-align: right;

    }
}

@media only screen and ( min-width: 992px) {

    .burgermenu{
        display:none;
    }
}



`


export default Navbar;