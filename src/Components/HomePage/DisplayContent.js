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
background: url(${img1}) no-repeat;
background-size:120%;
margin-top: 100px;
@media(max-width: 1024px){
display: none;
}
`;

const TextBoxContainer = styled.div`
display: flex;
flex-flow: column ;
justify-content: center;
align-items: center;
height: 120vh;
width: 45%;
@media(max-width: 500px){
width: 100%;
}
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
@media(max-width: 500px){
width: 100%;
padding: 0px;
}
`;
const ContentContainer1 = styled.div`
display: flex;
height:120vh;
width: 100%;
background-color: white;  
z-index: 2;
`;
const HeadingText = styled.span`
font-size: 3rem;
text-align: center;
font-weight: 900;
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
height: 4.8rem;
width: 3.8rem;
padding:3px;
`;
const PhoneVer = styled.img`
position: relative;
left: ${props=>props.left};
height: ${props=>props.height};
width: auto;
top:${props=>props.top};
`;
const DisplayContent = (props) =>(<ContentContainer1>
    <ImageBox>
        <PhoneVer src={require("../../img/Header/iphone_x_1.png")} height={"45vh"}  top={"40%"} left={"10%"}/>
        <PhoneVer src={require("../../img/Header/iphone_x_2.png")} height={"62vh"}  top={"70px"}/>
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
</ContentContainer1>);

export default DisplayContent;