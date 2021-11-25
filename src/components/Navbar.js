import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {navlinks} from '../utils/constant';
import { useAppContext } from '../context/app_context';

import imga from '../assets/imga.png'
import {GiHamburgerMenu} from "react-icons/gi"


const Navbar = () => {
    return (
        <Wrapper>
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

                </ul>
            </div>
            <div >
                <button className="burgermenu">
                    <GiHamburgerMenu/>
                </button>
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
}
.logo {
    width: 100px;
    heigth: 100px;
}

.imglogo{
    width: 90%;
    height: 90%;
}

a {
    color: black;
    text-decoration: none;
    font-weight:bold;
    font-weight:bold;
    font-size:19px;
}

a:hover {
    color: grey; 
    text-decoration:none; 
    cursor:pointer;  
    font-weight:bold;
    font-size:21px;
}

.burgermenu{
    border-radius:50%;
    font-size: 28px;
    border: 1px solid black;
}

`


export default Navbar;