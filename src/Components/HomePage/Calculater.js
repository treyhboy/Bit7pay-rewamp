import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Cascader } from 'antd';
import { Input } from 'antd';

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


const ContentContainer = styled.div`
display: flex;
flex-flow: column;
height:70vh;
width: 100%;
background: linear-gradient(to right,#00EFD0,#00ABE9);
opacity: .8;
`;
const HeadingContainer = styled.div`
display: flex;
flex-flow: row;
height: 15vh;
width: 100%;
padding-bottom: 10vh;
`
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
width: 6vw;
padding: 1vh 2vh;
opacity: 1;
`;
const Icon = styled.img`
height: 60%;
width: auto;
`
const MainBox = styled.div`
height: 100%;
width: 100%;
padding:10vh 0px;
display: flex;
flex-flow: row;
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
const Calculater = (props) =>(
    <Fade delay={1000} bottom>
    <ContentContainer color1={"#00EFD0"} color2={"#00ABE9"}  height={"94vh"}>
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
                <Icon src={require("../../img/Header/play-store.svg")}/>
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
                <Input size="large" placeholder="Rs 5,52,122.91" />
                </Row1>
                <Label> Fees</Label>
                <Row1>
                <Input placeholder="Rs 1106.86" />
                </Row1>
                <Label> Gst</Label>
                <Row1>
                    <Input placeholder="Rs 199.23" />
                </Row1>

            </Col>
            <Col left={"0px"}>
                <NormalText>Total Cost</NormalText>
                <HeadingText>Rs 5,53,429</HeadingText>
            </Col>
        </MainBox>
    </ContentContainer>
    </Fade>
);

export default Calculater;