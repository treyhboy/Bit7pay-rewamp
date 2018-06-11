import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Cascader } from 'antd';
import { Input } from 'antd';
import img from "../../img/Header/accounting-black-budget-53621.jpg";

const options = [{
    value: 'Bitcoin',
    label: 'Bitcoin'
}, {
    value: 'Etherium',
    label: 'Etherium'
},{
    value: 'XRP',
    label: 'XRP'
}, {
    value: 'LiteCoin',
    label: 'LiteCoin'
}];


const HeadingContainer = styled.div`
display: flex;
flex-flow: row;
height: 15vh;
width: 100%;
padding-bottom: 10vh;
z-index: 10;
`
const ContentContainer = styled.div`
display: flex;
flex-flow: column;
height:80vh;
width: 100%;
background:url(${img});
background-size: cover;
  &:after {
    content: '';
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	background-image: linear-gradient(to right,#00EFD1,#00ACEA);;
	opacity: .6; 
  }
`;
const Heading = styled.div`
display: flex;
flex-flow: column;
height: 15vh;
width: 100%;
justify-content: center;
align-items: flex-start;
`;
const HeadingText = styled.span`
font-size: 5rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
font-weight: 600;
color:white;
letter-spacing: 2px; 
padding: 3vh 2vw;
`;
const NormalText = styled.span`
font-size: 2rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color: white;
padding: 0px 2vw;
`;
const IconBox = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height:15vh;
width: 10vw;
padding: 1vh 2vh;
opacity: 1;
margin-right: 10px;
`;
const Icon = styled.img`
height: 40%;
width: auto;
`
const MainBox = styled.div`
height: 100%;
width: 100%;
padding:10vh 0px;
display: flex;
flex-flow: row;
z-index: 10;
@media(max-width: 450px){
flex-flow: column;
}
`
const Col = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
flex-grow: 1;
flex-shrink: 1;
padding: 0px ${props=>props.left||"2vh"};
`
const Row1 = styled.div`
display: flex;
flex-flow: row;
padding: 1vh;
`
const Label = styled.span`
font-size: 2rem;
font-family: 'Raleway', sans-serif; 
color: white;
padding: 1vh 0px;
`
const CardText = styled.span`
font-size: 1.6rem;
font-family: 'Raleway', sans-serif; 
color:gray;
opacity: .8;
`
const Card = styled.div`
display: flex;
padding: 2vh 2vw;
border-radius: 5px;
background-color: whitesmoke;
`
const Calculater = (props) =>(
    <ContentContainer >
        <HeadingContainer>
        <Heading>
            <HeadingText>
                Crypto Calculator
            </HeadingText>
            <NormalText>
                Know how much you want to invest in your favorite cryptocurrency on Bit7Pay
            </NormalText>
        </Heading>
            <IconBox>
                <Icon src={require("../../img/Header/emblem.svg")}/>
            </IconBox>
        </HeadingContainer>
        <MainBox>
            <Col>
                <Label> Select Currency</Label>
                <Cascader size="large" options={options} />
            </Col>
            <Col>

                <Label> Enter Amount to Buy</Label>
                <Row1>
                <Input size="large" placeholder="1 BTC" />
                </Row1>
            </Col>
            <Col>
                <Label> Subtotal</Label>
                <Row1>
                    <Card><CardText>Rs 5,52,122.91</CardText></Card>
                </Row1>
                <Label>Fees</Label>
                <Row1>
                    <Card><CardText> Rs 1106.86</CardText></Card>
                </Row1>
                <Label> Gst</Label>
                <Row1>
                    <Card><CardText> Rs 199.23</CardText></Card>
                </Row1>

            </Col>
            <Col left={"0px"}>
                <NormalText>Total Cost</NormalText>
                <HeadingText>Rs 5,53,429</HeadingText>
            </Col>
        </MainBox>
    </ContentContainer>
);

export default Calculater;