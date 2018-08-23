import React, { Component } from 'react';
import styled from "styled-components";
import Ques from "./Ques";
import "./style.css"
import Header from "../Header/header";
import Verification from "../verification/Verification";
import Footer from '../Footer/footer';
import { ScrollContext } from 'react-router-scroll-4';
import {Helmet} from "react-helmet";

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
background:linear-gradient(#101419, #3A506B)
`;
const HeadingText1 = styled.span`
font-size: 7rem;
text-align: center;
font-family: 'Lato', sans-serif;
color:white;
letter-spacing: 2px; 
@media(max-width: 500px){
font-size: 5rem;
}
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
const Faqs = () => (
    <ScrollContext>
    <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Bit7Pay|Faqs</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
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
    </Container>
    </ScrollContext>)


export default Faqs;