//----------------------------------Old Contact US---------------------------------------------
import React, { Component } from 'react';
import styled from "styled-components";
import { FlexyFlipCard } from 'flexy-flipcards';
import { ScrollContext } from 'react-router-scroll-4';

const Container = styled.div`
display: flex;
width:100%;
height:100vh;
padding: 20rem;
align-items: center;
background:linear-gradient(to right,#101419, #3A506B)

`
const FormContainer = styled.div`
display: flex;
flex-flow: column;
width:50rem;
height:70rem;
border-radius: 3rem;
background-color: white;
z-index: 8;
backface-visibility: hidden;
transform: rotateY(${props=>props.rotate}deg);
transition: transform 1s;
box-shadow:0 1rem 3rem rgba(0, 0, 0, .3);
`
const Header = styled.div`
display: flex;
align-items: center;
width:100%;
height:8rem;
padding: 3rem;
font-size: 3rem;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
color: #3682CE;
`
const InputContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:10rem;
padding: 0px 8rem;
`
const InputHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:3rem;
font-size: 2rem;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
color: #BDCCDB;
`
const InputEmail = styled.input`
padding: 0px 2rem ;
font-size: 2rem;
color: #BDCCDB;
font-family: 'Lato', sans-serif;
height: 5rem;
width: 100%;
box-shadow: none;
border: none;
border-bottom: solid #BDCCDB;
outline: none;
::placeholder{
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #BDCCDB;
}

@media(max-width: 800px){
margin:1rem 0px;
}
`;
const OptionContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:18rem;
padding: 0px 8rem;
color: #BDCCDB;
`
const OptionHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:4rem;
font-size: 2rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;

`
const OptionBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
height:6rem;
padding: 2px;
//font-weight: lighter;
`
const Option = styled.div`
display: flex;
height: 3.5rem;
width: 15rem;
border: solid 1px #3682CE;
color: #3682CE;
border-radius: 2rem;
justify-content: center;
align-items: center;
font-size: 1.5em;
text-align: center;
font-family: 'Lato', sans-serif;
letter-spacing: 3px;
&:hover{
background-color: #3682CE;
border: solid 1px #3682CE;
color: white;
}
`;
const IssueContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:15rem;
padding: 0px 8rem;
color: #BDCCDB;
`
const IssueHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:4rem;
font-size: 2rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;

`
const InputIssue = styled.textarea`
padding: 0px 2rem ;
font-size: 2rem;
color: #BDCCDB;
font-family: 'Lato', sans-serif;
height: 10rem;
width: 100%;
box-shadow: none;
border: solid #BDCCDB 1px;
outline: none;
::placeholder{
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #BDCCDB;
}
`;
const UploadContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:11rem;
padding: 0px 8rem;
color: #BDCCDB;
`
const UploadHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:4rem;
font-size: 2rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
`
const InputFile = styled.input`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
color: #BDCCDB;
font-family: 'Lato', sans-serif;
height: 5rem;
width: 100%;
padding: 2rem;
background-color: white;
box-shadow: none;
border: none;
outline: none;
opacity:1;
&::placeholder{
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #BDCCDB;
}
`
const ButtonRow = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
width:100%;
height:10rem;
padding: 0px 2rem;
`
const Send = styled.div`
display: flex;
height:7rem;
width:7rem;
margin-right: 10px;
background-color: #3682CE;
color: #3682CE;
border-radius: 100%;
justify-content: center;
align-items: center;
font-size: 1.5em;
text-align: center;
font-family: 'Lato', sans-serif;
letter-spacing: 3px;
&:hover{
background-color: #3682CE;
border: solid 1px #3682CE;
color: white;
}
`;
const SendIcon = styled.img`
height: 60%;
width: auto;
`
const SendText = styled.div`
display: flex;
align-items: center;
width:7rem;
height:4rem;
font-size: 2.4rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
color: #3682CE;
font-weight: lighter;
`
const Container2 = styled.div`
display: flex;
flex-flow: column;
position: absolute;
width:50rem;
height:70rem;
border-radius: 3rem;
z-index: 10;
background:linear-gradient(#021B79,#0575E6);
backface-visibility: hidden;
transform: rotateY(${props=>props.rotate}deg);
transition: transform 1s;
box-shadow:0 1rem 3rem rgba(0, 0, 0, .3);
`
const ThankYou = styled.div`
display: flex;
align-items: flex-end;
width:100%;
height:60%;
font-size: 10rem;
padding: 3rem ;
color: white;
border-bottom: solid gray 1px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
`
const NormalText = styled.div`
display: flex;
align-items: center;

width:100%;
height:25%;
font-size: 3rem;
text-align: left;
padding: 3rem;
color: white;
font-family: 'Lato', sans-serif;
font-weight: normal;
`
const Home = styled.div`
display: flex;
height:7rem;
width:7rem;
margin-right: 10px;
background-color: white;
border-radius: 100%;
justify-content: center;
align-items: center;
font-size: 1.5em;
text-align: center;
font-family: 'Lato', sans-serif;
letter-spacing: 3px;
`;
class contact extends Component
{
    constructor(props) {
        super(props);
        this.state = {card1:"0",card2:"-180"};
        this.toggle = this.toggle.bind(this);
    }
    toggle(ev) {
        var k = ev.target.id;
        console.log(k);
        if(k==="1")
        {this.setState(() => {return {card1:"-180",card2:"0"}
        })}
        else
        {  this.setState(() => {return {card1:"0",card2:"-180"}
        })}
    }
    render(){
        return(
            <ScrollContext>
                <Container>
                    <FormContainer rotate={this.state.card1}>
                        <Header>
                            Create Ticket
                        </Header>
                        <InputContainer>
                            <InputHeading>
                                Email
                            </InputHeading>
                            <InputEmail placeholder={"Enter Email"}/>
                        </InputContainer>
                        <OptionContainer>
                            <OptionHeading>
                                Choose a category
                            </OptionHeading>
                            <OptionBox>
                                <Option>
                                    Bank Transfer
                                </Option>
                                <Option>
                                    Transaction
                                </Option>
                            </OptionBox>
                            <OptionBox>
                                <Option>
                                    Verification
                                </Option>
                                <Option>
                                    Other
                                </Option>
                            </OptionBox>
                        </OptionContainer>
                        <IssueContainer>
                            <IssueHeading>
                                Issue Details
                            </IssueHeading>
                            <InputIssue />
                        </IssueContainer>
                        <UploadContainer>
                            <UploadHeading>
                                Attach a file
                            </UploadHeading>
                            <InputFile type={"file"}/>
                        </UploadContainer>
                        <ButtonRow>
                            <SendText>
                                SEND
                            </SendText>
                            <Send onClick={this.toggle} id={"1"}>
                                <SendIcon src={require("../../img/Header/paper-plane.svg")} onClick={this.toggle} id={"1"}/>
                            </Send>
                        </ButtonRow>
                    </FormContainer>
                    <Container2 rotate={this.state.card2}>
                        <ThankYou>
                            Thank You.
                        </ThankYou>
                        <NormalText>
                            We'll be in touch.<br/> Shortly !
                        </NormalText>
                        <ButtonRow>
                            <Home onClick={this.toggle} id={"2"}>
                                <SendIcon src={require("../../img/Header/home-icon-silhouette.svg")} onClick={this.toggle} id={"2"}/>
                            </Home>
                        </ButtonRow>
                    </Container2>
                </Container>
            </ScrollContext>);
    }
}


