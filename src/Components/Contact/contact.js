import React, { Component } from 'react';
import styled from "styled-components";
import { ScrollContext } from 'react-router-scroll-4';
import Header from "../Header/header";
import {toast} from 'react-toastify';

const Container = styled.div`
display: flex;
flex-flow: column;
width:100%;
height:100%;
`
const MainContent = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100%;
height:100%;
@media(max-width: 1025px){
flex-flow:column;
}
`
const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: column;
width:50%;
height:90vh;
@media(max-width: 1025px){
width:100%;
height:100%;
text-align: center;
}
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
@media(max-width: 1025px){
height:20rem;
font-size: 7rem;

}

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
@media(max-width: 1025px){
padding:0px;
height:10rem;
width:50%;
font-size: 2.5rem;
align-items: center;  
}

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
@media(max-width: 1025px){
padding:0px;
height:12rem;
width:50%;
}
`
const LocationBoxRow = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-flow: row;
width:50%;
padding: 1rem 0px;
@media(max-width: 1025px){

justify-content:center;
width:60vw;
}
`
const LocationBoxImage = styled.img` 
display: flex;
align-items: center;
justify-content: center;
width:2.5rem;
height:2.5rem;
@media(max-width: 1025px){
width:2.5rem;
height:2.5rem;
}
`
const LocationBoxText = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-left: 2rem;
font-size: 1.6rem;
font-family: 'Lato', sans-serif;
@media(max-width: 1025px){
padding-left:1rem;
}
`
const CoinImageRow = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: row;
width:100%;
padding: 0px 3rem;
height:16rem;
@media(max-width: 1025px){
height:10rem;
}
`
const CoinImageBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100%;
height:12rem;
@media(max-width: 1025px){
height:10rem;
}
`
const CoinImage = styled.img`
display: flex;
align-items: center;
justify-content: center;
width:auto;
height:12rem;
@media(max-width: 1025px){
height:7.5rem;
}
`
const FormContainer = styled.div`
display: flex;
flex-flow: column;
padding: 5rem 0px;
width:50%;
height:90vh;
@media(max-width: 1025px){
width:100%;
height:100%;
text-align: center;
}
`
const InputContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:11rem;
padding: 1rem 15rem;
@media(max-width: 1025px){
padding: 1rem 8rem;
}
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
`;
const InputCatagory = styled.select`
font-size: 2rem;
color: #BDCCDB;
font-family: 'Lato', sans-serif;
height: 5rem;
width: 100%;
box-shadow: none;
border: none;
border-bottom: solid #9f9fa3 2px;
background-color: transparent;
outline: none;
font-weight: lighter;

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
@media(max-width: 1025px){
padding: 1rem 8rem;
}
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
@media(max-width: 1025px){
padding: 1rem 8rem;
height:10rem;
justify-content: center;
}
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
height: 5rem;
width: 20rem;
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
        this.state = {card1:"0",card2:"-180",email:"",category:"",issue:"",status:true};
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

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
    handleChange(e){
        var res = e.target.value;
        var val = e.target.id;
        console.log(val);
        console.log(res);
        if(val === "Email")
            this.setState({email:res});
        if(val === "Cat")
            this.setState({category:res});
        if(val === "Issue")
            this.setState({issue:res});
    }
    handleClick(ev){
        fetch(`https://api.bit7pay.com/bit7pay/public/api/createPublicTicket?email=${this.state.email}&issue=${this.state.issue}&category=${this.state.category}&secret=fdbkb485476dDGF45tfgi`,{method:'POST'})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if(result.status==="success")
                        toast.success(" Ticket Created",
                        {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 2000,
                            closeButton: false // Remove the closeButton
                        });
                    else
                        toast.error(result.message,
                            {
                                position: toast.POSITION.TOP_RIGHT,
                                autoClose: 2000,
                                closeButton: false // Remove the closeButton
                            });

                },
                (error) => {
                    this.setState({
                        status:false
                    });
                }
            )
    }
    render(){
        return(
            <ScrollContext>
            <Container>
                <Header back={"linear-gradient(to right,#101419,#3A506B)"} pos={"0px"} text={"Contact Us"} />
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
                                    support@bit7pay.com
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
                            <InputEmail placeholder={"Enter Name"} id={"Name"}/>
                        </InputContainer>
                        <InputContainer>
                            <InputHeading>
                                EMAIL
                            </InputHeading>
                            <InputEmail placeholder={"Enter Email"} value={this.state.email} id={"Email"} onChange={this.handleChange}/>
                        </InputContainer>
                        <InputContainer>
                            <InputHeading>
                                CATEGORY
                            </InputHeading>
                            <InputCatagory placeholder={"Enter Category"} value={this.state.category} id={"Cat"} onChange={this.handleChange}>
                                <option value={1}>Bank Transfer</option>
                                <option value={2}>Transaction</option>
                                <option value={3}>Verification</option>
                                <option value={4}>Other</option>
                            </InputCatagory>
                        </InputContainer>
                        <IssueContainer>
                            <IssueHeading>
                                DETAILS
                            </IssueHeading>
                            <InputIssue  id={"Issue"} value={this.state.issue} onChange={this.handleChange}/>
                        </IssueContainer>
                        <ButtonContainer>
                        <Button onClick={this.handleClick}>
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