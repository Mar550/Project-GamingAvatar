import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ImagePerson from '../components/ImagePerson'
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineMinusCircle} from "react-icons/ai";
import {GiMuscleUp} from "react-icons/gi";
import {GiBodyBalance} from "react-icons/gi";
import {MdFaceRetouchingNatural} from "react-icons/md";

import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'
import player3 from '../assets/player3.png'
import axe from '../assets/axe.png'
import sword from '../assets/sword.png'
import fleau from '../assets/fleau.png'



function Person() {
    const images = [player1, player2, player3]
    const [total, setTotal] = useState(14)
    const [strength,setStrength] = useState(0);
    const [agility,setAgility] = useState(0);
    const [intel,setIntel] = useState(0);
    const [weapon,setWeapon] = useState("");
    const [loading,setLoading] = useState(false);
    const [created,setCreated] = useState("");
    const [image, setImage] = useState(1);




        // SET WEAPON
    

    
    
        // ADD AND REMOVE POINTS
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

        //CHANGE IMAGES

        const previous = () => {
            if(image <= 1){
                setImage(4)
            } else {
                setImage(image - 1);
            }
        
          }
          const next = () => {
            setImage(image + 1);
            }

        // SELECT WEAPONS
        
        

        const resetChoices = () => {
            setWeapon(weapon)
            setStrength(0)
            setAgility(0)
            setIntel(0)
            setTotal(14)
            console.log(resetChoices)
        }

    const createElement = () => {

        const person = {
            
            avatar :{
                image:image,
                strength:strength,
                agility:agility,
                intel:intel,
                weapon:weapon
            },

            name:"marouane"
        }

        setLoading(true);
        axios.post("https://project-react-266c2-default-rtdb.firebaseio.com/person.json",person)
        .then(res => {

            setLoading(false)
            setCreated("person creatd successfully")
        })
        .catch(error => {
            console.log(error)
        })
    }
            
    
    return (
        <Wrapper>
                
            <div className="avatarpoints" >
                <div>
                    <ImagePerson image={image} clickLeft={previous} clickRight={next} />
                </div>
                <div className="points">
                    <h3> Points </h3>
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
                    <img src= {axe} onClick = {() => setWeapon("Arche")}/>
                    <div className="card-body">
                        <h5 className="card-title">The Arche</h5>
                    </div>
                </div>

                <div className="card">
                    <img src= {sword} onClick = {() => setWeapon("Sword")}/>
                    <div className="card-body">
                        <h5 className="card-title">The Sword</h5>
                    </div>
                </div>

                <div className="card">
                    <img src= {fleau} onClick = {() => setWeapon("Fleau")}/>
                    <div className="card-body">
                        <h5 className="card-title">Fleau</h5>
                    </div>
                </div>
            </div>


            {
                loading ? <div><h1>data is loading...</h1></div> : null
            }


            {
                created ? <div><h1> {created} </h1></div> : null
            }


            
            <div className="buttonscontainer">
                <button className = "buttonsave" onClick= {createElement}> SAVE</button>
                <button className = "buttonreset" onClick = {resetChoices}> RESET</button>
            </div>
            
        </Wrapper>
        
    )
}

const Wrapper = styled.header`

height: 1800px;

.buttonscontainer{
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content:center;
    gap: 100px;
}

button{
    font-size: 30px;
    border-radius: 30px;
    width: 200px;  
}

.buttonsave{
    background:green;
}
.buttonreset {
    background:red;
}  

button:hover{
    cursor:pointer;
    background-color: black;
    color: white;
}

.avatarpoints {
    display:flex;
    flex-direction: column;
    justify-items:center;
    align-items:center;
}
 
.points{
    padding: 50px;
}

.btn-points{
    background: black;
    color:white;
    font-size: 35px;
    justify-content:center;

}
h3{
    font-weight: bold;
}

btn-points:hover{
    cursor:pointer;
}

.count {
    padding: 20px;
    display: flex;
    flex-direction:row;
    gap: 7px;
}
.image{
    width: 300px;
    padding:20px;
}
.counts{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-elemts:center;
    justify-content:center;
    gap: 100px;
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