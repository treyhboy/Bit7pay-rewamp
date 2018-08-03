import React, { Component } from 'react';
import styled from "styled-components";
import { FlexyFlipCard } from 'flexy-flipcards';
import { ScrollContext } from 'react-router-scroll-4';
import Header from "../Header/header"

const Container = styled.div`
display: flex;
flex-flow: column;
width:100%;
height:100%;
`
const MainContent = styled.div`
display: flex;
width:100vw;
height:100%;

`
const TextContainer = styled.div`
display: flex;
flex-flow: column;
width:50%;
height:90vh;

`
const TextHeading = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 900;
width:100%;
height:28rem;
font-size: 9rem;
font-family: 'Lato', sans-serif;
color: #101419;
`
const TextNormal = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width:100%;
height:3rem;
font-size: 3rem;
font-family: 'Lato', sans-serif;
color: #101419;
`
const LocationBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: column;
width:100%;
height:20rem;
padding: 2rem 0px;
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #9f9fa3;
`
const LocationBoxRow = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-flow: row;
width:50%;
padding: 1rem 0px;
`
const LocationBoxImage = styled.img` 
display: flex;
align-items: center;
justify-content: center;
width:2.5rem;
height:2.5rem;
`
const LocationBoxText = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-left: 2rem;
font-size: 2rem;
font-family: 'Lato', sans-serif;
`
const CoinImageRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: row;
width:100%;
padding: 0px 3rem;
height:16rem;
`
const CoinImageBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100%;
height:16rem;
`
const CoinImage = styled.img`
display: flex;
align-items: center;
justify-content: center;
width:auto;
height:12rem;
`
const FormContainer = styled.div`
display: flex;
flex-flow: column;
padding: 5rem 0px;
width:50%;
height:90vh;
`
const InputContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:11rem;
padding: 1rem 15rem;
`
const InputHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:3rem;
font-size: 1.6rem;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
color: #9f9fa3;
`
const InputEmail = styled.input`
font-size: 2rem;
color: #282D31;
font-family: 'Lato', sans-serif;
height: 5rem;
width: 100%;
box-shadow: none;
border: none;
border-bottom: solid #9f9fa3 2px;
outline: none;
::placeholder{
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #BDCCDB;
font-weight: lighter;
}

@media(max-width: 800px){
margin:1rem 0px;
}
`;
const IssueContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:15rem;
padding: 0px 15rem;
color: #9f9fa3;
`
const IssueHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:4rem;
font-size: 1.6rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;

`
const InputIssue = styled.textarea`
font-size: 2rem;
color: #282D31;
font-family: 'Lato', sans-serif;
height: 10rem;
width: 100%;
box-shadow: none;
border: solid #9f9fa3 2px;
outline: none;
::placeholder{
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #BDCCDB;
}
`;
const ButtonContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width:100%;
height:15rem;
padding: 0px 15rem;
color: #BDCCDB;
`
const Button =styled.div`
display: flex;
height: 5rem;
width: 20rem;
justify-content: center;
align-items: center;
background: linear-gradient(to right,#2AF598,#009EFD);
border-radius: 10rem;
cursor: pointer;
box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .3);
&:active{
box-shadow: 0 0rem 0rem rgba(0, 0, 0, .3);
transform: translateY(4px);
}
@media(max-width: 800px){
height: 8rem;
width: 25rem;
}
`
const ButtonText = styled.span`
font-size: 2rem;
font-family: 'Lato', sans-serif; 
color: white;
font-weight: lighter;
@media(max-width: 800px){
font-size: 2rem;
}
`
class contact extends Component
{
    constructor(props) {
        super(props);
        this.state = {card1:"0",card2:"-180"};
        this.toggle = this.toggle.bind(this);
    }
toggle(ev) {
        var k = ev.target.id;
        console.log(k);
    if(k==="1")
        {this.setState(() => {return {card1:"-180",card2:"0"}
    })}
    else
        {  this.setState(() => {return {card1:"0",card2:"-180"}
        })}
}
    render(){
        return(
            <ScrollContext>
            <Container>
                <Header back={"linear-gradient(to right,#101419,#3A506B)"} text={"Contact"} pos={"relative"}/>
                <MainContent>
                    <TextContainer>
                        <TextHeading>
                            GET IN<br/> TOUCH
                        </TextHeading>
                        <TextNormal>
                            WHAT ARE YOU WAITING FOR ?
                        </TextNormal>
                        <LocationBox>
                            <LocationBoxRow>
                                <LocationBoxImage src={require("../../img/contact/email.svg")}/>
                                <LocationBoxText>
                                    Support@bit7pay.com
                                </LocationBoxText>
                            </LocationBoxRow>
                            <LocationBoxRow>
                                <LocationBoxImage src={require("../../img/contact/location.svg")}/>
                                <LocationBoxText>
                                    3m/1 Tagore Town,Allahabad - 211002 ,Uttar Pradesh,India
                                </LocationBoxText>
                            </LocationBoxRow>
                        </LocationBox>
                        <CoinImageRow>
                            <CoinImageBox>
                                <CoinImage src={require("../../img/contact/coin-chain.png")}/>
                            </CoinImageBox>
                        </CoinImageRow>
                    </TextContainer>
                    <FormContainer>
                        <InputContainer>
                            <InputHeading>
                                NAME
                            </InputHeading>
                            <InputEmail placeholder={"Enter Name"}/>
                        </InputContainer>
                        <InputContainer>
                            <InputHeading>
                                EMAIL
                            </InputHeading>
                            <InputEmail placeholder={"Enter Email"}/>
                        </InputContainer>
                        <InputContainer>
                            <InputHeading>
                                CATEGORY
                            </InputHeading>
                            <InputEmail placeholder={"Enter Category"}/>
                        </InputContainer>
                        <IssueContainer>
                            <IssueHeading>
                                DETAILS
                            </IssueHeading>
                            <InputIssue />
                        </IssueContainer>
                        <ButtonContainer>
                        <Button>
                            <ButtonText>
                                SUBMIT
                            </ButtonText>
                        </Button>
                        </ButtonContainer>
                    </FormContainer>
                </MainContent>
        </Container>
            </ScrollContext>);
    }
}


export default contact;