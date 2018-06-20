import React, { Component } from 'react';
import styled from "styled-components";
import {Route,Switch,NavLink} from 'react-router-dom';
import Btc from "./Coins/Btc";
import Eth from "./Coins/Eth";
import "./style.css"
import Header from "../Header/header";
import Verification from "../verification/Verification";
import Footer from '../Footer/footer';


const Container = styled.div`
display: flex;
flex-flow: column;
position: relative;
height: 100%;
width: 100%;
background-color: white;
z-index: 2;
`;
const HeadingContainer = styled.div`
width:100%;
height:100%;
flex-flow: column;
justify-content: center;
background:linear-gradient(to right,#000428,#004e92)
`;
const CoinScrollContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items:center ;
height: 20em;
width: 100%;
@media(max-width: 500px){
height: 15em;
}
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
justify-content: center;
align-items: center;
flex-flow: row;
height: 16em;
width: 100%;
@media(max-width: 500px){
height: 10em;
}
`
const IconBox = styled.div`
height: 100%;
width: 100%;
opacity: .5;
`
const Icon =styled.img`
display: flex;
height: 80%;
width: 80%;
position: relative;
`
const HeadingText1 = styled.span`
font-size: 7rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:white;
letter-spacing: 2px; 
@media(max-width: 500px){
font-size: 5rem;
}
`
const Bold = styled.span`
font-weight: bolder;
`
const Light = styled.span`
font-weight: lighter;
`
const Heading = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-flow: row;
justify-content: center;
align-items:center ;
padding: 50px;
@media(max-width: 500px){
padding: 0px 10px 30px 10px;
}

`
const Bitcoin = ({ match }) => (<Bold> BitCoin</Bold>
);
const Ether = ({ match }) => (<Bold> Ethereum</Bold>
);
const whatIs = ({match}) => (<Container>
    <HeadingContainer>
        <Header/>
        <CoinScrollContainer>
            <HeadingText3>
                Choose coin to Know about
            </HeadingText3>
            <IconRow>
                <NavLink exact strict to={`${match.url}`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/btc-full.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/Eth`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/eth-full.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/B`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Header/dash-full.svg")} /></IconBox>
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
        </CoinScrollContainer>
        <Heading>
            <HeadingText1>
                <Light>What is</Light>
                <Route exact strict path="/whatis" component={Bitcoin}/>
                <Route path="/whatis/Eth" component={Ether}/>?
            </HeadingText1>
        </Heading>
    </HeadingContainer>

        <Route exact strict path="/whatis" component={Btc}/>
    <Route path="/whatis/Eth" component={Eth}/>
    <Verification/>
    <Footer/>

</Container>)


export default whatIs;