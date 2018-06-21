import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import styled ,{ keyframes } from 'styled-components';
import "./style.css";
import Header from "../Header/header";
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

const Head = styled.header`
display: flex;
justify-content: flex-end;
height: 50rem;
width:100%;   
position: relative;
background: linear-gradient(#000000,#001C4C);
@media(max-width:1000px){
justify-content: center;
background-color: white;
height: 40rem;
}
`;
const Row = styled.div`
display: flex;
flex-flow: row;
justify-content: space-around;
padding: 2vw;
@media(max-width: 600px)
{
flex-flow: column;
}
`;
const IconRow = styled.div`
display: flex;
flex-flow: row;
justify-content: space-around;
padding: 2vw;
`;
const TextCol = styled.div`
display: flex;
flex-flow: column;
flex-grow: 1;
flex-shrink: 1;
@media(max-width: 900px)
{
padding: 3rem 0px;
}
`;
const Container = styled.div`
display: flex;
flex-flow: column;
flex-grow: 1;
flex-shrink: 1;
`;
const HeadText = styled.span`
  position: relative;
  padding: 15px;
  letter-spacing: 2px;
  font-size: 4rem;
  font-family: 'Raleway', sans-serif; 
  color: white;
  @media(max-width: 900px)
  {
  font-size: 3rem;
  padding: 5px;
  text-align: center;
  }
`;
const NormalIcon = styled.img`
height: 13rem;
width: auto;
@media(max-width: 900px)
{
height: 8rem;
}
`;
// animation: ${props=>props.time} ${props=>props.anima} ease-out;

class HomeHeader extends Component {

    constructor(props)
    {
        super(props)
        this.state={value:window.location.pathname,loc:""}

    }

    render() {
        return (
            <Head>
                <Container>
                <Header/>
                <Row>
                    <TextCol>
                            <HeadText><b>Safest</b> and Most <b>Reliable</b></HeadText>
                            <HeadText>Cryptocurrency Wallet in India</HeadText>
                    </TextCol>
                    <IconRow>
                        <NormalIcon src={require("../../img/Header/btc-full.svg")} time={"0s"} anima={IconEffect1} />
                        <NormalIcon src={require("../../img/Header/eth-full.svg")} time={"1.5s"} anima={IconEffect1} />
                        <NormalIcon src={require("../../img/Header/ltc-full.svg")} time={"1.5s"} anima={IconEffect2} />
                        <NormalIcon src={require("../../img/Header/omisego-full.svg")} time={"1.5s"} anima={IconEffect3} />
                    </IconRow>
                </Row>
                </Container>
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

export default HomeHeader;

