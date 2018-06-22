import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import styled from "styled-components";
import "./style.css";

const Container = styled.footer`
display: flex;
justify-content: center;
flex-flow: column;
align-items:center ;
height: 50rem;
width:100%;   
position: relative;
//background-color: #F6F6F6;
background: linear-gradient(to right,#141E30,#243B55);
@media(max-width:600px){
height: 45rem;
}

`
const HeadContainer = styled.div`
display: flex;
justify-content: center;
align-items:center ;
height: 6rem;
width:100%;   
`
const MainContent =styled.div`
display: flex;
justify-content: center;
align-items:center ;
height: 25rem; 
width:100%;   
@media(max-width:600px){
flex-flow: column;
}
`
const IconRow = styled.div`
display: flex;
justify-content: center;
align-items:center ;
height: 12rem;
width:100%;   
@media(max-width:600px){
height: 6rem;
}
`
const Logo = styled.img`
display: flex;
justify-content: center;
align-items:center ;
height: 7rem;
width:auto; 
padding: 0px 3rem;
@media(max-width:600px){
height: 5rem;
padding: 0px;
transform: translateY(-30%);
}
`
const Icon = styled.img`
display: flex;
justify-content: center;
align-items:center ;
height: 6rem;
width:auto; 
padding: 0px 2rem;
opacity: .6;
&:hover{
opacity: 1;
}
@media(max-width:600px){
height: 4rem;
}
`
const LinkCol = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
align-items:center ;
height: 25rem;
width:50%;   
padding: 2rem;
@media(max-width:600px){
padding: 0px;
height: 30rem;
}
`
const ContactText = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
align-items:center ;
height: 100%;
width:100%;   
@media(max-width: 800px){
display: none;
}
`
const ContactCol = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items:center ;
height: 25rem;
width:50%;   
padding: 2rem;
@media(max-width: 800px){
padding: 0px;
}
`
const LinkText = styled.span`
font-size: 2rem;
text-align: center;
text-decoration: none;
font-weight: 200;
font-family: 'Lato', sans-serif;
color:white;
&:hover{
color:#009ffd;
}
@media(max-width: 800px){
padding: 1rem;
}
`
const InputEmail = styled.input`
  padding: 0px 1rem ;
  color: grey;
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  border: none;
  border-bottom:solid white;
  background-color: transparent;
  height: 4rem;
  width: 20rem;
  &:focus{
  border: none;
  border-bottom:solid gray;
  box-shadow: none;
  text-decoration: none;
  outline: none;
  }
@media(max-width: 800px){
height: 4rem;
width: 15rem;
}
`
const SubscribeBox = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items:center ;
padding-left: 13rem;
@media(max-width: 800px){
padding: 0px;
}
`
const SubscribeButton = styled.div`
display: flex;
height: 3.5rem;
width: 12rem;
border: solid #009ffd;
border-radius: 2rem;
justify-content: center;
align-items: center;
font-size: 1.2em;
margin: 1rem;
text-align: center;
font-family: 'Lato', sans-serif;
color:#009ffd;
letter-spacing: 1px; 
transition: .5s;
&:hover{
background-color: #009ffd;
color: white;
border: solid #009ffd;
}

`
const EndText = styled.div`
display: flex;
height: 2rem;
width: 100%;
justify-content: center;
align-items: center;
font-size: 1.2em;
margin: 1rem;
text-align: center;
font-family: 'Lato', sans-serif;
color:lightgray; 
`
class Footer extends Component
{
    render(){
        return(<Container>
            <HeadContainer>
                <Logo src={require("../../img/footer/logo-gradient.svg")}/>
            </HeadContainer>
            <MainContent>
                <LinkCol>
                    <Link to='/'  ><LinkText>Home</LinkText></Link>
                    <Link to='/news' ><LinkText>News</LinkText></Link>
                    <Link to='/features' ><LinkText>Features</LinkText></Link>
                    <Link to='/Faqs' ><LinkText>FAQs</LinkText></Link>
                    <Link to='/whatis' ><LinkText>Coins</LinkText></Link>
                    <Link to='/contact' ><LinkText>Contact Us</LinkText></Link>
                </LinkCol>
                <ContactCol>
                    <SubscribeBox>
                    <InputEmail/>
                        <SubscribeButton>Subscribe Now</SubscribeButton>
                    </SubscribeBox>
                    <ContactText>
                        <LinkText>Contact Us</LinkText>
                        <LinkText>Email - contact@bit7pay.com</LinkText>
                        <LinkText>Customer Care - 01243239449</LinkText>
                    </ContactText>
                </ContactCol>
            </MainContent>
            <IconRow>
                <Icon src={require("../../img/footer/social/Facebook.png")}/>
                <Icon src={require("../../img/footer/social/Google+.png")}/>
                <Icon src={require("../../img/footer/social/Instagram.png")}/>
                <Icon src={require("../../img/footer/social/Twitter.png")}/>
                <Icon src={require("../../img/footer/social/Youtube.png")}/>
            </IconRow>
            <EndText>@Bit7Pay.All rights reserved</EndText>

        </Container>);
    }
}

export default Footer;