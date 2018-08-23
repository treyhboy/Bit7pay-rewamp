import React, { Component } from 'react';
import styled from "styled-components";
import img from "../../img/wallpaper2you_399423.jpg";
import {Helmet} from "react-helmet";

{/*
COLORS REQUIRED
Color 1 - #2EA0B8(dark Blue)
Color 2 - #71D2C1(Light Blue)
Icon plane - #71D2C1
Icon 2 - #5D5F90
Icon 3 - #2B97B2
Primary Text - #505050
Background Highlight - #F2F2F2


*/}
const Container = styled.div`
display:flex;
position:relative;
height: 200vh;  
width: 100vw;
background-color:#71D2C1;
z-index: 2;
`;
const ClipCrop =styled.div`
display:flex;
position:absolute;
height: 100vh;  
width: 100vw;
background-color:#2EA0B8;
clip-path: polygon(100% 0, 100% 55%, 71% 92%, 37% 29%, 55% 0);
z-index: 2;
`;
const BoxContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
position: relative;
height: 100vh;  
min-width: 80vw;
padding: 14rem;
z-index: 2;
@media(max-width: 800px)
{
padding: 40px;
}
`
const Box1 = styled.div`
display:flex;
height: 80vh;  
width: 75vw;
flex-grow: 1;
flex-shrink: 1;
margin: 1vh;
background-color: white;
z-index: 2;
`
const Box1Cropper = styled.div`
display:flex;
height: 80vh;  
width: 75vw;
flex-grow: 1;
flex-shrink: 1;
background-image: url(${img});
background-position: bottom;
background-size: auto;
clip-path: polygon(42% 0, 100% 0, 100% 40%, 78% 69%);
z-index: 2;
`

const Box2 = styled.div`
display:flex;
height: 40vh;
width: 35vw;
flex-grow: 1;
flex-shrink: 1;
margin: 1vh;
background-color: white;
z-index: 2;
`
const Box2Clipper = styled.div`
display:flex;
height: 40vh;
width: 35vw;
flex-grow: 1;
flex-shrink: 1;
background-image: url(${img});
background-position: bottom;
clip-path: polygon(50% 0, 100% 0, 100% 100%);
z-index: 2;
`
const Box3 = styled.div`
display:flex;
height: 40vh;
width: 35vw;  
margin: 1vh;
flex-grow: 1;
flex-shrink: 1;
background-color: white;
z-index: 2;
`
const Box3Clipper = styled.div`
display:flex;
height: 40vh;
width: 35vw;  
background-image: url(${img});
background-position: bottom;
flex-grow: 1;
flex-shrink: 1;
clip-path: polygon(30% 0, 60% 50%, 30% 100%, 0 100%, 0 0);

z-index: 2;
`
const BoxButton = styled.div`
position: relative;
height:10vh;
width: 10vh;
background-color: white;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
z-index: 100;
`
const ButtonRow  = styled.div`
position: absolute;
display: flex;
justify-content: space-around;
flex-flow: column;
height: 60vh;
width: 10vh;
transform: rotate(-42deg);
left:55%;
top: 14%;
z-index: 100;
`
const Row = styled.div`
position:absolute;
display: flex;
height: 8vh;
width: 33vh;
top:${props=>props.top};
left:${props=>props.left};
background-color: transparent;
z-index: 1000;
`
const BoxButton2 = styled.div`
position: relative;
height:8vh;
width: 8vh;
background-color: ${props=>props.color};
transform: rotate(-45deg) ;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
z-index: 100;
`
const TextBox = styled.div`
display: flex;
flex-flow: column;
position:absolute;
height:60em;
width:60em;
background-color: transparent;
`
const Stext = styled.span`
padding: 10vh 10vh 0vh 10vh;
color:#44CCFF;
font-size: 60px;
`
const P =styled.p`
padding: 5vh;
font-size: 20px;
color: grey;
`
class About extends Component
{
    render(){
        return(<Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <ClipCrop/>
            <BoxContainer>
                <Box1>
                    <TextBox>
                        <Stext> Intro</Stext>
                        <P>Lorem ipsum dolor sit amet, an petentium torquatos temporibus eam, vis accusam suscipit invidunt no. Mel efficiendi scripserit ei, ut ceteros suavitate repudiare ius. An eos diam luptatum, id qui quot purto corpora, diam mediocrem ad duo. No elitr fierent mea, illud indoctum expetendis duo et.</P>
                    </TextBox>
                    <ButtonRow>
                        <BoxButton>
                            <ion-icon name="logo-github" style={{fontSize:"60px",transform:"rotate(45deg)",margin:"10px",color:"#71D2C1"}}></ion-icon>
                        </BoxButton>
                        <BoxButton>
                            <ion-icon name="logo-google" style={{fontSize:"60px",transform:"rotate(45deg)",margin:"10px",color:"orange"}}></ion-icon>
                        </BoxButton>
                        <BoxButton>
                            <ion-icon name="logo-instagram" style={{fontSize:"60px",transform:"rotate(45deg)",margin:"10px",color:"purple"}}></ion-icon>
                        </BoxButton>
                    </ButtonRow>
                    <Box1Cropper></Box1Cropper>
                </Box1>
            <Box2>
            <Box2Clipper/>
            </Box2>
            <Box3>

                <Box3Clipper/>
            </Box3>
                <Row top={"104vh"} left={"65%"}>
                    <BoxButton2 color={"#71D2C1"}>
                        <ion-icon name="logo-github" style={{fontSize:"40px",transform:"rotate(45deg)",margin:"10px",color:"white"}}></ion-icon>
                    </BoxButton2>
                    <div style={{position:"relative",
                        display: "flex",
                        height: "7vh",
                        width: "33vh",
                        backgroundColor:"gray",
                        transform:"translateX(-12px) translateY(5px)",
                        opacity:".1",
                        clipPath:"polygon(88% 0, 100% 52%, 88% 100%, 0 100%, 0 0)"

                    }}>

                    </div>
                </Row>
                <Row top={"117vh"} left={"70%"}><BoxButton2 color={"orange"}>
                    <ion-icon name="logo-google" style={{fontSize:"40px",transform:"rotate(45deg)",margin:"10px",color:"white"}}></ion-icon>
                </BoxButton2 >
                    <div style={{position:"relative",
                        display: "flex",
                        height: "7vh",
                        width: "33vh",
                        backgroundColor:"gray",
                        transform:"translateX(-12px) translateY(5px)",
                        opacity:".1",
                        clipPath:"polygon(88% 0, 100% 52%, 88% 100%, 0 100%, 0 0)"
                    }}>
                    </div>
                </Row>
                <Row top={"130vh"} left={"65%"}><BoxButton2 color={"purple"}>
                    <ion-icon name="logo-instagram" style={{fontSize:"40px",transform:"rotate(45deg)",margin:"10px",color:"white"}}></ion-icon>
                </BoxButton2>
                    <div style={{position:"relative",
                        display: "flex",
                        height: "7vh",
                        width: "33vh",
                        backgroundColor:"gray",
                        transform:"translateX(-12px) translateY(5px)",
                        opacity:".1",
                        clipPath:"polygon(88% 0, 100% 52%, 88% 100%, 0 100%, 0 0)"
                    }}>
                    </div>
                </Row>
            </BoxContainer>
        </Container>);
    }
}

export default About;