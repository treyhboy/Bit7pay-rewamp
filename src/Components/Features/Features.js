import React from "react";
import styled,{keyframes} from "styled-components";
import Header from "../Header/header";
import img from "../../img/features/bg-1.jpg";
import Verification from "../verification/Verification";
import Footer from "../Footer/footer";
import Fade from "react-reveal";
import { ScrollContext } from 'react-router-scroll-4';

const Container = styled.div`
display: flex;
flex-flow: column;
height:100%;
width:100%;  
background-color: gray;
z-index: 12;
`
const Section1 = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height:35rem;
width:100%;  
padding: 3rem 10rem;
background-color: white;
z-index: 12;
@media(max-width: 1025px){
padding:0px;
height:30rem;
}
`
const Section2 = styled.div`
display: flex;
flex-flow: column;
height:120rem;
width:100%;  
background-color: #ECECF4;
z-index: 12;
@media(max-width: 1025px){
height:90rem;
}
`
const Section3 = styled.div`
display: flex;
flex-flow: column;
align-items: flex-end;
height:160rem;
width:100%;  
background:url(${img}) no-repeat center;
background-size: cover;
z-index: 12;
@media(max-width: 1025px){
height:110rem;
justify-content: space-between;
}
`
const Section4 = styled.div`
display: flex;
height:90rem;
width:100%;  
background-color: #ECECF4;
z-index: 12;
@media(max-width: 1025px){
height: 45rem;

}
`
const TextContainer = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
height: 34rem;
width: 60rem;
margin-left: ${props=>props.left};
margin-right: ${props=>props.right};
margin-top: ${props=>props.top};
@media(max-width: 1025px){
width: 100%;
margin: 0px;
padding: 2rem;
}
`;
const IconBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 34rem;
width: 24%;
padding: 2rem;
@media(max-width: 1025px)
  {
  height: 24rem;
width: 30%;  
  }
`
const Icon = styled.img`
height: 100%;
width: 100%;
margin-bottom: 2rem;

`
const TextBox = styled.div`
display: flex;
position: relative;
flex-flow: column;
justify-content: center;
align-items: center;
align-content: space-between;
height: 34rem;
width: 76%;
padding-left:3rem;
@media(max-width: 500px){
width: 70%;
padding-left:1rem;
}
`;
const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 2.5rem;
font-weight: 100;
color: ${props=>props.color||"#fff"};
text-align: left;
opacity:${props=>props.op} ;
letter-spacing: 1px;
padding: 3rem 0rem;
font-family: 'Lato', sans-serif;

`;
const Heading = styled.div`
display: flex;
color: ${props=>props.color};
font-size: 5rem;
text-align: left;
font-weight:300;
font-family: 'Lato', sans-serif;
letter-spacing: 3px; 
@media(max-width: 1025px){
font-size: 4rem;
}
`;
const ImageRow = styled.div`
display: flex;
flex-flow: row;
width: 100%;
height: 80rem;
@media(max-width: 1025px){
height: 60rem;
justify-content: center;
align-items: center;
overflow: hidden;
}
`;
const IphoneSection2 = styled.img`
height: 100rem;
width: auto;
transform:translateY(-25%);
@media(max-width: 1025px){
display: none;
}
`
const PhonesSection2 = styled.img`
height: 80rem;
width: auto;
padding: 5rem 0px;
transform:translateX(10%);
@media(max-width: 1025px){
height: 55rem;
transform:translateY(0);
padding: 0px;
}
`
const ImageRowSec3 = styled.div`
display: flex;
flex-flow: row;
width: 100%;
height: 110rem;
@media(max-width: 1025px){
height: 60rem;
justify-content: center;
align-items: center;
}
`;
const IphoneSection3 = styled.img`
height: 115rem;
width: auto;
transform:translateY(-40%) translateX(17%);
@media(max-width: 1025px){
height: 58rem;
transform:translateY(0%) translateX(-10%);
}
`
const Iphone2Section3 = styled.img`
height: 100rem;
width: auto;
@media(max-width: 1025px){
display: none;
}
`
const ImageRowSec4 = styled.div`
display: flex;
flex-flow: row;
width: 100%;
height: 110rem;
@media(max-width: 1025px){
height: 45rem;
justify-content: center;
align-content: center;
}
`;
const IphoneSection4 = styled.img`
height: 100rem;
width: auto;
transform:translateY(-25%) translateX(-10%);
z-index: 10;
@media(max-width: 1025px){
height: 40rem;
transform:translateY(0%) translateX(0%) ;
}
`
const Iphone2Section4 = styled.img`
height: 80rem;
width: auto;
transform:translateY(-8%) translateX(-65%) ;
z-index: 10;
@media(max-width: 1025px){
height: 35rem;
transform:translateY(15%) translateX(-50%) ;
}
`
const PlaneSection4 = styled.img`
height: 95rem;
width: auto;
transform:translateY(-10%) translateX(-85%) ;
z-index: 1;
@media(max-width: 1025px){
display: none;
}
`
const BitcoinSec4 = styled.img`
height: 28rem;
width: auto;
transform:translateY(-40%) translateX(-102rem) ;
z-index: 4;
@media(max-width: 1025px){
display: none;
}
`
const Secend =styled.div`
height: 100%;
width: 100%;
display: flex;
@media(max-width: 1025px){
display: none;
}
`


