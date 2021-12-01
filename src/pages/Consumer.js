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
                <div className="card">
                    
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <h1> Your character </h1>
                        <img src={item.avatar.image}/>
                        <h3> Weapon {item.avatar.weapon}</h3>
                        <h5> Strength {item.avatar.strength} </h5>
                        <h5> Agility {item.avatar.agility} </h5>
                        <h5> Intelligence {item.avatar.intel} </h5>
                    </div>
                </div>
            </div>
        </Wrapper>
    )}

    ))
    
    )
}

const Wrapper = styled.header`

height: 500px;

`


export default Consumer;