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
left: 20%;
z-index: 2;
height: 75vh;
width: 80vw;
background-size: cover;
transform: translateY(-3%);
`
const HiderBox =styled.div`
position: absolute;
top:75vh;;
height: 27vh;
width: 100vw;
background-color: white;
z-index: 4;
`
const Container = styled.div`
z-index: 4;
height: 100vh;
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
height:30vh;
width:35vw;
background-color: #5FAD56;
top:45vh;
left:25vh;
z-index: 2;
`

const Layouts = (props)=> (<Container>
    <Line transform={"1%"} position={"78vh"} rotate={"90deg"} opacity={".3"}/>
    <Line transform={"-25%"} position={"67vh"} rotate={"90deg"} opacity={".3"}/>
    <BackgroundImage src={require("../../img/adult-bitcoin-blond-1037914.jpg")} />
    <ImageCropper/>
    <HiderBox/>
    {/*<TextBox/>*/}
    </Container>);

export default Layouts;
