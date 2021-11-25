import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/app_context';
import { navlinks } from '../utils/constant';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Wrapper>
            <h1 class="title">SHADOW GAMES</h1>

        </Wrapper>
    )
}

const Wrapper = styled.header`
background: linear-gradient(black, #7F00FF);
height: 400px;

.title{
    color: white;
    text-align: center;
    padding: 30px;
    font-size: 30px;
}



.links{

}

`

export default Footer;