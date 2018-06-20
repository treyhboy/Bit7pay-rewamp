import React from "react";
import styled,{keyframes} from "styled-components";
import Header from "../Header/header";
import img from "../../img/features/bg-1.jpg";
import Verification from "../verification/Verification";
import Footer from "../Footer/footer";
import Fade from "react-reveal";

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
`
const Section2 = styled.div`
display: flex;
flex-flow: column;
height:120rem;
width:100%;  
background-color: #ECECF4;
z-index: 12;
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
`
const Section4 = styled.div`
display: flex;
height:90rem;
width:100%;  
background-color: #ECECF4;
z-index: 12;
`
const TextContainer = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
height: 30rem;
width: 56rem;
margin-left: ${props=>props.left};
margin-right: ${props=>props.right};
margin-top: ${props=>props.top};
@media(max-width: 500px){
width: 100%;
}
`;
const IconBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 30rem;
width: 22%;
padding: 2rem;
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
height: 30rem;
width: 78%;
padding-left:3rem;
@media(max-width: 500px){
width: 100%;
padding: 0px;
}
`;
const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
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
font-size: 4.8rem;
text-align: left;
font-weight:300;
font-family: 'Lato', sans-serif;
letter-spacing: 3px; 
`;
const ImageRow = styled.div`
display: flex;
flex-flow: row;
width: 100%;
height: 80rem;
`;
const IphoneSection2 = styled.img`
height: 100rem;
width: auto;
transform:translateY(-25%);
`
const PhonesSection2 = styled.img`
height: 80rem;
width: auto;
padding: 5rem 0px;
transform:translateX(10%);
`
const ImageRowSec3 = styled.div`
display: flex;
flex-flow: row;
width: 100%;
height: 110rem;
`;
const IphoneSection3 = styled.img`
height: 115rem;
width: auto;
transform:translateY(-40%) translateX(17%) ;
`
const Iphone2Section3 = styled.img`
height: 100rem;
width: auto;
`
const ImageRowSec4 = styled.div`
display: flex;
flex-flow: row;
width: 100%;
height: 110rem;
`;
const IphoneSection4 = styled.img`
height: 100rem;
width: auto;
transform:translateY(-25%) translateX(-10%);
z-index: 10;
`
const Iphone2Section4 = styled.img`
height: 80rem;
width: auto;
transform:translateY(-8%) translateX(-65%) ;
z-index: 10;
`
const PlaneSection4 = styled.img`
height: 95rem;
width: auto;
transform:translateY(-10%) translateX(-85%) ;
z-index: 1;
`
const BitcoinSec4 = styled.img`
height: 28rem;
width: auto;
transform:translateY(-40%) translateX(-102rem) ;
z-index: 4;
`



const Features = (props)=>(<Container>
    <Header back={"linear-gradient(to right,#101419,#3A506B)"} pos={"0px"}/>
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
    <Verification/>
    <Footer/>
    </Container>)
export default Features;
