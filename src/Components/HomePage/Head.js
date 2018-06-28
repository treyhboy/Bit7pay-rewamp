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
const Bold = styled.span`
font-weight: bolder;
`
const Head = styled.header`
display: flex;
justify-content: flex-end;
height: 40rem;
width:100%;   
position: relative;
overflow: hidden;
font-weight: lighter;
background:linear-gradient(#101419, #3A506B);
@media(max-width:1000px){
justify-content: center;
background-color: white;
height: 35rem;
}
`;
const Row = styled.div`
display: flex;
flex-flow: row;
justify-content: space-around;
padding: 2.5rem;
@media(max-width: 600px)
{
flex-flow: column;
}
`;
const IconRow = styled.div`
display: flex;
flex-flow: row;
justify-content: space-around;
padding-left: 4rem;
transform: translateX(13%);
height: 100%;
width: 60%;
@media(max-width: 600px)
{
transform: translateX(0%);
padding-left: 0px;
width: 100%;
}
`;
const TextCol = styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 40%;
@media(max-width: 900px)
{
width: 100%;
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
  font-size: 3.8rem;
  line-height: 3.5rem;
  font-family: 'Lato', sans-serif; 
  color: white;
  @media(max-width: 900px)
  {
  font-size: 3rem;
  padding: 5px;
  text-align: center;
  }
`;
const NormalIcon = styled.img`
height: 12rem;
width: auto;
animation: ${props=>props.anima} ${props=>props.time};

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
                            <HeadText><Bold>Safest</Bold> and Most <Bold>Reliable</Bold></HeadText>
                            <HeadText>Cryptocurrency Wallet in India</HeadText>
                    </TextCol>
                    <IconRow>
                        <NormalIcon src={require("../../img/Header/btc-full.svg")} time={"0s"} anima={IconEffect1} />
                        <NormalIcon src={require("../../img/Header/eth-full.svg")} time={"1.5s"} anima={IconEffect1} />
                        <NormalIcon src={require("../../img/Header/ltc-full.svg")} time={"1.5s"} anima={IconEffect2} />
                        <NormalIcon src={require("../../img/Header/omisego-full.svg")} time={"1.5s"} anima={IconEffect3} />
                        <NormalIcon src={require("../../img/Header/omisego-full.svg")} time={"1.5s"} anima={IconEffect3} />
                    </IconRow>
                </Row>
                </Container>
            </Head>

        );
    }
}

export default HomeHeader;