export default contact;
//----------------------------------Old Layout---------------------------------------------
import React from "react";
import styled from "styled-components";
import img from "../../img/image.png";
import Down from "./DownContent";
import Header from "../Header/header";

const BackgroundImage = styled.img`
position: fixed;
left: 48%;
height: 75vh;
width:65vw;
z-index: -1;
transform: translateY(-3%);
`
const ImageCropper = styled.div`
position: absolute; 
background-image:url(${img});
left: 25%;
z-index: 2;
height: 70vh;
width: 75vw;
background-size: cover;
transform: translateY(-4%);
`
const HiderBox =styled.div`
position: absolute;
top:69vh;;
height: 50vh;
width: 100vw;
background-color: white;
z-index: 2;
`
const Container = styled.div`
z-index: 4;
height: 80vh;
width: 100vw;
@media(max-width: 1000px){
visibility: hidden;
}
`;
const Line = styled.hr`
position: relative;
right:${props=>props.position};
transform: rotate(${props=>props.rotate}) translateX(${props=>props.transform});
opacity: ${props=>props.opacity};
;
`;

const TextBox = styled.div`
position:absolute;
height:60vh;
width:35vw;
background-color:white;
top:30vh;
left:25vh;
z-index: 2;
font-size: 19px;
color: gray;
font-family: 'Raleway', sans-serif; 
`
const Stext = styled.span`
color:#44CCFF;
font-size: 40px;
`

const RoundedButton = styled.div`
display: flex;
justify-content: flex-start;
align-content: flex-start;
height: 6vh;
width: 10vw;
padding: 5px;
border-radius: 10px;
background-color: #44CCFF;
margin-top: 50px;
`

const Layouts = (props)=> (<div>
    <Header/>
    <Container>
        <Line transform={"1%"} position={"78vh"} rotate={"90deg"} opacity={".3"}/>
        <Line transform={"-25%"} position={"67vh"} rotate={"90deg"} opacity={".3"}/>
        <BackgroundImage src={require("../../img/adult-bitcoin-blond-1037914.jpg")} />
        <ImageCropper/>
        <HiderBox/>
        <TextBox>
            <Stext>Get Started</Stext>
            <div style={{marginTop:"30px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  </div>
            <div style={{display:"flex",justifyContent:"space-between" ,width:"25vw"}}>
                <RoundedButton><img src={require("../../img/android-btn.svg")} style={{transform:"translateX(-30%)"}}/>
                    <span style={{color:"white",transform:"translateX(-120%) translateY(25%)"}}>Android</span></RoundedButton>
                <RoundedButton><img src={require("../../img/ios-btn.svg")} style={{transform:"translateX(-30%)"}}/>
                    <span style={{color:"white",transform:"translateX(-210%) translateY(25%)"}}>IOS</span></RoundedButton>
            </div>
        </TextBox>
    </Container>
    <Down/>
</div>);
export default Layouts;

//----------------------------------Old calculator---------------------------------------------

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