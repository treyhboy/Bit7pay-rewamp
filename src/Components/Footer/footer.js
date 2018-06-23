import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import styled from "styled-components";
import "./style.css";

const Container = styled.footer`
display: flex;
justify-content: center;
flex-flow: column;
align-items:center ;
height: 35rem;
width:100%;   
position: relative;
//background-color: #F6F6F6;
background: linear-gradient(to right,#141E30,#243B55);
@media(max-width:600px){
height: 27rem;
}

`
const HeadContainer = styled.div`
display: flex;
justify-content: center;
align-items:center ;
height: 10rem;
width:100%;   
padding: 2rem 0px;
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
height: 8rem;
width:100%;   
@media(max-width:600px){
height: 8rem;
padding: 2rem;
}
`
const Logo = styled.img`
display: flex;
justify-content: center;
align-items:center ;
height: 6rem;
width:auto; 
@media(max-width:600px){
height: 5rem;
padding: 0px;
}
`
const Icon = styled.img`
display: flex;
justify-content: center;
align-items:center ;
height: 4.5rem;
width:auto; 
padding: 0px 2rem;
transition: .3s;
&:hover{
height: 5.5rem;
}
@media(max-width:600px){
height: 4rem;
padding: 0px 1rem;
}
`
const LinkRow = styled.div`
display: flex;
flex-flow: row;
height: 100%;
width:100%;   
padding: 0px 8rem;
@media(max-width:800px){
padding: 0px;
}
`
const LinkCol = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
align-items:center ;
height: 100%;
width:35%;   
padding: 2rem;
@media(max-width:600px){
padding: 0px;
width:100%;  
height: 10rem; 
}
@media(max-width:800px){
padding: 0px;
 
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
height:100%;
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
padding: 2rem;
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
@media(max-width: 600px){
display: none;
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
@media(max-width: 600px){
padding: 0px;
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
                <LinkRow>
                <LinkCol>
                    <Link to='/'  ><LinkText>Home</LinkText></Link>
                    <Link to='/news' ><LinkText>News</LinkText></Link>
                    <Link to='/features' ><LinkText>Features</LinkText></Link>
                </LinkCol>
                <LinkCol>
                    <Link to='/Faqs' ><LinkText>FAQs</LinkText></Link>
                    <Link to='/whatis' ><LinkText>Coins</LinkText></Link>
                    <Link to='/contact' ><LinkText>Contact Us</LinkText></Link>
                </LinkCol>
                </LinkRow>
                <ContactCol>
                    <SubscribeBox>
                    <InputEmail/>
                        <SubscribeButton>Subscribe Now</SubscribeButton>
                    </SubscribeBox>
                    <ContactText>
                        <LinkText>Email - contact@bit7pay.com</LinkText>
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