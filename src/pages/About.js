import React, {Component} from 'react';
import styled from 'styled-components';
import { Navbar } from '../components';
import { useAppContext } from '../context/app_context';
import manette from '../assets/manette.png'
import {GoKeyboard} from "react-icons/go"



const About = () => {
    

    return (
        
        <Wrapper>  
    
        <div className="container">
        
            <h1 className="title"> ABOUT US
            </h1>
            <img src={manette} className="image"/>
            <p className="text"> 
            Shadow Games is one of the main gaming avatar creation agencies. We specialise 
            in creating highly advanced designs for the gaming and entertainment industries,
             we’re closely following the trends and the innovation to make the best products for you.
            We-re a culture of dreamers and does who are willing to put on the best for you.
            </p>
        </div>
        <div>
            <h1 className="title"> What we do  </h1>
        <div id="accordion">
        <div class="card">
        <div class="card-header" id="headingOne">
        <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Programming 
          <img src={GoKeyboard}/>
            </button>
        </h5>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
        We can create video games on almost any platform and with almost any technology, but we specialize in Unreal Engine 4 and all the platforms this engine supports. We’re a company that can help you with whatever your burdens are as we can cover every aspect of video game development – be it programming, art, design or QA.
        </div>
        </div>
        </div>
        <div class="card">
        <div class="card-header" id="headingTwo">
        <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Design
            </button>
        </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
        We are capable of porting your game to a platform of your choice. We have a background of bringing remasters and remakes to new platforms as well as porting from PC to consoles and the other way around.
        </div>
        </div>
        </div>
            <div class="card">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Technology
                </button>
            </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
            A constant since the beginning of Catness Game Studios is our commitment to 3D, realism, and the visual and gameplay quality of our games. That is why we specialized in Unreal Engine, which allowed us to develop high-quality products and agile performance.            </div>
            </div>
            </div>
        </div>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    background-color: black;

    .container{
        background-color: black;
        padding: 100px;
    }
    .title{
        color:white;
        text-align:center;
        font-weight:bold;
    }

    .image{
        display: block;
        margin-left: auto;
        margin-right: auto;
        opacity: 0.7;
    }

    .text{
        padding: 40px;
        color:white;
        text-align:center;
        font-size:22px;
    }
    #accordion{
        padding:70px;
    }


    .btn-link{
        color:black;
        text-decoration:none;
        font-size: 21px;
        cursor:pointer;
    }
    
    

    @media only screen and ( max-width: 768px) {
    
        img{
            margin-top:40px;
            width: 100%;
        }
        .text{
            font-size:17px;
            padding:23px;
        }
    }
`

export default About;

