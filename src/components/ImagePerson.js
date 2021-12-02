import React from 'react';

import styled from 'styled-components';

import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'
import player3 from '../assets/player3.png'

const ImagePerson =  ({image,clickLeft,clickRight}) => {
    let imagePrint = "";
    if(image === 1){
        imagePrint = player1
    }
    else if(image === 2){
        imagePrint = player2
    }
    else {
        imagePrint = player3
    }
    
    return (
        <Wrapper>
     <div className="person-6">
        <button className="button-move" onClick={clickLeft}>&lt;</button>
        <div className="imageavatar">
          <img src={imagePrint} className='img-move' />
        </div>
        <button className="button-move" onClick={clickRight}>&gt;</button>
    </div>
    </Wrapper>
    )
}

const Wrapper = styled.header`

font-family: 'Electrolize', sans-serif;

.person-6{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .button-move{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    border:3px solid black;
    text-align: center;
    font-size: 25px;
    font-weight:bold;
    margin-top:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  .button-move:hover{
    backgroud-color: black;
    color:white;
  }

  .imageavatar{
    margin-top: 10%;
    border:1px solid black;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 10px 10px 10px grey;
  }

  .img-move{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }



`

export default ImagePerson;