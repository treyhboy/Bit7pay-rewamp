import React, { Component } from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import img from "../../../img/Coins/xrp-bg.svg"

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
const Xrp =  ()=>(<Container>
    <Fade cascade bottom>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What is Ripple?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    To start, it’s helpful to look at Ripple as something completely different from Bitcoin. Ripple is
                    back-end infrastructure and not a consumer facing product. Ripple is not a currency. It’s an
                    open-source, global exchange. Anyone can access it and everyone has an equal right to use it.
                    Ripple, the company, does not control the network, collect fees, or limit access.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Who Runs Ripple?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Ripple is truly a global company, with offices around the world. These offices can be found in
                    San Francisco, London, New York, India, Sydney, Luxembourg, and Singapore. The leadership
                    of the company combines experience in financial services, compliance, and technology that
                    spans decades. The team includes CEO Brad Garlinghouse, Global Head of Strategic
                    Accounts Marcus Treacher, Chief Compliance Officer Antoinette O’Gorman, Chief
                    Cryptographer David Schwartz, CTO Stefan Thomas, VP of Finance Cameron Kinloch, SVP of
                    Business Development Patrick Griffin, and SVP of Global Sales John Mitchell. The board of
                    directors has experience in policy, regulation, and finance.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What Is RippleNet?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    RippleNet is the network behind Ripple, connecting payment providers, banks, corporations,
                    and digital asset exchanges. It delivers the single frictionless experience that lets you send and
                    receive money globally. RippleNet provides connectivity across various payment networks with
                    instant settlement on demand. There is always certainty, as you can trace the funds in realtime.
                    To top it off, it has a low operational cost and low liquidity costs.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Nostro Accounts
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Tied-up capital accounts for more than 80% of payment costs for every industry. Worldwide,
                    businesses have more than $27 trillion in capital sitting idle in nostro accounts. Ripple aims to
                    free up this capital by using its global exchange as a market place for float. Financial brokers,
                    market makers, anyone, really, can offer up their cash positions. With a marketplace for cash
                    inventory, businesses no longer need to keep funded positions in every country they send
                    payments to. This also means that the payments will be sent from a local provider, allowing
                    businesses to avoid hitting the international SWIFT rail, which is expensive, slow, and doesn’t
                    scale.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What Is XRP?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    • XRP was built specifically for enterprises as an on-demand choice for sourcing liquidity in
                    cross-border payments.<br/><br/>
                    • Banks can use XRP to source liquidity in real-time on demand without any need to fund
                    nostro accounts in advance. Payment providers use it to reach into other markets, improve
                    the speed of payment settlements, or reduce the cost of foreign exchanges. You can buy or
                    exchange XRP on Bit7Pay App.<br/><br/>
                    • Compared to other cryptocurrencies, XRP settles incredibly quickly, taking only four seconds.
                    By comparison, ETH takes over two minutes to settle and BTC takes over an hour. Traditional
                    systems are even worse, taking three to five days.<br/><br/>
                    • XRP is also highly scalable, handling 1,500 transactions every second. XRP can even be
                    scaled to handle the same amount of throughput that Visa has. By comparison, ETH only has
                    15 transactions per second and BTC only handles three to six.
                </CardText>
            </CardTextContainer>
        </TextCard>
    </Fade>
</Container>)

export default Xrp;