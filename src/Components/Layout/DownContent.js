import React, { Component } from 'react';
import styled from "styled-components";

const Sec = styled.div`
position:relative;
height: 100vh;  
width: 100vw;
margin-top: 30vh;
background-color:white;
z-index: 10;
`;
const Sphere = styled.div`
position:absolute;
height: 50vh;  
width: 100vw;
background-color: white;
clip-path: ellipse(50% 72% at 50% 100%);
transform: translateY(-175%);
`
const Card_Cont = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
margin: 25vh;
`
const Cards = styled.div`
display: flex;
position: relative;
height: 15vh;
width:15vw;
background-color: white;
border-radius: 10px;
border: .5px solid lightgray;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
z-index: 12;
transform: rotate(${props=>props.rotate}) translateY(${props=>props.translateY});
`
class Down extends Component
{
    render(){
        return(<Sec>


            </Sec>);
    }
}

export default Down;