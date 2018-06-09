import React from "react";
import styled ,{ keyframes } from "styled-components";
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Tada from 'react-reveal/Tada';
import "./style.css";

const VerificationContainer = styled.div`
display: flex;
flex-flow: column;
position: relative;
height: 70vh;
width: 100vw;
background-color: white;  
z-index: 2;
`;
const HeadingText = styled.span`
font-size: 4rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:grey;
letter-spacing: 2px; 
`;
const Heading = styled.div`
display: flex;
flex-flow: row;
height: 9vh;
justify-content: center;
align-items: center;
`;
const IconBoxRow = styled.div`
 display: flex;
 flex-flow: row;
 justify-content: space-around;
  align-items: center;
  height: 25vh;
  width: 100%;
  padding: 10px 18vw;
`;
const IconBox = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height:12vh;
width: 4vw;
opacity: 1;
`;
const IconText = styled.span`
font-size: 2rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color: grey;
padding: 2rem;
`;
const Icon = styled.img`
height: 70%;
width: auto;
`
const NormalText = styled.span`
font-size: 1.6rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color: grey;
padding: 0px 25vw;
`;
const Row = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
padding: 8vh;

`;
const Button =styled.div`
display: flex;
height: 10vh;
width: 40%;
justify-content: center;
align-items: center;
background: linear-gradient(to right,#26F69B,#00ABE9);
border-radius: 10rem;
`
const ButtonText = styled.span`
font-size: 2.5rem;
font-family: 'Raleway', sans-serif; 
color: white;
padding: 2px;
`


const Verification = (props) =>(<VerificationContainer>
        <Heading>
            <HeadingText>5 easy steps to get verified</HeadingText>
        </Heading>
        <IconBoxRow>
            <Tada >
            <IconBox>
                <Icon src={require("../../img/Header/verification-01.svg")}/>
                <IconText>Bank Account</IconText>
            </IconBox>
            </Tada>
            <Tada delay={1000}>
            <IconBox time={"1s"}>
                <Icon src={require("../../img/Header/verification-02.svg")}/>
                <IconText>Aadhar</IconText>
            </IconBox>
            </Tada>
            <Tada delay={2000}>
            <IconBox time={"2s"}>
                <Icon src={require("../../img/Header/verification-03.svg")}/>
                <IconText>PAN</IconText>
            </IconBox>
            </Tada>
            <Tada delay={3000}>
            <IconBox time={"3s"}>
                <Icon src={require("../../img/Header/verification-04.svg")}/>
                <IconText>Email</IconText>
            </IconBox>
            </Tada>
                <Tada delay={4000}>
            <IconBox time={"4s"}>
                <Icon src={require("../../img/Header/verification-05.svg")}/>
                <IconText>Photo</IconText>
            </IconBox>
            </Tada>
        </IconBoxRow>
        <NormalText>
            Provide your bank account details like Account Number,IFSC Code,Bank Name,Beneficiary Name and Image of cancelled cheque to enable withdrawals from Bit7Pay Wallet
        </NormalText>
        <Row>
            <Button>
                <ButtonText>
                    Join Bit7Pay Now
                </ButtonText>
            </Button>
        </Row>
    </VerificationContainer>

);

export default Verification;