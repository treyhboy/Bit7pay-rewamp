import React, { Component } from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img from "../../../img/Coins/btc-bg.svg"

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
const Btc =  ()=>(<Container>
    <Fade cascade bottom>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                What is Bitcoin?
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                • Bitcoin was designed to let you store, send, and receive money without any banks or credit
                card companies.<br/><br/>
                • Until Bitcoin came around, you needed banks, credit cards, or companies like PayPal and
                Venmo to send and receive money.<br/><br/>
                • These companies were necessary to do something only they could do: verify that the person
                spending money actually has money to spend. Banks can do this because they hold
                everyone’s money, so they know all account balances.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                Who controls Bitcoin?
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Incredibly, Bitcoin is not controlled by any person, company, or government. It’s run by the
                community of its users. Read that twice, because it’s important!<br/><br/>
                • Bitcoin users are located all around the world and use the internet to help send and receive
                payments. But unlike traditional payments that pass through banks, bitcoin is sent directly
                from person to person, instead of from person to company to person.<br/><br/>
                • This is known as a peer-to-peer system (P2P). It means there is no central control.
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                What are the benefits of using Bitcoin?
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                • Decentralized - Traditional money is controlled by banks and governments – which makes it
                a “centralized” currency. Bitcoin is not controlled or regulated by any single entity like a bank
                – which makes it a “decentralized” currency. Having no banks in control makes sending and
                receiving money cheaper, faster, and easier.<br/><br/>
                • No Counterfeit Money - Paper currencies, credit cards, and checks can be counterfeit. If
                you’ve ever been a victim of fraud, you know how much this sucks. Bitcoin solves the Double
                Spend Problem which means criminals cannot create fake bitcoins. Counterfeiting is
                impossible.<br/><br/>
                • Limited Supply - Traditional money is created by governments in unlimited quantities. They
                print more constantly, which decreases the value over time. Bitcoin’s supply is limited to 21
                million coins. There can never be more! Why? It’s designed to be scarce so that it increases
                in value over time.<br/><br/>
                • Security - There is a lot of money stored in Bitcoin, so it needs to be very secure. Bitcoin
                uses cryptography to securely send payments. That’s why Bitcoin is called a cryptocurrency.
                The code is so strong that tampering is virtually impossible. There is A LOT of money held in
                Bitcoin, but it has never been hacked!
            </CardText>
        </CardTextContainer>
    </TextCard>
    <TextCard>
        <CardHeadingContainer>
            <CardHeading>
                How is Bitcoin Sent and Received?
            </CardHeading>
        </CardHeadingContainer>
        <CardTextContainer>
            <CardText>
                Just like real money, bitcoin is stored in wallets. But Bitcoin’s wallets are digital. Your Bitcoin
                wallet is like a bank account. It’s how you access your money. Each Bitcoin wallet has a unique
                address so you can send money to and from it.
            </CardText>
        </CardTextContainer>
    </TextCard>
    </Fade>
</Container>)

export default Btc;