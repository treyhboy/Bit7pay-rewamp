import React, { Component } from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Container = styled.div`
position: relative;
width:100%;
height:100%;
background-color: white;
z-index: 2;
padding: 50px;
`
const TextCard = styled.div`
width: 100%;
height: 100%;
padding: 20px;
@media(max-width: 500px){
font-size: 5px;
}
`
const CardHeadingContainer =styled.div`
width: 100%;
height: 100%;
padding: 5px 20px ;
`
const CardTextContainer = styled.div`
width: 100%;
height: 100%;
padding: 2em 6em ;
`
const CardHeading = styled.span`
font-size: 3rem;
text-align: center;
font-weight: 800;
font-family: 'Raleway', sans-serif; 
color:#4A4D50;
`
const CardText = styled.span`
font-size: 2rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color: grey;

`
const Ques =  ()=>(<Container>
    <Fade cascade bottom>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What is Cryptocurrency?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    A cryptocurrency is a digital or virtual currency designed to work as a medium of exchange. It uses cryptography to secure and verify transactions as well as to control the creation of new units of a particular cryptocurrency.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Which cryptocurrencies does Bit7Pay support?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Bit7Pay currently supports two of the most popular cryptocurrencies in the world i.e. Bitcoin (BTC) and Ethereum (ETH). We have already planned to include other emerging cryptocurrencies like Ripple and Litecoin in our portfolio.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What is Bitcoin?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Bitcoin is a new currency that was created in 2009 by an unknown person using the alias Satoshi Nakamoto. Transactions are made with no middle men – meaning, no banks! Bitcoin can be used to book hotels on Expedia, shop for furniture on Overstock and buy Xbox games. But much of the hype is about getting rich by trading it. The price of bitcoin skyrocketed into the thousands in 2017.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What is Ethereum?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Ethereum (ETH) is the world's second largest currency after Bitcoin. Launched in 2015, the value of ether (Ethereum's currency) has increased rapidly. Put very simply, Ethereum aims to allow users to make anonymous digital payments across international borders without the need of a traditional bank or third party.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    I have forgotten my PIN. What to do now?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    You have absolutely no need to worry as you can easily reset your 4-digit Secure PIN. Just type in your Registered Mobile Number on the Get Started Screen, wait for the auto OTP verification and then click on FORGOT PIN?. Enter the verification code will be sent to your Mobile Number on the next screen and set your new 4-digit Secure PIN. We will be happy to assist you through this process in case you're stuck anywhere.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Why should I buy Bitcoin/Ethereum?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    The millennial interest in trading cryptocurrencies is hard to ignore, yet they are not the only ones interested in this market. The competition for the coin is expected to become tougher in 2018 as new players enter the domain. It’s safe to say that this year, more institutional investors will start trading cryptocurrencies, especially Bitcoin and Ethereum.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Can I buy Bitcoin/Ethereum without registration and verification?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    We need you to complete the KYC Verification Process before you can purchase Bitcoin/Ethereum from your Bit7Pay Wallet. We have made the Verification Process very quick and hassle-free for your convinience.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    I don't have a PAN card, can I still be a registered user on Bit7Pay?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    Unfortunately you cannot trade or transact on Bit7Pay without a PAN card. Applying for a PAN is simple, and you can fill the forms online, but you'll have to mail your documents to the Income Tax PAN services offices to finalise the process.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Is Bitcoin/Ethereum legal in India??
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    The concept of cryptocurrency and Bitcoin is still in its nascent stage in India and does not have regulatory clarity. According to Nishith Desai, Founder of law firm Nishith Desai Associates, Bitcoin are not illegal in India and this is in consonance with an international approach.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    Why KYC is important for all types of transactions?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    As all transactions occur between bank accounts, it is a self-regulatory requirement for us to know the sender/ recipient within a transaction. To comply with KYC/ AML regulation and to protect users from illegal activities, we are required to collect a copy of your PAN card. It uniquely identifies you as an individual or institution performing a particular transaction.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What are Bit7Pay's fee and charges?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    We don't charge any fees to our users when they Deposit INR or Buy/Sell coins on their Bit7Pay Wallet. We charge a nominal fee of Rs. 10 on all INR Withdrawals made from Bit7Pay Wallet. There is also a small dynamic network fee on all outgoing Bitcoin/Ethereum transactions to external addresses depending on the amount sent.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    What is a receiving address?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>
                    All Verified Bit7Pay users are provided with two unique public addresses, each for receiving Bitcoin and Ethereum directly in their Bit7Pay Wallet. There are no absolutely no charges applied on the amount received on these addresses. You don’t have to do anything except share your receiving address with the sender. If you are in person, you can do this by letting them scan a QR code.
                </CardText>
            </CardTextContainer>
        </TextCard>
        <TextCard>
            <CardHeadingContainer>
                <CardHeading>
                    How is my Bit7Pay Wallet secured?
                </CardHeading>
            </CardHeadingContainer>
            <CardTextContainer>
                <CardText>

                    We take care of the highest security protocols so that you can relax and feel safe about your valuable funds stored with us. Your Bit7Pay Wallet is directly linked to your mobile number. We use private key encryption techniques to store/retreive your valuable data. Our servers are protected by a live firewall to ensure that no one touches your data except you.
                </CardText>
            </CardTextContainer>
        </TextCard>
    </Fade>
</Container>)

export default Ques;