import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import styled ,{ keyframes } from 'styled-components';
import googleimg from "../../img/Header/play-store.svg";
import appleimg from "../../img/Header/app-store.svg";

const ButtonEffect = keyframes`
  0% {
  
    opacity: 0;
  }
  100% {
  transform: translateY(180deg);
      opacity: 1;
  }
`;
const Logo = styled.img`
 
  position: relative;
  z-index: 2;
  padding-top: 2rem;
  padding-right: 4rem;
  padding-left: 4rem;
  
  height: 7em;
  width: 22rem;
  @media(max-width: 600px)
  {
  height: 5em;
  padding: 0px;
  }
  
`;
const Space = styled.div`
display: flex;
flex-grow: 1;
justify-content: flex-start;
align-items: center;
min-width: 1px;
font-size:3.5rem;
font-style: italic;
font-weight: lighter;
font-family: 'lato', sans-serif; 
color: white;
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
cursor: pointer;
backface-visibility: hidden;
transform: rotateY(${props=>props.rotate}deg);
transition: transform 1s;
box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .3);
&:active{
animation: ${props=>props.anima} 2s;
box-shadow: 0 0rem 0rem rgba(0, 0, 0, .3);
transform: translateY(4px);
}
@media(max-width: 600px)
  {
  display: none;
  }
`;
const ButtonBack = styled.div`
display: flex;
position: absolute;
height: 6rem;
width: 15rem;
margin-top: 2rem;
z-index: 2;
background-color: green;
border-radius: 1.4rem;
cursor: pointer;
backface-visibility: hidden;
transform:rotateY(${props=>props.rotate}deg);
transition: transform 1s;
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
@media(max-width: 600px)
  {
  height: 7rem;
  justify-content: center;
  align-items: center;
  padding: 0px;
  }
`;
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {back:props.back,pos:props.pos,text:props.text,applefront:"0",playfront:"0",appleback:"-180",playback:"-180"};
        this.toggle = this.toggle.bind(this);
    }
    toggle(ev) {
        var k = ev.target.id;
        console.log(k);
        if(k==="a1")
        {this.setState(() => {return {applefront:"-180",appleback:"0"}
        })}
        else if(k==="a2")
        {this.setState(() => {return {applefront:"0",appleback:"-180"}
        })}
        else if(k==="p1")
        {this.setState(() => {return {playfront:"-180",playback:"0"}
        })}
        else if(k==="p2")
        {this.setState(() => {return {playfront:"0",playback:"-180"}
        })}
    }
    render() {
        return (
            <Row back={this.state.back} pos={this.state.pos}>
                <Link to={"/"}>
                    <Logo src={require("../../img/Header/logo.svg")}/>
                </Link>
                <Space>
                    {this.state.text}
                </Space>
                    <Button rotate={this.state.applefront} id={"a1"} onClick={this.toggle} anim={ButtonEffect}>
                        <ButtonIconBox>
                            <ButtonIcon src={appleimg}/>
                        </ButtonIconBox>
                        <ButtonTextBox>
                            <ButtonText size={"1rem"}>Available on</ButtonText>
                            <ButtonText size={"1.4rem"}>APP STORE</ButtonText>
                        </ButtonTextBox>
                    </Button>
            <a href={"https://play.google.com/store/apps/details?id=bit7pay.com.bit7pay&hl=en"}>
                <Button id={"p1"} rotate={this.state.playfront} onClick={this.toggle}>
                    <ButtonIconBox >
                        <ButtonIcon src={googleimg}/>
                    </ButtonIconBox>
                    <ButtonTextBox >
                        <ButtonText size={"1rem"} >Available on</ButtonText>
                        <ButtonText size={"1.5rem"} >PLAY STORE</ButtonText>
                    </ButtonTextBox>
                </Button>
            </a>
            </Row>
        );
    }
}

export default Header;