import React, { Component } from 'react';
import styled,{keyframes} from "styled-components";

    const IconEffect1 = keyframes`
  0% {
    
    height: 0px;
    width: 0px;
  }
  100% {
      height: 100vh;
      width: 100vw;
  }
`;
const HContainer = styled.div`
position: fixed;
height:100vh;
width:100vw;  
justify-content: center;
align-items: center;
background-color: red;
display: ${props=>props.display};
animation: 1s ${IconEffect1} ease-out;
z-index: 100;
`
const Button = styled.div`
display: flex;
height: 6rem;
width: 15rem;
z-index: 2;
margin: 1vw;
background-color: #282D31;
border-radius: 1.4rem;
justify-content: center;
align-items: center;
font-size: 2.5em;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:white;
letter-spacing: 2px; 
`;
const SingleNews=(props)=> (<HContainer display={props.display}>
        <Button onClick={props.click}>State Check</Button>
    </HContainer>
);
export default SingleNews;
