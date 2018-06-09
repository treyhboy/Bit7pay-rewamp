import React from "react";
import styled from "styled-components";
import img1 from "../../img/Header/concentric-circles.png";
import Roll from 'react-reveal/Roll';

const ImageBox = styled.div`
position: relative;
display: flex;
flex-flow: row;
height: 120vh;
width: 55%;
background-image: url(${img1});
background-size:120%;
margin-top: 100px;
`;

const TextBoxContainer = styled.div`
display: flex;
flex-flow: column ;
justify-content: center;
align-items: center;
height: 120vh;
width: 45%;
`;
const TextBox = styled.div`
display: flex;
position: relative;
flex-flow: column;
flex-shrink: 1;
justify-content: center;
align-items: center;
align-content: space-between;
padding: 3vh ${props=>props.left||"5vh"} 3vh  ${props=>props.right||"0px"} ;
height: 30vh;
width: 40vw;
`;
const ContentContainer = styled.div`
display: flex;
height:120vh;
width: 100%;
`;
const HeadingText = styled.span`
font-size: 3rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
letter-spacing: 2px; 
`;
const NormalText = styled.span`
font-size: 2rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color: grey;
padding: 2vh 5vw;
`;
const Heading = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
`;
const HeadingIcon = styled.img`
height: 5vh;
width: 4vw;
padding: 1px;
`;
const PhoneVer = styled.img`
position: relative;
left: ${props=>props.left};
height: ${props=>props.height};
width: ${props=>props.width};
top:${props=>props.top};
`;
const DisplayContent = (props) =>(<ContentContainer>
    <ImageBox>
        <PhoneVer src={require("../../img/Header/iphone_x_1.png")} height={"42vh"} width={"32vw"} top={"40%"} left={"10%"}/>
        <PhoneVer src={require("../../img/Header/iphone_x_2.png")} height={"62vh"} width={"18vw"} top={"70px"}/>
    </ImageBox>
    <TextBoxContainer>
        <TextBox>
            <Heading><HeadingIcon src={require("../../img/Header/pt-01.svg")}/> <HeadingText>14+ Cryptocurrencies</HeadingText></Heading>
            <NormalText>Choose the currency you want to invest in. We have enabled Bitcoin and Ethereum right now and more popular cryptocurrencies are to follow.
            </NormalText>
        </TextBox>
        <Roll right cascade fraction={1} >
            <TextBox left={"0px"} right={"5vh"}>
                <Heading><HeadingIcon src={require("../../img/Header/pt-02.svg")}/><HeadingText>Encrypted Wallet</HeadingText></Heading>
                <NormalText>To ensure the safety of your crypto funds and confidential data, we have implemented the hightest standards of Security Protocol.
                </NormalText>
            </TextBox>

            <TextBox >
                <Heading><HeadingIcon src={require("../../img/Header/pt-03.svg")}/><HeadingText>Superior Support</HeadingText></Heading>
                <NormalText>Got a problem? Stuck somewhere? Don't Worry! We are always listening and always happy to help at each step you take with Bit7Pay.
                </NormalText>
            </TextBox>
        </Roll>
    </TextBoxContainer>
</ContentContainer>);

export default DisplayContent;