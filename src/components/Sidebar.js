import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/app_context';
import { navlinks } from '../utils/constant';
import { Link } from 'react-router-dom';

import {ImCross} from "react-icons/im"


const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useAppContext();
        return (
            <Wrapper class="sidebar">
                    <aside className ={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                    <div className = "sidebar-header">
                        <button className="close-btn" type="button" onClick={closeSidebar}>
                             <ImCross/>

                        </button>
                    </div>
                    <ul className="links">
                        {
                            navlinks.map((item) => {
                                const{id,url,text} = item;
                                return(
                                    <li key={id}>
                                        <Link to={url} onClick={closeSidebar}>
                                            {text}
                                        </Link>
                                    </li>

                                );
                            })
                        }
                    </ul>
                    </aside>
            </Wrapper>
        )
}

const Wrapper = styled.header`
    background-color: grey;
    width:30%;
    height:600px;   


.close-btn{

}

ul{
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    flex-gap: 1;
    list-style-type: none;
    text-decoration: none;  
}

a {
    color: black;
    text-decoration: none;
    font-weight:bold;
    font-weight:bold;
    font-size:19px;
}

a:hover {
    color: grey; 
    text-decoration:none; 
    cursor:pointer;  
    font-weight:bold;
    font-size:21px;
}





`

export default Sidebar;