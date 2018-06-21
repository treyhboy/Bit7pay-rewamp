import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import styled ,{ keyframes } from 'styled-components';
import googleimg from "../../img/Header/play-store.svg";
import appleimg from "../../img/Header/app-store.svg";

const Logo = styled.img`
  position: relative;
  z-index: 2;
  padding: 15px;
  height: 8em;
  @media(max-width: 600px)
  {
  height: 5em;
  padding: 0px;
  }
  
`;
const Space = styled.div`
flex-grow: 1;
min-width: 1px;
@media(max-width: 600px)
  {
  display: none;
  }
`;
const Button = styled.div`
display: flex;
height: 6rem;
width: 15rem;
z-index: 2;
margin: 1vw;
background-color: #282D31;
border-radius: 1.4rem;
@media(max-width: 600px)
  {
  display: none;
  }
`;
const ButtonTextBox =styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 75%;
justify-content: center;
align-items: flex-start;
`;
const ButtonText = styled.span`
font-size: ${props=>props.size};
font-family: 'Raleway', sans-serif; 
color: white;
padding: 2px;
`;
const ButtonIconBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 35%;
`;
const ButtonIcon = styled.img`
position: relative;
height: 50%;
width: 50%;
`;
const Row = styled.div`
display: flex;
flex-flow: row;
position: ${props=>props.pos};
justify-content: space-around;
padding:${props=>props.pos||"2vw"};
width: 100%;
z-index: 10;
background: ${props=>props.back};
`;

const Header=(props)=> (
                <Row back={props.back} pos={props.pos}>
                    <Logo src={require("../../img/Header/logo.svg")}/>
                <Space/>
                    <Button>
                        <ButtonIconBox>
                            <ButtonIcon src={appleimg}/>
                        </ButtonIconBox>
                        <ButtonTextBox>
                            <ButtonText size={"1rem"}>Available on</ButtonText>
                            <ButtonText size={"1.4rem"}>APP STORE</ButtonText>
                        </ButtonTextBox>
                    </Button>
                    <Button>
                        <ButtonIconBox>
                            <ButtonIcon src={googleimg}/>
                        </ButtonIconBox>
                        <ButtonTextBox>
                            <ButtonText size={"1rem"}>Available on</ButtonText>
                            <ButtonText size={"1.5rem"}>PLAY STORE</ButtonText>
                        </ButtonTextBox>
                    </Button>
                </Row>
        );

export default Header;