import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineMinusCircle} from "react-icons/ai";
import {AiFillCaretRight} from "react-icons/ai";
import {AiFillCaretLeft} from "react-icons/ai";
import {GiMuscleUp} from "react-icons/gi";
import {GiBodyBalance} from "react-icons/gi";
import {MdFaceRetouchingNatural} from "react-icons/md";

import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'
import player3 from '../assets/player3.png'
import axe from '../assets/axe.png'
import sword from '../assets/sword.png'
import fleau from '../assets/fleau.png'

const state = {
    person:{
        image:1,
        strength:0,
        agility:0,
        intelligence:0,
        weapon: null
    },
    points:14
}


const images = [player1, player2, player3]

const NextImage = () => {
    const [imageIndex, setImageIndex] = useState(0);
    if (imageIndex !== images.length) {
        setImageIndex(imageIndex +1)
    }
    else if (imageIndex === images.length){
        setImageIndex(0)
    }
}
const PrevImage = () => {
    const [imageIndex, setImageIndex] = useState(0);
    if (imageIndex !== 1) {
        setImageIndex(imageIndex - 1)
    }
    else if (imageIndex === 1){
        setImageIndex(images.length)
    }
}




function Person() {
    const [total, setTotal] = useState(14)
    const [strength,setStrength] = useState(0);
    const [agility,setAgility] = useState(0);
    const [intel,setIntel] = useState(0);

        function addStrength() {
            if (total > 0) {
                setStrength(strength+1);
                setTotal(total-1); 
            }   
        }
        function removeStrength() {
            if (strength === 0) {
                return;
            }
            else {
            setStrength(strength-1);
            setTotal(total+1)    
            }
        }

        function addAgility() {
            if (total > 0) {
                setAgility(agility+1);
                setTotal(total-1); 
            }   
        }
        function removeAgility() {
            if (agility === 0) {
                return;
            }
            else {
            setAgility(agility-1);
            setTotal(total+1)    
            }
        }

        function addIntel() {
            if (total > 0) {
                setIntel(intel+1);
                setTotal(total-1); 
            }   
        }
        function removeIntel() {
            if (intel === 0) {
                return;
            }
            else {
            setIntel(intel-1);
            setTotal(total+1)    
            }
        }


    

    return (
        <Wrapper>
            <div className="avatarpoints" >
                <div className="avatar" >
                <AiFillCaretLeft onClick={PrevImage}/>
                    <img className="image" src={player1}/>
                <AiFillCaretRight onClick={NextImage}/>
                </div>
                <div className="points">
                    <button className="btn-points"> {total} </button>
                </div>
            </div>
            <div className="counts">
            <div className="count">
                <AiOutlinePlusCircle className="btn-icon-plus" onClick={addStrength}/>
                <div className="element">
                <GiMuscleUp className="icon"/>
                <p> {strength} </p>
                </div>
                <AiOutlineMinusCircle className="btn-icon-minus" onClick={removeStrength}/>
            </div>

            <div className="count">
                <AiOutlinePlusCircle className="btn-icon-plus" onClick={addAgility}/>
                <div className="element">
                <GiBodyBalance className="icon"/>
                <p> {agility} </p>
                </div>
                <AiOutlineMinusCircle className="btn-icon-minus" onClick={removeAgility}/>
            </div>

            <div className="count">
                <AiOutlinePlusCircle className="btn-icon-plus" onClick={addIntel}/>
                <div className="element">
                <MdFaceRetouchingNatural className="icon"/>
                <p> {intel} </p>
                </div>
                <AiOutlineMinusCircle className="btn-icon-minus" onClick={removeIntel}/>
            </div>

            
            </div>

            <div className="card-deck">
                <div className="card">
                    <img src= {axe}/>
                    <div className="card-body">
                        <h5 className="card-title">The Arche</h5>
                        <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                    </div>
                </div>

                <div className="card">
                    <img src= {sword}/>
                    <div className="card-body">
                        <h5 className="card-title">The Sword</h5>
                        <p className="card-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
                    </div>
                </div>

                <div className="card">
                    <img src= {fleau}/>
                    <div className="card-body">
                        <h5 className="card-title">Fleau</h5>
                        <p className="card-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.header`

height: 1100px;


.avatarpoints {
    display:flex;
    flex-direction: row;
}

.points{
    padding: 80px;
    margin-top: 120px;
}

.btn-points{
    border-radius: 50%;
    background: black;
    color:white;
    font-size: 25px;
}

btn-points:hover{
    cursor:pointer;
}
.image{
    width: 300px;
    padding:20px;
}
.count {
    padding: 20px;
    display: flex;
    flex-direction:row;
    gap: 7px;
}

.counts{
    display: flex;
    flex-direction: row;
    gap: 40px;
}
.btn-icon-plus{
    background-color: green;
    border-radius: 50%;   
    width: 30px;
    height: 30px;
}
.btn-icon-minus{
    background-color: red;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}

.element{
    display:flex;
    flex-direction:column;
    gap:10px;
    margin-top:-24px;
    margin-left: 5px;
}



.card-deck{
    display: flex;
    flex-direction: row;
    gap: 60px;
    justify-content: center;
  }

  .card-title{
    text-align:center;
  }
  
  .card-deck{
    padding:30px;
  }

  .card{
    box-shadow: 10px 10px 10px ;
    width: 250px;
  }

  .card-footer{
    background-color:#C3C3C3;
  }
  
  

  .card-text{
      padding: 2px;
      text-align:center;
      font-size: 14px;
  }

`


export default Person;