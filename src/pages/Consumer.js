import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';


function Consumer () {
    const [data,setData] = useState([])
    useEffect(() => {
        
        axios.get('https://project-react-266c2-default-rtdb.firebaseio.com/person.json').then(resp => {

            const data = Object.values(resp.data);
            console.log(data)
            setData(data)
        });
    }, [])
    return (
    
    data.map((item => {return(
        <Wrapper>
            <div>
                    <hr/>
                <div className="card">
                    
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        
                        <div className="card-container">
                            <div className="avatar-container">
                            <img src={item.avatar.image}/>
                            </div>
                        <div className="stats-container">
                        <div className="rowcard">
                        <h2 className="stat"> Weapon :  </h2> <p className="textweapon"> {item.avatar.weapon}</p>
                        </div>
                        <div className="rowcard">
                        <h4 className="stat"> Name:  </h4> <p className="textweapon"> {item.name}</p>
                        </div> 
                        <div className="rowcard">
                        <h5 className="stat"> Strength  </h5> <p className="textweapon"> {item.avatar.strength}</p>
                        </div>
                        <div className="rowcard">
                        <h5 className="stat"> Agility  </h5> <p className="textweapon">{item.avatar.agility}</p>
                        </div>
                        <div className="rowcard">
                        <h5 className="stat"> Intelligence </h5> <p className="textweapon"> {item.avatar.intel}</p> 
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )}
    )) 
    )
}

const Wrapper = styled.header`

height: 700px;
font-family: 'Electrolize', sans-serif;

.card-body{
    display:grid;
    grid-template-column: repeat(3, 1fr);
    grid-template-row: auto;
    width:50%;
}

.statscontainer{
    line-height: 15px;
}
.rowcard{

}

.stat{
    font-weight:bold; 
    font-size:20px;   
}

.textweapon{
    font-size: 17px;
}


.card-container{
    box-shadow: 10px 10px 10px 10px grey;
    
}

img{
    margin-top: -4%;
    width: 25%;
    margin-bottom: 3%;
}

.stats-container{  
    text-align:center;
    margin-bottom:20px;
}

.avatar-container{
    width: 100%;

    heigth: 400px;
    display:flex;
    justify-content:center;
}
h1{
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    font-family:var(--font-family--title);
}

hr{
    text-align:center;
    size:5px;
    width:50%;
    margin:auto;
    margin-top: 20px;
}



.stat{

}

`


export default Consumer;