import React, { Component } from 'react';
import styled from "styled-components";
import {Route,Switch,NavLink} from 'react-router-dom';
import Btc from "./Coins/Btc";
import "./style.css"

const Container = styled.div`
display: flex;
flex-flow: column;
position: relative;
height: 100%;
width: 100%;
background-color: white;
z-index: 2;
`;
const Header = styled.div`
width:100%;
height:50vh;
flex-flow: column;
justify-content: center;
background: linear-gradient(to right,#00EFD1,#00ACEA);
`;
const CoinScrollContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items:center ;
height: 30vh;
width: 100%;

`
const HeadingText3 = styled.span`
font-size: 2rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:white;
letter-spacing: 2px; 
`
const IconRow = styled.div`
display: flex;
flex-flow: row;
height: 20vh;
width: 100%;
padding: 2vh 14vw;

`
const IconBox = styled.div`
height: 100%;
width: 12vw;
padding: 1vh 1vw;
opacity: .5;
`
const Icon =styled.img`
height: 100%;
width: 100%;
`
const HeadingText1 = styled.span`
font-size: 7rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:white;
letter-spacing: 2px; 
`
const Bold = styled.span`
font-weight: bolder;
`
const Light = styled.span`
font-weight: lighter;
`
const Heading = styled.div`
height: 20vh;
width: 100%;
display: flex;
flex-flow: row;
justify-content: center;
align-items:center ;

`
const whatIs = ({match}) => (<Container>
    <Header>
        <CoinScrollContainer>
            <HeadingText3>
                Choose coin to Know about
            </HeadingText3>
            <IconRow>
                <NavLink to={`${match.url}/Btc`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/btc-full.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/Eth`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/dash-full.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/B`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/eth-full.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/Bt`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/btc-full.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/Bto`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/btc-full.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/Btop`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/btc-full.svg")} /></IconBox>
                </NavLink>
            </IconRow>
            {/*<NavLink to={`${match.url}/Btc`}>BTC LINK</NavLink>*/}
        </CoinScrollContainer>
        <Heading>
            <HeadingText1>
                <Light>What is</Light> <Bold>Bitcoin</Bold> ?
            </HeadingText1>
        </Heading>
    </Header>

        <Route path="/whatis/Btc" component={Btc}/>

</Container>)


export default whatIs;