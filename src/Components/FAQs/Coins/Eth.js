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
                What is Ethereum?
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Like Bitcoin, Ethereum is a distributed public blockchain network. Although there are some
                significant technical differences between the two, the most important distinction to note is that
                Bitcoin and Ethereum differ substantially in purpose and capability. Bitcoin offers one particular
                application of blockchain technology, a peer to peer electronic cash system that enables online
                Bitcoin payments. While the Bitcoin blockchain is used to track ownership of digital currency
                (bitcoins), the Ethereum blockchain focuses on running the programming code of any
                decentralized application.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Who created Ethereum ?
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                In late 2013, Vitalik Buterin described his idea in a white paper, which he sent out to a few of
                his friends, who in turn sent it out further. As a result, about 30 people reached out to Vitalik to
                discuss the concept. He was waiting for critical reviews and people pointing out critical
                mistakes in the concept, but it never happened. The project was publicly announced in
                January 2014, with the core team consisting of Vitalik Buterin, Mihai Alisie, Anthony Di Iorio,
                Charles Hoskinson, Joe Lubin and Gavin Wood. Buterin also presented Ethereum on stage at a
                Bitcoin conference in Miami, and just a few months later the team decided to hold a crowdsale
                of Ether, the native token of the network, to fund the development.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                What is a smart contract?
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Smart contract is just a phrase used to describe computer code that can facilitate the
                exchange of money, content, property, shares, or anything of value. When running on the
                blockchain a smart contract becomes like a self-operating computer program that
                automatically executes when specific conditions are met. Because smart contracts run on the
                blockchain, they run exactly as programmed without any possibility of censorship, downtime,
                fraud or third party interference.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                What is Ethereum capable of?
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                With Ethereum, anyone can design and use his or her own cryptocurrency, which can further
                be used either as a currency or to represent a share or any asset amongst other things. With a
                standard API, the contract from these tokens will work with any kind of wallet, contracts or
                even exchanges. It can also help projects get funding through smart contracts.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Advantages of Ethereum
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Ethereum platform benefits from all the properties of the Blockchain technology that it runs
                on. It is completely immune to any third party interventions, which means that all the
                decentralized apps and DAOs deployed within the network can’t be controlled by anyone at
                all.<br/><br/>
                • Any Blockchain network is formed around a principle of consensus, meaning that all the
                nodes within the system need to agree on every change made within it. This eliminates
                possibilities of fraud, corruption and makes the network tamper-proof.<br/><br/>
                • The whole platform is decentralized, which means there is no possible single point of failure.
                Hence, all the apps will always stay online and never switch off. Moreover, the decentralized
                nature and cryptographic security make the Ethereum network well protected against
                possible hacking attacks and fraudulent activities.
            </CardText>
        </CardTextContainer>
    </TextCard>
    </Fade>
</Container>)

export default Eth;