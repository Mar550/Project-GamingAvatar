import React, {Component} from 'react';
import styled from 'styled-components';
import cyber from '../assets/cyber.png'
import gaming from '../assets/gaming.png'
import avatar2 from '../assets/avatar2.png'
import avatar6 from '../assets/avatar6.png'
import avatar12 from '../assets/avatar12.png'

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import {GiBroadsword} from "react-icons/gi";
import {GiHeavyArrow} from "react-icons/gi";
import {GiFireAxe} from "react-icons/gi";

const Home = () => {

    return (
        <Wrapper>  
            <div class="homepage" >
                <div class="hometext"> 
            <h1 class="title"> Check out our new avatars </h1>
            <h2> We just released new characters with special designs and features, be among the firsts to get them now !</h2>
            <button class="btn"> Discover</button>
                </div>
            </div>

            <div class="divplayers">
            <h3> Our new custom players </h3>
            <hr class="line"></hr>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={avatar2}
            alt="Image One"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={avatar6}
            alt="Image Two"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={avatar12}
            alt="Image Three"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
          </div> 
          


          <div class="card-deck">
  <div class="card">
      <GiFireAxe class="icones" size="40px"/>
    <div class="card-body">
      <h5 class="card-title">The Arche</h5>
      <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"></small>
    </div>
  </div>
  <div class="card">
      <GiBroadsword class="icones" size="40px"/>
    <div class="card-body">
      <h5 class="card-title">The Sword</h5>
      <p class="card-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div class="card-footer">
      <small class="text-muted"></small>
    </div>
  </div>
  <div class="card">
    <GiHeavyArrow class="icones" size="40px"/>
    <div class="card-body">
      <h5 class="card-title">Fleau</h5>
      <p class="card-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div class="card-footer">
      <small class="text-muted"></small>
    </div>
  </div>
</div>
          <div class="joinus">
            <h2> JOIN US AND GET SOME TIPS</h2>
            <div class="email">
            <p>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <input class="mail" type="text" value="Enter e-mail" />
            </div>
          </div>
     
        </Wrapper>
    )
}


const Wrapper = styled.header`
display: flex;
flex-direction:column;
justify-content:space-around;
heigth: 900px;
background-color: black;

h1{
    font-size: 50px;
}

h2{
    font-size: 30px;
    font-weigt: normal;
    margin-right: 30%;
}

.btn {
    width:200px;
    height:60px;
    color:black;
    font-weight:bold;
    font-size:32px;
    background-color:white;
}

.homepage{
    color: white;
    background-image: url(https://www.zupimages.net/up/21/47/onzc.png);
    backgroundPosition: center;
    backgroundSize: cover;
    backgroundRepeat: no-repeat;
    width: 100%;
    height: 800px;
}

.hometext{
    padding: 70px;
}

.btn:hover{
    width:250px;
    height:80px;
    color:white;
    font-weight:bold;
    font-size:38px;
    font-weight:bold;
    background-color:black;
}

.divplayers{
  display: flex;
  flex-direction:column;
  margin-left: 35%;
  padding: 30px;
  width: 400px;
  background-color: black;
}

.line{
  width: 300px;
  height: 5px;
}

.card-deck{
  display: flex;
  flex-direction: row;
  gap: 70px;
}

.joinus{
  padding: 80px;
  height: 400px;
  blackground-color:#faf3e8;
  z-index: 100px;
  Color: white;
  margin-right: 50px;
}

h2{
  margin-top: 40px;
  margin-bottom: 40px;
}

.email{
  display:flex;
  flex-direction: row;
}

.icones{
  margin-left:45%;
}

.card-title{
  text-align:center;
}

.card-deck{
  padding:30px;
}

.mail{
  width:400px;
  height:40px;
  margin-right: 100px;
}

h3{
  color: white;
}
`

export default Home;


