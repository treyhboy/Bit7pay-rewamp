import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import styled ,{ keyframes } from 'styled-components';
import "./style.css";
import Zoom from 'react-reveal/Zoom';

const IconEffect1 = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
     transform: translateX(0%);
      opacity: 1;    
  }
`;
const IconEffect2 = keyframes`
  0% {
    transform: translateX(-200%);
    opacity: 0;
  }
  100% {
     transform: translateX(0%);
     opacity: 1;
  }
`;
const IconEffect3 = keyframes`
  0% {
    transform: translateX(-300%);
    opacity: 0;
  }
  100% {
     transform: translateX(0%);
     opacity: 1;
  }
`;


const Logo = styled.img`
  position: relative;
  z-index: 2;
  padding: 15px;
  height: 6vh;
  @media(max-width:1000px){
  position:fixed;
  transform: translateX(-10%) translateY(-30%);
  margin: 1.8%;
  }
`;
const Space = styled.div`
flex-grow: 1;
flex-shrink: 1;
width: 55vw;

`
const Head = styled.header`
display: flex;
justify-content: flex-end;
height: 60vh;
width:100%;   
position: relative;
background: linear-gradient(#000000,#001C4C);
@media(max-width:1000px){
justify-content: center;
background-color: white;
}
`
const Button = styled.div`
display: flex;
justify-content: space-around;
height: 7vh;
width: 10vw;
z-index: 2;
margin: 1vw;
background-color: #282D31;
border-radius: 1.4rem;
`
const ButtonText = styled.span`
font-size: 1.6rem;
font-family: 'Raleway', sans-serif; 
margin-top: 15px;
color: white;
`
const ButtonIcon = styled.img`
height: 5vh;
width: 4vw;
padding: 6px;
`

const Row = styled.div`
display: flex;
flex-flow: row;
justify-content: space-around;
padding: 2vw;
`
const Col = styled.div`
display: flex;
flex-flow: column;
flex-grow: 1;
flex-shrink: 1;

`
const HeadText = styled.span`
  position: relative;
  padding: 15px;
  letter-spacing: 2px;
  font-size: 4rem;
  font-family: 'Raleway', sans-serif; 
  color: white;
`
const NormalIcon = styled.img`
height: 13vh;
width: 10vw;
animation: ${props=>props.time} ${props=>props.anima} ease-out;
`


class Header extends Component {

    constructor(props)
    {
        super(props)
        this.state={value:window.location.pathname,loc:""}

    }

    render() {
        return (
            <Head>
                <Col>
                <Row>
                    <Logo src={require("../../img/Header/logo.svg")}/>
                <Space/>
                    <Button>
                        <ButtonIcon src={require("../../img/Header/app-store.svg")}/>
                        <ButtonText>APP STORE</ButtonText>
                    </Button>
                    <Button><ButtonIcon src={require("../../img/Header/play-store.svg")}/>
                        <ButtonText>PLAY STORE</ButtonText>
                    </Button>
                </Row>
                <Row>
                    <Col>
                        <HeadText><b>Safest</b> and Most <b>Reliable</b></HeadText>
                        <HeadText>Cryptocurrency Wallet in India</HeadText>
                    </Col>
                    <Col>
                        <Row>
                        <NormalIcon src={require("../../img/Header/btc-full.svg")} time={"0s"} anima={IconEffect1} />
                        <NormalIcon src={require("../../img/Header/eth-full.svg")} time={"1.5s"} anima={IconEffect1} />
                        <NormalIcon src={require("../../img/Header/ltc-full.svg")} time={"1.5s"} anima={IconEffect2} />
                        <NormalIcon src={require("../../img/Header/omisego-full.svg")} time={"1.5s"} anima={IconEffect3} />
                        </Row>
                    </Col>
                </Row>
                </Col>
                <div className="container">
                    <div className="sky">
                        <div className="stars"></div>
                        <div className="stars1"></div>
                        <div className="stars2"></div>
                        <div className="shooting-stars"></div>
                    </div>
                </div>
            </Head>

        );
    }
}

export default Header;