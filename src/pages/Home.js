import React, {Component} from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/app_context';
import {GiHamburgerMenu} from "react-icons/gi"
import cyber from '../assets/cyber.png'
import gaming from '../assets/gaming.png'
import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'
import player3 from '../assets/player3.png'
import axe from '../assets/axe.png'
import sword from '../assets/sword.png'
import fleau from '../assets/fleau.png'


import 'bootstrap/dist/css/bootstrap.css';
import {GiBroadsword} from "react-icons/gi";
import {GiHeavyArrow} from "react-icons/gi";
import {GiFireAxe} from "react-icons/gi";

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Home = () => {

  const {OpenSidebar}= useAppContext();

    return (
        <Wrapper> 
             
            <div className="homepage" >
            <div className="burgermenu">
                    <button className="open-btn" type="button" onClick={OpenSidebar}>
                          <GiHamburgerMenu />
                    </button>
            </div>
                <div className="hometext"> 
            <h1 className="title"> Check out our new avatars </h1>
            <h2> We just released new characters with special designs and features, be among the first to get them now !</h2>
            <button className="btn"> Discover</button>
                </div>
            </div>

            <div className="divplayers">
            <h3> Our new custom players </h3>
            <hr className="line"></hr>
          </div>

          <Carousel className="carrousel">
              <div className="divimg">
                  <img class="imageavatar" src={player1} />
              </div>
              <div className="divimg">
                <img class="imageavatar" src={player2}/>
              </div>
              <div className="divimg">
                <img class="imageavatar" src={player3} />
              </div>
            </Carousel> 
          


          <div class="card-deck">
  <div class="card">
          <img src= {axe}/>
    <div class="card-body">
      <h5 class="card-title">The Arche</h5>
      <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
  <div class="card">
      <img src= {sword}/>
    <div class="card-body">
      <h5 class="card-title">The Sword</h5>
      <p class="card-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>

  </div>
  <div class="card">
    <img src= {fleau}/>
    <div class="card-body">
      <h5 class="card-title">Fleau</h5>
      <p class="card-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>

  </div>
</div>
          <div class="joinus">
            <h2> Join us and get some tips !</h2>
            <div class="email">
            <p>  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <input class="mail" type="text" value="Enter your e-mail"  />
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

ul{
  text-align:center;
}

.divimg  {
  width: 800px;
  height: 1000px;
  display:flex;
  margin-top: -160px;
  margin-left:22%;
}
.divimg imageavatar{
  width: 100%;
  height: auto;
  margin-left:50%;
}

.open-btn{
  float:right;
  padding: 10px;
  margin-right: 30px;
  margin-top: 20px;
  border-radius: 80%;
  font-size:30px;
}

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
    box-shadow: 5px 5px 5px grey;

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
  margin-toP: 20px; 
  padding: 20px;
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

img{
  width:60%;
  margin-left:auto;
  margin-right:auto;
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

.icones{
  margin-left:45%;
  backgroud-color:grey;
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
  
}

h3{
  color: white;
  font-size: 32px;
  font-weight: bold;

}

.card{
  box-shadow: 10px 10px 10px grey;

.card-footer{
  background-color:#C3C3C3;
}

.card-deck{
  background-color:#C3C3C3;
}

.carrousel{
  width: 200px;
  height: 200px;
  size:auto;
}

image{
  width:200px;
  height:200px;
  size: 40px;
}

ul.thumbs.animated{
  text-align:center;
}

.carousel .slider{
  width: 500px;
}

@media only screen and ( max-width: 768px ) {
  .open-btn{
    display:block;
  }

  .card.title{
    font-size:22px;
  }

  .card-text{
    font-size:16px;
  }

  .card-deck{
    display:flex;
    flex-direction:row;
  }

  input { 
    width: 100%; 
    padding: .5em 1em;
   }


  .iaWEyC .mail {
    width:100px;
}

@media only screen and ( min-width: 769px ) and ( max-width: 991px ) {

  .burgermenu{
    margin-left:33%;
  }
}

@media only screen and ( min-width: 992px ) {
  
  button open-btn{
    display:none !important;
  }
 

}

`

export default Home;


