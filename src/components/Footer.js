import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/app_context';
import { navlinks } from '../utils/constant';
import { Link } from 'react-router-dom';
import {FaTwitterSquare} from "react-icons/fa"
import {IoLogoYoutube} from "react-icons/io"
import {ImInstagram} from "react-icons/im"
import logo4 from '../assets/logo4.png'



const Footer = () => {
    return (
        <Wrapper>
            <h1 className="title">SHADOW GAMES</h1>
            <div className="container2">
                <img src={logo4} className="imglogo"/>
            </div>
            <div className= "container">
                <div>
                    <h3> About us</h3>
                    <p> Name</p>
                    <p> Vision </p>
                    <p> Testimonials</p>
                </div>
                <div>
                    <h3>Services</h3>
                    <p> Creation</p>
                    <p> Design</p>
                    <p> Coding</p>
                    <p> Internship </p>
                </div>
                <div>
                    <h3> Contact Us </h3>
                    <p> Munich</p>
                    <p> Madrid</p>
                    <p> Mumbai</p>
                    <p> Shanghai</p>
                </div>
                <div>
                    <h3> Follow us </h3>
                    <p> <FaTwitterSquare/> </p>
                    <p> <ImInstagram/> </p>
                    <p> <IoLogoYoutube/> </p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
background: linear-gradient(black, #7F00FF);
height: 400px;
font-family: 'Odibee Sans', cursive;

.imglogo{
    width:20%;

}

.container2{
    display:flex;
    justify-content:center;
}

.title{
    color: white;
    text-align: center;
    padding: 30px;
    font-size: 30px;
}

.container{
    display: flex;
    flex-direction: row;
    gap: 18%;
    color:white;
    justify-content:center;
    justiy-items: center;
    text-align:center;
}


@media only screen and ( max-width: 768px ) {

.container{
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.title{
    font-size: 21px;
}
h3 {
    font-size: 17px;
}
p{
    font-size: 13px;
    line-height: 4px;
}


}
@media only screen (min-width: 769px) and (max-width: 991px) {


}

@media only screen (max-width: 991px) {


}


`

export default Footer;