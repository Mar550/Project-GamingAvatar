import React, {Component} from 'react';
import styled from 'styled-components';
import cyber from '../assets/cyber.png'
import gaming from '../assets/gaming.png'
import avatar2 from '../assets/avatar2.png'
import avatar6 from '../assets/avatar6.png'
import avatar12 from '../assets/avatar12.png'

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

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

            <div style={{ display: 'block', width: 300, padding: 30 }}>
            <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={avatar2}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={avatar6}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src={avatar12}
            alt="Image Three"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div> 
     
        </Wrapper>
    )
}


const Wrapper = styled.header`
display: flex;
flex-direction:column;
justify-content:space-around;
heigth: 900px;

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
    height:50px;
    color:black;
    font-weight:bold;
    font-size:33px;
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
    width:170px;
    height:35px;
    color:black;
    font-weight:bold;
    font-size:34;
    background-color:white;
}


`

export default Home;


