import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/app_context';
import { navlinks } from '../utils/constant';
import { Link } from 'react-router-dom';
import {ImCross} from "react-icons/im"
import imga from '../assets/imga.png'
import logo4 from '../assets/logo4.png'



const Sidebar = () => {
    const {isSidebarOpen, CloseSidebar} = useAppContext();
    console.log(CloseSidebar)

        return (
            <Wrapper className="sidebar">
                    <div className ={`sidebar ${isSidebarOpen ? 'shown-sidebar' : 'hidden-sidebar'}`}>
                    <div className = "sidebar-header">
                        <button className="close-btn" type="button" onClick={CloseSidebar}>
                             <ImCross/>
                        </button>
                        <div>
                            <img className="logoimage" src={logo4}/>
                        </div>
                    </div>
                    <ul className="links">
                        {
                            navlinks.map((item) => {
                                const{id,url,text} = item;
                                return(
                                    
                                    <li key={id}>
                                        <Link to={url} onClick={CloseSidebar}>
                                            {text}
                                        </Link>
                                    </li>

                                );
                            })
                        }
                    </ul>
                    </div>
            </Wrapper>
        )
}


const Wrapper = styled.header`

font-family: 'Electrolize', sans-serif;
fint-weight: bold;

.sidebar{
    background: linear-gradient(#7F00FF,black);
    width:23%;
    height:100%; 
    position:fixed;
    z-index: 1002;
}

.close-btn{

}

ul{
    display:flex;
    flex-direction:column;
    float:center;
    gap: 50px;
    list-style-type: none;
    text-decoration: none; 
    margin-top:40px; 
}

a {
    color: white;
    text-decoration: none;
    font-weight:bold;
    font-weight:bold;
    font-size:23px;
}

a:hover {
    text-shadow: 1px 1px 2px grey;
    text-decoration:none; 
    cursor:pointer;  
    font-weight:bold;
    font-size:24px;
}

img{
    width:130px;
    height:130px;
    margin-left: 25px;
}

.hidden-sidebar{
    display:none;
}

@media only screen and (max-width: 768px) {
    .hidden-sidebar{
        position:fixed;
        width:230px;
        height:700px;
        z-index:1001; 
        
    }

    .sidebar{
        width: 32%;
            
    }

    .logoimage{
        width:70%;
        height:70%;
    }
     
}
@media only screen and (min-width: 769px) and (max-width: 991px) {
  
    .hidden-sidebar{
        position: fixed;
        z-index:1001;
        width:230px;
        height:700px;
    }
    
    
}

@media only screen and (min-width: 991px) {

    display:none;

}


`

export default Sidebar;