import React, { Component } from 'react';
import styled from "styled-components";
import {Route,Switch,NavLink} from 'react-router-dom';
import Btc from "./Coins/Btc";
import Eth from "./Coins/Eth";
import Btg from "./Coins/btg";
import Bch from "./Coins/Bch";
import Xrp from "./Coins/xrp";
import Ltc from "./Coins/ltc";
import "./style.css"
import Header from "../Header/header";
import Verification from "../verification/Verification";
import Footer from '../Footer/footer';
import { ScrollContext } from 'react-router-scroll-4';
import {AnimatedSwitch} from 'react-router-transition';


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
width:100vw;
height:100%;
flex-flow: column;
justify-content: center;
overflow: hidden;
background:linear-gradient(#101419, #3A506B)
`;
const CoinScrollContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
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
font-family: 'Lato', sans-serif;
color:white;
letter-spacing: 2px; 
`
const IconRow = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: row;
height: 16em;
width: 100vw;
overflow-x: scroll;
@media(max-width: 500px){
height: 10em;
}
`
const IconBox = styled.div`
height: 14rem;
width: 14rem;
display: flex;
justify-content: center;
align-items: center;
opacity: .6;
padding: 1rem;
transition: .5s;
&:hover{
opacity: 1;
}
@media(max-width: 500px){
height: 8em;
width: 8em;
padding: .5rem; 
}
`
const Icon =styled.img`
display: flex;
height: 100%;
width: 100%;
position: relative;
`
const PageIcon =styled.img`
display: flex;
position: absolute;
height: 32rem;
width: 32rem;
top:13rem;
left:-7rem;
@media(max-width: 800px){
display: none;
}
`
const HeadingText1 = styled.span`
font-size: 7rem;
text-align: center;
font-family: 'Lato', sans-serif;
color:white;
letter-spacing: 2px; 
transition: .5s;
@media(max-width: 500px){
font-size: 5rem;
}
`
const Bold = styled.span`
font-weight: 500;
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
padding-top: 4rem;
padding-bottom: 6rem;
@media(max-width: 500px){
padding: 0px 10px 30px 10px;
}

`
const Bitcoin = ({ match }) => (<Bold> BitCoin</Bold>
);
const Ether = ({ match }) => (<Bold> Ethereum</Bold>
);
const ltc = ({ match }) => (<Bold> Lite Coin</Bold>
);
const btg = ({ match }) => (<Bold> Bitcoin Gold</Bold>
);
const bch = ({ match }) => (<Bold> Bitcoin Cash</Bold>
);
const xrp = ({ match }) => (<Bold> Ripple</Bold>
);

const whatIs = ({match}) => (<ScrollContext >
    <Container>
    <HeadingContainer>
        <Header/>
        <CoinScrollContainer>
            <HeadingText3>
                Choose coin to Know about
            </HeadingText3>
            <IconRow>
                <NavLink exact strict to={`${match.url}`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Coins/btc.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/Eth`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Coins/eth.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/ltc`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Coins/ltc.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/xrp`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Coins/xrp.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/btg`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Coins/btg.svg")} /></IconBox>
                </NavLink>
                <NavLink to={`${match.url}/bch`} activeClassName="selected">
                    <IconBox><Icon src={require("../../img/Coins/btg.svg")} /></IconBox>
                </NavLink>
            </IconRow>
        </CoinScrollContainer>
        <Route exact strict path="/coins" render={()=>(<PageIcon src={require("../../img/Coins/btc.svg")}/>)}/>
        <Route path="/coins/ltc" render={()=>(<PageIcon src={require("../../img/Coins/ltc.svg")}/>)}/>
        <Route path="/coins/xrp" render={()=>(<PageIcon src={require("../../img/Coins/xrp.svg")}/>)}/>
        <Route path="/coins/btg" render={()=>(<PageIcon src={require("../../img/Coins/btg.svg")}/>)}/>
        <Route path="/coins/bch" render={()=>(<PageIcon src={require("../../img/Coins/btg.svg")}/>)}/>
        <Route path="/coins/Eth" render={()=>(<PageIcon src={require("../../img/Coins/eth.svg")}/>)}/>

        <Heading>
            <HeadingText1>
                <Light>What is</Light>
                <Route exact strict path="/coins" component={Bitcoin}/>
                <Route path="/coins/ltc" component={ltc}/>
                <Route path="/coins/xrp" component={xrp}/>
                <Route path="/coins/btg" component={btg}/>
                <Route path="/coins/bch" component={bch}/>
                <Route path="/coins/Eth" component={Ether}/>?
            </HeadingText1>
        </Heading>
    </HeadingContainer>

        <Route exact strict path="/coins" component={Btc}/>
        <Route path="/coins/Eth" component={Eth}/>
        <Route path="/coins/ltc" component={Ltc}/>
        <Route path="/coins/btg" component={Btg}/>
        <Route path="/coins/bch" component={Bch}/>
        <Route path="/coins/xrp" component={Xrp}/>
    <Verification/>
    <Footer/>
    </Container>
</ScrollContext>)


export default whatIs;