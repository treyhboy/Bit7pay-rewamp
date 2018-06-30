import React, { Component } from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import img from "../../../img/Coins/eth-bg.svg";

const Container = styled.div`
position: relative;
width:100%;
height:100%;
background: url(${img}) no-repeat right bottom;
background-size: 90rem 90rem;
z-index: 2;
padding: 50px;
@media(max-width: 800px){
padding: 5px;
background-color: white;
background-size: 0 0;
}
`
const TextCard = styled.div`
width: 100%;
height: 100%;
padding: 20px;
@media(max-width: 500px){
font-size: 5px;
}
@media(max-width: 800px){
padding: 10px;
}
`
const CardHeadingContainer =styled.div`
width: 100%;
height: 100%;
padding: 5px 20px ;
@media(max-width: 800px){
padding: 5px;
}
`
const CardTextContainer = styled.div`
width: 100%;
height: 100%;
padding: 2em 6em ;
@media(max-width: 800px){
padding: 5px;
}
`
const CardHeading = styled.span`
font-size: 3rem;
text-align: center;
font-weight: 500;
font-family: 'Lato', sans-serif;
color:#4A4D50;
`
const CardText = styled.span`
font-size: 2rem;
text-align: center;
font-family: 'Lato', sans-serif;
color: grey;

`
const Eth =  ()=>(<Container>
    <Fade cascade bottom>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Decentralized Digital Currency
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Ethereum is a decentralized system, which means it is not controlled by any single governing entity. An absolute majority of online services, businesses and enterprises are built on a centralized system of governance. It is fully autonomous and is not controlled by anyone at all.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Peer-to-peer System
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Ethereum is a decentralized system, which means it utilizes a peer-to-peer approach. Every single interaction happens between and is supported only by the users taking part in it, with no controlling authority being involved.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Buy Ethereums
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Bit7Pay provides an easy way for you to buy Ethereum. Just download Bit7Pay app on your mobile and get your account verified within hours to buy your first ethereum. It’s never too late to invest!
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Store Ethereums
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                After you purchase Ethereum, you can safely store them in your Bit7Pay digital wallet. Our cloud based servers are secured with double encryption mechanisms to prevent unauthorized access of your digital assets.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Secure Transactions
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Ethereum transactions are virtually tamper-proof because of hash linking between two blocks of a blockchain. Using private keys to sign a transaction also ensures authenticity of a transaction’s origin.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Ethereum Mining
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Ethereum Mining is the process of mining Ether which secures the network which in turn ensures verified computation. Ether is an absolute essential, as it serves as fuel for the smooth running of the Ethereum platform.
            </CardText>
        </CardTextContainer>
    </TextCard>
    </Fade>
</Container>)

export default Eth;