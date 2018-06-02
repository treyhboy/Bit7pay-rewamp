import React, { Component } from 'react';
import styled from "styled-components";

const Sec = styled.div`
position:relative;
height: 100vh;
width: 100vw;
background-color: white;
z-index: 10;
`;

class About extends Component
{
    render(){
        return(<Sec />);
    }
}

export default About;