import React, { Component } from 'react';
import styled from "styled-components";
import {Route,Switch,NavLink} from 'react-router-dom';
import Ques from "./Ques";
import "./style.css"
import Header from "../Header/header";
import Verification from "../verification/Verification";
import Footer from '../Footer/footer';


const Container = styled.div`
display: flex;
flex-flow: column;
position: relative;
height: 100%;
width: 100%;
background-color: white;
z-index: 2;
`;
const HeadingContainer = styled.div`
width:100%;
height:100%;
flex-flow: column;
justify-content: center;
background:linear-gradient(to right,#000428,#004e92)
`;
const CoinScrollContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items:center ;
height: 20em;
width: 100%;
@media(max-width: 500px){
height: 15em;
}
`
const HeadingText3 = styled.span` 
font-size: 2rem;
text-align: center;
font-family: 'Lato', sans-serif; 
color:white;
letter-spacing: 2px; 
`
const IconRow = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: row;
height: 16em;
width: 100%;
@media(max-width: 500px){
height: 10em;
}
`
const IconBox = styled.div`
height: 100%;
width: 100%;
opacity: .5;
`
const Icon =styled.img`
display: flex;
height: 80%;
width: 80%;
position: relative;
`
const HeadingText1 = styled.span`
font-size: 7rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:white;
letter-spacing: 2px; 
@media(max-width: 500px){
font-size: 5rem;
}
`
const Bold = styled.span`
font-weight: bolder;
`
const Light = styled.span`
font-weight: lighter;
`
const Heading = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-flow: row;
justify-content: center;
align-items:center ;
padding: 50px;
@media(max-width: 500px){
padding: 0px 10px 30px 10px;
}

`
const Faqs = () => (<Container>
    <HeadingContainer>
        <Header/>
        <Heading>
            <HeadingText1>
                FAQs
            </HeadingText1>
        </Heading>
    </HeadingContainer>
    <Ques/>
    <Verification/>
    <Footer/>

</Container>)


export default Faqs;