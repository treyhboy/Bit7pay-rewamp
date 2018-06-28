import React from "react";
import styled from "styled-components";
import img1 from "../../img/Header/concentric-circles.png";
import Roll from 'react-reveal/Roll';

const ImageBox = styled.div`
position: relative;
display: flex;
flex-flow: row;
margin-top: 5rem;
height: 85rem;
width: 55%;
background: url(${img1}) no-repeat;
background-size:auto 85rem;
@media(max-width: 1024px){
display: none;
}
`;

const TextBoxContainer = styled.div`
display: flex;
flex-flow: column ;
justify-content: center;
align-items: center;
height: 90rem;
width: 45%;
@media(max-width: 1024px){
width: 100%;
height: 80rem;
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
padding: 2rem ${props=>props.left||"5rem"} 2rem  ${props=>props.right||"0px"} ;
height: 28rem;
width: 60rem;
@media(max-width: 1024px){
width: 100%;
height: 25rem;
padding: 0px;
}
`;
const ContentContainer1 = styled.div`
display: flex;
height:90rem;
width: 100%;
background-color: white;  
z-index: 2;
`;
const HeadingText = styled.span`
font-size: 3rem;
text-align: center;
font-weight: 500;
font-family: 'Lato', sans-serif; 
letter-spacing: 2px; 
`;
const NormalText = styled.span`
font-size: 2rem;

font-weight: lighter;
text-align: left;
font-family: 'Lato', sans-serif; 
color: grey;
padding: 2rem 2rem 2rem 10rem;
`;
const Heading = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
`;
const HeadingIcon = styled.img`
height: 9rem;
width: 9rem;
padding:1rem;
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
        <PhoneVer src={require("../../img/Header/iphone_x_1.png")} height={"40rem"}  top={"42%"} left={"5%"}/>
        <PhoneVer src={require("../../img/Header/iphone_x_2.png")} height={"55rem"}  top={"60px"}/>
    </ImageBox>
    <TextBoxContainer>
        <TextBox>
            <Heading><HeadingIcon src={require("../../img/Header/pt-01.svg")}/> <HeadingText>14+ Cryptocurrencies</HeadingText></Heading>
            <NormalText>Choose the currency you want to invest in. We have enabled Bitcoin and Ethereum right now and more popular cryptocurrencies are to follow.
            </NormalText>
        </TextBox>
        <Roll right cascade fraction={1} >
            <TextBox left={"0px"} right={"8rem"}>
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