import React, { Component } from 'react';
import styled from "styled-components";

const Sec = styled.div`
position:relative;
height: 100vh;  
width: 100vw;
margin-top: 30vh;
background-color:#3A4551;
z-index: 10;

`;
const Sphere = styled.div`
position:absolute;
height: 50vh;  
width: 100vw;
background-color: #3A4551;
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
z-index: 12;
transform: rotate(${props=>props.rotate}) translateY(${props=>props.translateY});
`
class About extends Component
{
    render(){
        return(<Sec>
            <Card_Cont>
                <Cards rotate={"0deg"} translateY={"-35vh"}/>
                <Cards rotate={"0deg"} translateY={"-40vh"}/>
                <Cards rotate={"0deg"} translateY={"-40vh"}/>
                <Cards rotate={"0deg"} translateY={"-35vh"}/>
            </Card_Cont>
            <Sphere>

            </Sphere></Sec>);
    }
}

export default About;