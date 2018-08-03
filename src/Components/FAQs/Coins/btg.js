import React, { Component } from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img from "../../../img/Coins/btg-bg.svg"

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
const Btg =  ()=>(<Container>
    <Fade cascade bottom>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What is Bitcoin Gold?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Bitcoin Gold is a free, open source cryptocurrency project developed by volunteer bitcoin
                    enthusiasts. It was first announced on 23 October 2017 and launched on 12 November 2017.
                    Bitcoin Gold is what’s known as a hard fork of the bitcoin blockchain. A hard fork creates a
                    new branch of the bitcoin blockchain that contains the same transaction history as bitcoin up
                    until the fork, but exists in parallel with the bitcoin blockchain after the fork. This creates a new
                    cryptocurrency.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    How is Bitcoin Gold different from bitcoin?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    In essence, Bitcoin Gold is very similar to bitcoin. They both have the same transactionprocessing
                    time of 10 minutes (ie, it takes approximately 10 minutes to confirm a transaction
                    after cryptocoins have been transferred) and they both have 21 million coins maximum supply
                    (ie, there will never be more than 21 million BTG in circulation).
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    How Bitcoin Gold Works?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    With a few minor differences, Bitcoin Gold is exactly the same as Bitcoin. The “hard fork”
                    means that the developers copied all the original code and every transaction from the original
                    blockchain, made changes to the code, and reactivated the blockchain as a new
                    cryptocurrency.<br/><br/>
                    The only major change is the mining algorithm, which changed from SHA-256 (uses processing
                    power) to Equihash (uses memory). Equihash is meant to be “ASICs-resistant,” meaning that
                    people with lots of money and huge computers can’t dominate and centralize the currency, as
                    memory is more expensive to scale up.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Fun fact
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    The cryptocurrency's slogan, “Make Bitcoin decentralized again,” is a play on Donald Trump’s
                    campaign slogan: “Make America great again.”
                </CardText>
            </CardTextContainer>
        </TextCard>
    </Fade>
</Container>)

export default Btg;