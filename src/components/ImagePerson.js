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
        <img src={imagePrint} className='img-move' />
        <button className="button-move" onClick={clickRight}>&gt;</button>
    </div>
    </Wrapper>
    )
}

const Wrapper = styled.header`
.person-6{
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  .button-move{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: blue;
    border:2px solid black;
    text-align: center;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .img-move{
    width: 300px;
    height: 450px;
  }

`

export default ImagePerson;