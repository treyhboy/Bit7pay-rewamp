import React, { Component } from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img from "../../../img/Coins/bch-bg.svg"

const Container = styled.div`
position: relative;
width:100%;
height:100%;
background: url(${img}) no-repeat center bottom;
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
const Bch =  ()=>(<Container>
    <Fade cascade bottom>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What is Bitcoin Cash?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Built upon the bitcoin model, Bitcoin Cash is a also digital currency. Bitcoin Cash was created
                    as a result of diverging viewpoints within the bitcoin community about how to scale the
                    network. As more people began to use bitcoin, the network struggled to keep up with the
                    volume of transactions. As a result, many bitcoin users were waiting hours, sometimes days,
                    before seeing their transactions go through.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Does Bitcoin Cash price depend on Bitcoin price?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Bitcoin Cash is a completely independent cryptocurrency, so its price is not dependant on that
                    of the original Bitcoin. However, it is important to note that Bitcoin is still the world’s dominant
                    cryptocurrency, so if it goes up or down, the absolute majority of other cryptocurrencies are
                    very likely to follow its trend.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    So what features does Bitcoin Cash have?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Bitcoin Cash offers three new features.<br/><br/>
                    • a much larger block size of 8MB.<br/><br/>
                    • replay and wipeout protection. The transaction signature is slightly different and the forking
                    block has to be greater than 1MB.<br/><br/>
                    • a way to adjust the proof-of-work difficulty quicker than the normal 2016 block difficulty
                    adjustment interval found in Bitcoin.
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

export default Bch;