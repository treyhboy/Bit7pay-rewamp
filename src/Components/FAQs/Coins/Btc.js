import React, { Component } from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Container = styled.div`
position: relative;
width:100%;
height:100%;
background-color: white;
z-index: 2;
padding: 50px;
@media(max-width: 800px){
padding: 5px;
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
const Btc =  ()=>(<Container>
    <Fade cascade bottom>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Decentralized Digital Currency
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Bitcoin is the world’s first digital currency which is completely decentralized i.e. the system works without a central bank or single administrator. It was created in 2009 by an unknown person using the alias Satoshi Nakamoto
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
                All bitcoin transactions take place directly between bitcoin users, without an intermediary. These transactions are verified by network nodes using cryptography and are recorded in a public ledger called blockchain.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Buy Bitcoins
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Bit7Pay provides an easy way for you to buy bitcoins. Just download Bit7Pay app on your mobile and get your account verified within hours to buy your first bitcoin. It’s never too late to invest!
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Store Bitcoins
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                After you purchase bitcoins, you can safely store them in your Bit7Pay digital wallet. Our cloud based servers are secured with double encryption mechanisms to prevent unauthorized access of your digital assets.
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
                Bitcoin transactions are virtually tamper-proof because of hash linking between two blocks of a blockchain. Using private keys to sign a transaction also ensures authenticity of a transaction’s origin.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Bitcoin Mining
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                With Bitcoin, miners use special software to solve math problems and are issued a certain number of bitcoins in exchange. This provides a smart way to issue the currency and also creates an incentive for more people to mine.
            </CardText>
        </CardTextContainer>
    </TextCard>
    </Fade>
</Container>)

export default Btc;