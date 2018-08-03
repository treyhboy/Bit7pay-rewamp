import React, { Component } from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img from "../../../img/Coins/ltc-bg.svg"

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
const Ltc =  ()=>(<Container>
    <Fade cascade bottom>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What is Litecoin?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Litecoin is the world’s first altcoin. Like Bitcoin, Litecoin also exists on the internet as digital
                    money. No one can feel, touch, or mint it. Litecoin was not made to compete against Bitcoin,
                    but instead to act as a complimentary payment solution alternative. Think of Litecoin as the
                    silver to Bitcoin’s gold.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    When And Why Was Litecoin Created?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Litecoin was created on 7th Oct 2011 by Charlie Lee, an ex-Google employee. Litecoin was
                    designed to complement Bitcoin by solving problems like concentrated mining pools and
                    transaction timings. Litecoin came from Bitcoin’s core code with some modifications. Charlie
                    Lee modified the code and protocol in the way he considered best in order to achieve largescale
                    adoption of the currency.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    How is Litecoin different from bitcoin?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Higher volume of transactions - The Segregated Witness process increases the rate at
                    which transactions are verified on the block, reducing the time for confirmation of payment
                    from 10 minutes (for bitcoin) to 2.5 minutes (for Litecoin).<br/><br/>
                    • More secure - This faster processing time also helps maintain a secure environment by
                    reducing the chance of double-spending attacks – a hack in which the attacker spends the
                    same money twice to pay for two different transactions.<br/><br/>
                    • Larger coin limit - While bitcoin has a maximum coin limit of 21 million coins, Litecoin has
                    an upper limit of 84 million coins.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    The future of Litecoin
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    • Litecoin’s market cap growth is not expected to slow down anytime soon which may lead to
                    more and more businesses adopting the altcoin, either alongside bitcoin or as a complete
                    replacement.<br/><br/>
                    • Additionally, a lot of work is being carried out on improving the network Litecoin runs on,
                    which will improve the speed at which transactions are verified even further and will, more
                    importantly, allow Atomic Swaps.<br/><br/>
                    • New Litecoin ATMs being installed and a growing number of companies are slowly making
                    the switch to Litecoin. Potential buyers should consider these developments before making
                    decisions about purchasing LTC.
                </CardText>
            </CardTextContainer>
        </TextCard>
    </Fade>
</Container>)

export default Ltc;