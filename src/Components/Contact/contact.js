import React, { Component } from 'react';
import styled from "styled-components";
import { FlexyFlipCard } from 'flexy-flipcards';
import { ScrollContext } from 'react-router-scroll-4';

const Container = styled.div`
display: flex;
width:100%;
height:100vh;
padding: 20rem;
align-items: center;
background:linear-gradient(to right,#101419, #3A506B)

`
const FormContainer = styled.div`
display: flex;
flex-flow: column;
width:50rem;
height:70rem;
border-radius: 3rem;
background-color: white;
z-index: 8;
backface-visibility: hidden;
transform: rotateY(${props=>props.rotate}deg);
transition: transform 1s;
box-shadow:0 1rem 3rem rgba(0, 0, 0, .3);
`
const Header = styled.div`
display: flex;
align-items: center;
width:100%;
height:8rem;
padding: 3rem;
font-size: 3rem;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
color: #3682CE;
`
const InputContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:10rem;
padding: 0px 8rem;

`
const InputHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:3rem;
font-size: 2rem;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
color: #BDCCDB;
`
const InputEmail = styled.input`
padding: 0px 2rem ;
font-size: 2rem;
color: #BDCCDB;
font-family: 'Lato', sans-serif;
height: 5rem;
width: 100%;
box-shadow: none;
border: none;
border-bottom: solid #BDCCDB;
outline: none;
::placeholder{
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #BDCCDB;
}

@media(max-width: 800px){
margin:1rem 0px;
}
`;
const OptionContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:18rem;
padding: 0px 8rem;
color: #BDCCDB;
`
const OptionHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:4rem;
font-size: 2rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;

`
const OptionBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
height:6rem;
padding: 2px;
//font-weight: lighter;
`
const Option = styled.div`
display: flex;
height: 3.5rem;
width: 15rem;
border: solid 1px #3682CE;
color: #3682CE;
border-radius: 2rem;
justify-content: center;
align-items: center;
font-size: 1.5em;
text-align: center;
font-family: 'Lato', sans-serif;
letter-spacing: 3px;
&:hover{
background-color: #3682CE;
border: solid 1px #3682CE;
color: white;
}
`;
const IssueContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:15rem;
padding: 0px 8rem;
color: #BDCCDB;
`
const IssueHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:4rem;
font-size: 2rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;

`
const InputIssue = styled.textarea`
padding: 0px 2rem ;
font-size: 2rem;
color: #BDCCDB;
font-family: 'Lato', sans-serif;
height: 10rem;
width: 100%;
box-shadow: none;
border: solid #BDCCDB 1px;
outline: none;
::placeholder{
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #BDCCDB;
}
`;
const UploadContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
width:100%;
height:11rem;
padding: 0px 8rem;
color: #BDCCDB;
`
const UploadHeading = styled.div`
display: flex;
align-items: center;
width:100%;
height:4rem;
font-size: 2rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
`
const InputFile = styled.input`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
color: #BDCCDB;
font-family: 'Lato', sans-serif;
height: 5rem;
width: 100%;
padding: 2rem;
background-color: white;
box-shadow: none;
border: none;
outline: none;
opacity:1;
&::placeholder{
font-size: 2rem;
font-family: 'Lato', sans-serif;
color: #BDCCDB;
}
`
const ButtonRow = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
width:100%;
height:10rem;
padding: 0px 2rem;
`
const Send = styled.div`
display: flex;
height:7rem;
width:7rem;
margin-right: 10px;
background-color: #3682CE;
color: #3682CE;
border-radius: 100%;
justify-content: center;
align-items: center;
font-size: 1.5em;
text-align: center;
font-family: 'Lato', sans-serif;
letter-spacing: 3px;
&:hover{
background-color: #3682CE;
border: solid 1px #3682CE;
color: white;
}
`;
const SendIcon = styled.img`
height: 60%;
width: auto;
`
const SendText = styled.div`
display: flex;
align-items: center;
width:7rem;
height:4rem;
font-size: 2.4rem;
padding: 1rem 0px;
font-family: 'Lato', sans-serif;
color: #3682CE;
font-weight: lighter;
`
const Container2 = styled.div`
display: flex;
flex-flow: column;
position: absolute;
width:50rem;
height:70rem;
border-radius: 3rem;
z-index: 10;
background:linear-gradient(#021B79,#0575E6);
backface-visibility: hidden;
transform: rotateY(${props=>props.rotate}deg);
transition: transform 1s;
box-shadow:0 1rem 3rem rgba(0, 0, 0, .3);
`
const ThankYou = styled.div`
display: flex;
align-items: flex-end;
width:100%;
height:60%;
font-size: 10rem;
padding: 3rem ;
color: white;
border-bottom: solid gray 1px;
font-family: 'Lato', sans-serif;
//font-weight: lighter;
`
const NormalText = styled.div`
display: flex;
align-items: center;

width:100%;
height:25%;
font-size: 3rem;
text-align: left;
padding: 3rem;
color: white;
font-family: 'Lato', sans-serif;
font-weight: normal;
`
const Home = styled.div`
display: flex;
height:7rem;
width:7rem;
margin-right: 10px;
background-color: white;
border-radius: 100%;
justify-content: center;
align-items: center;
font-size: 1.5em;
text-align: center;
font-family: 'Lato', sans-serif;
letter-spacing: 3px;
`;
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
            <FormContainer rotate={this.state.card1}>
                <Header>
                    Create Ticket
                </Header>
                <InputContainer>
                    <InputHeading>
                        Email
                    </InputHeading>
                    <InputEmail placeholder={"Enter Email"}/>
                </InputContainer>
                <OptionContainer>
                    <OptionHeading>
                        Choose a category
                    </OptionHeading>
                    <OptionBox>
                        <Option>
                            Bank Transfer
                        </Option>
                        <Option>
                            Transaction
                        </Option>
                    </OptionBox>
                    <OptionBox>
                        <Option>
                            Verification
                        </Option>
                        <Option>
                            Other
                        </Option>
                    </OptionBox>
                </OptionContainer>
                <IssueContainer>
                    <IssueHeading>
                        Issue Details
                    </IssueHeading>
                    <InputIssue />
                </IssueContainer>
                <UploadContainer>
                    <UploadHeading>
                        Attach a file
                    </UploadHeading>
                    <InputFile type={"file"}/>
                </UploadContainer>
                <ButtonRow>
                    <SendText>
                        SEND
                    </SendText>
                    <Send onClick={this.toggle} id={"1"}>
                        <SendIcon src={require("../../img/Header/paper-plane.svg")} onClick={this.toggle} id={"1"}/>
                    </Send>
                </ButtonRow>
            </FormContainer>
            <Container2 rotate={this.state.card2}>
                <ThankYou>
                    Thank You.
                </ThankYou>
                <NormalText>
                    We'll be in touch.<br/> Shortly !
                </NormalText>
                <ButtonRow>
                    <Home onClick={this.toggle} id={"2"}>
                        <SendIcon src={require("../../img/Header/home-icon-silhouette.svg")} onClick={this.toggle} id={"2"}/>
                    </Home>
                </ButtonRow>
            </Container2>
        </Container>
            </ScrollContext>);
    }
}


export default contact;