const Features = (props)=>(<ScrollContext >
    <Container>
    <Header back={"linear-gradient(to right,#101419, #3A506B)"} pos={"0px"} text={"Features"}/>
    <Section1>
        <Fade right>
        <TextContainer>
            <IconBox>
                <Icon src={require("../../img/features/one.svg")}/>
            </IconBox>
            <TextBox >
                <Heading>
                    Onboarding made easy
                </Heading>
                <Text color={"black"} op={.5}>
                    Join Bit7Pay and get your account verified by submitting your KYC details directly from your Bit7Pay App
                </Text>
            </TextBox>
        </TextContainer>
        </Fade>
    </Section1>
    <Section2>
        <ImageRow>
            <Fade left>
            <IphoneSection2 src={require("../../img/features/Section2-Single-Iphone.png")}/>
            </Fade>
            <PhonesSection2 src={require("../../img/features/verification-mockups.png")}/>
        </ImageRow>
        <Fade left>
        <TextContainer left={"8rem"}>
            <IconBox>
                <Icon src={require("../../img/features/two.svg")}/>
            </IconBox>
            <TextBox>
                <Heading>
                    Choose from 14+ coins
                </Heading>
                <Text color={"black"} op={.5}>
                    Buy different coins and build your crypto portfolio with Bit7Pay. You can sell your coins anytime too.
                </Text>
            </TextBox>
        </TextContainer>
        </Fade>
    </Section2>
    <Section3>
        <ImageRowSec3>
            <Fade left>
            <Iphone2Section3 src={require("../../img/features/iphone_x_flat_mockup-2.png")}/>
            </Fade>
            <Fade right>
            <IphoneSection3 src={require("../../img/features/iphone_x_flat_mockup-3-Sect-3.png")}/>
            </Fade>
        </ImageRowSec3>
        <Fade right>
        <TextContainer right={"10rem"} top={"5rem"}>
            <IconBox>
                <Icon src={require("../../img/features/three.svg")}/>
            </IconBox>
            <TextBox>
                <Heading color={"#fff"}>
                    Low Fees.<br/>
                    Fast Transaction.
                </Heading>
                <Text op={.5}>
                    You can send your coins to any valid address. We charge minimal fees for outgoing transaction and ZERO fees if send coins to another Bit7Pay user
                </Text>
            </TextBox>
        </TextContainer>
        </Fade>
    </Section3>
    <Section4>
        <ImageRowSec4>
            <IphoneSection4 src={require("../../img/features/iphone_x_flat_mockup-4.png")}/>
            <Iphone2Section4 src={require("../../img/features/iphone_x_flat_mockup-5.png")}/>
            <PlaneSection4 src={require("../../img/features/circle-send.png")}/>
            <BitcoinSec4 src={require("../../img/features/bitcoins.svg")}/>
        </ImageRowSec4>
    </Section4>
    <Secend>
    <Verification/>
    </Secend>
    <Footer/>
    </Container>
</ScrollContext>)
export default Features;
