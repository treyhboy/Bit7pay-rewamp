import React from "react";
import styled from "styled-components";
import img from "../../img/image.png";
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

const Layouts = (props)=> (<Container>
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
    </Container>);

export default Layouts;
