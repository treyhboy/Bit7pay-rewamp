import React from "react";
import styled from "styled-components";
import img from "../../img/image.png";
import Down from "./DownContent";
import Header from "../Header/header";
import ScrollAnimation from 'react-animate-on-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import img1 from "../../img/Header/concentric-circles.png";
import Pulse from 'react-reveal/Pulse';
import HeadShake from 'react-reveal/HeadShake';
import Roll from 'react-reveal/Roll';



const Container = styled.div`
position: relative;
height: 250vh;
width: 100%;
background-color: white;
z-index: 2;
`
const IconBoxRow = styled.div`
 display: flex;
 position: relative;
 flex-flow: row wrap;
 justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 10vh;
  z-index: 2;
  padding: 2vh 25vw;
`;
const IconBox = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
background-color: ${props=>props.color};
height:70%;
width: 9vw;
z-index: 2;
font-size: 30px;
padding: 0px 1vw;
color: #21252B;
border-right: ${props=>{return props.right||".1px" }} solid lightgray;
&:hover{
color: #F6AE2D;
}

`;
const ImageBox = styled.div`
display: flex;
flex-flow: row;
height: 100vh;
width: 50vw;
background-image: url(${img1});
background-size:cover;
`;

const TextBoxContainer = styled.div`
display: flex;
flex-flow: column ;
justify-content: center;
align-items: center;
height: 100vh;
width: 50vw;
`
const TextBox = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
align-content: space-between;
padding: 5vh;
height: 100%;
width: 40vw;
`
const IconText = styled.span`
font-size: 1.6rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
padding: 10px;
`
const ContentContainer = styled.div`
display: flex;
height:${props=>props.height};
width: 100%;
background-color: ${props=>props.color};
opacity:  ${props=>props.opacity};
padding: 13vh 0px ;
`
const HeadingText = styled.span`
font-size: 3rem;
text-align: center;
font-family: 'Raleway', sans-serif;
letter-spacing: 2px; 
`
const NormalText = styled.span`
font-size: 1.6rem;
text-align: center;
font-family: 'Raleway', sans-serif;
color: grey;
padding: 2vh 5vw;
`
const Heading = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
`
const HeadingIcon = styled.img`
height: 5vh;
width: 4vw;
padding: 1px;
`
const PhoneVer = styled.img`
position: relative;
height: ${props=>props.height};
width: ${props=>props.width};
top:${props=>props.top}
`



const Layout = (props) =>(

    <div>

    <Header/>
        <Container>

        <IconBoxRow>
            <IconBox>
                <ion-icon name="phone-portrait"></ion-icon>
                <IconText>Easy User Interface</IconText>
            </IconBox>
            <IconBox>
                <ion-icon name="help-circle-outline"></ion-icon>
                <IconText>Best In class Support</IconText>
            </IconBox>
            <IconBox>
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <IconText>Work very Easily done</IconText>
            </IconBox>
            <IconBox right={"0px"}>
                <ion-icon name="notifications-outline"></ion-icon>
                <IconText>Reminder for Everything</IconText>
            </IconBox>
        </IconBoxRow>


        <ContentContainer height={"90vh"}>

            <ImageBox>

                <PhoneVer src={require("../../img/Header/iphone_x_1.png")} height={"45%"} width={"35vw"} top={"45%"}/>
                    <Pulse forever duration={2000}>
                <PhoneVer src={require("../../img/Header/iphone_x_2.png")} height={"70%"} width={"15vw"}/>
                </Pulse>
            </ImageBox>
            <TextBoxContainer>
                <TextBox>
                    <Heading><HeadingIcon src={require("../../img/Header/pt-01.svg")}/> <HeadingText>14+ Cryptocurrencies</HeadingText></Heading>
                    <NormalText>Lorem ipsum dolor sit amet, agam mucius labores est at, ex minim utinam apeirian mei. Sonet quodsi sea te. Doming molestiae qui ea. Pri ei fastidii eloquentiam, vim at ullum sonet philosophia. Eloquentiam consequuntur mel cu.
                        Mel postea commune definitionem ex, in duo senserit moderatius instructior. Novum omnesque an quo, molestie consequuntur quo eu.
                    </NormalText>
                </TextBox>
                <Roll right cascade fraction={1} >
                <TextBox>
                    <Heading><HeadingIcon src={require("../../img/Header/pt-02.svg")}/><HeadingText>Encrypted Wallet</HeadingText></Heading>
                    <NormalText>Lorem ipsum dolor sit amet, agam mucius labores est at, ex minim utinam apeirian mei. Sonet quodsi sea te. Doming molestiae qui ea. Pri ei fastidii eloquentiam, vim at ullum sonet philosophia. Eloquentiam consequuntur mel cu.
                        Mel postea commune definitionem ex, in duo senserit moderatius instructior. Novum omnesque an quo, molestie consequuntur quo eu.
                    </NormalText>
                </TextBox>

                <TextBox>
                    <Heading><HeadingIcon src={require("../../img/Header/pt-03.svg")}/><HeadingText>Superior Support</HeadingText></Heading>
                    <NormalText>Lorem ipsum dolor sit amet, agam mucius labores est at, ex minim utinam apeirian mei. Sonet quodsi sea te. Doming molestiae qui ea. Pri ei fastidii eloquentiam, vim at ullum sonet philosophia. Eloquentiam consequuntur mel cu.
                        Mel postea commune definitionem ex, in duo senserit moderatius instructior. Novum omnesque an quo, molestie consequuntur quo eu.
                    </NormalText>
                </TextBox>
                </Roll>
            </TextBoxContainer>
        </ContentContainer>
            <Fade bottom duration={2000}>
            <ContentContainer color={"lightgray"} opacity={".6"} height={"94vh"}/>
            </Fade>
    </Container>

</div>
    );

export default Layout;