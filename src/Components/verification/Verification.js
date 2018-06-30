import React, { Component } from 'react';
import styled from "styled-components";


const VerificationContainer = styled.div`
display: flex;
flex-flow: column;
position: relative;
height: 100%;
width: 100vw;
background-color: white;  
z-index: 2;
padding-top:10vh ;
@media(max-width: 800px){
padding-top:0px ;
}
`;
const HeadingText = styled.span`
font-size: 4rem;
text-align: center;
font-family: 'Lato', sans-serif; 
font-weight: 500;
color:grey; 
@media(max-width: 800px){
font-size: 3.5rem;
}
`;
const Heading = styled.div`
display: flex;
flex-flow: row;
height: 9vh;
justify-content: center;
align-items: center;
padding-bottom: 2rem;
@media(max-width: 800px){
padding-bottom: 0px;
}
`;
const IconBoxRow = styled.div`
 display: flex;
 flex-flow: row;
 justify-content: space-around;
 align-items: center;
 height: 25vh;
 width: 100%;
 padding: 10px 18vw;
 @media(max-width: 800px){
flex-flow: wrap;
height: 100%;
padding: 10px;
}
`;
const IconBox = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height:12vh;
width: auto;
 @media(max-width: 800px){
flex-flow: wrap;
padding: 10px;
height:12vh;
}
`;
const IconText = styled.span`
font-size: 2rem;
text-align: center;
font-family: 'Lato', sans-serif; 
font-weight: 300;
color: grey;
padding: 2rem;
@media(max-width: 800px){
padding: 1rem;
}
`;
const Icon = styled.img`
height: 70%;
width: auto;
opacity: .3;
cursor: pointer;
&:hover{
opacity: 1;
}
`
const NormalText = styled.span`
font-size: 2rem;
text-align: center;
font-family: 'Lato', sans-serif; 
color: grey;
padding: 0px 15rem;
font-weight: 300;
height: 4rem;
line-height: 2.5rem;
@media(max-width: 800px){
height: 100%;
padding: 2rem;
}
`;
const Row = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
padding: 8vh;
@media(max-width: 800px){
padding: 4vh;
}

`;
const Button =styled.div`
display: flex;
height: 10vh;
width: 35%;
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
font-size: 2.8rem;
font-family: 'Lato', sans-serif; 
color: white;
padding: 2px;
@media(max-width: 800px){
font-size: 2rem;
}
`
let Account = "Provide your bank account details like Account Number,IFSC Code,Bank Name,Beneficiary Name and Image of cancelled cheque to enable withdrawals from Bit7Pay Wallet";
let Aadhar = "Provide your Aadhar No. along with a front and back image to complete identification Verification process"
let Pan  = "To enable financial transaction to and from your Bit7Pay Wallet ,provide your Pan "
let Email = "Provide your Email address and get a email from Bit7Pay containing a Verification Button.Click the Button to complete Email Verification"
let Photo = "Upload a recent Photo containing your complete face in lightning condition or snap a selfie to complete verification"

class Verification extends Component
{
    constructor(props) {
        super(props);
        this.state = { Step: "Account",Content:Account,loc:"" };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        if (this.state.loc==="")
            document.getElementById('Account').style.opacity = 1;
        else
            this.state.loc.style.opacity = 1;


    }

    handleClick(ev)
    {
        ev.target.style.opacity = 1;
        var k ;
        let t = ev.target;
        let i = ev.target.id;
        switch(i)
        {
           case "Account":k = Account;
                break;
            case "Aadhar":k = Aadhar;
                break;
            case "Pan":k = Pan;
                break;
            case "Email":k = Email;
                break;
            case "Photo":k = Photo;
                break;

        }
        let g = document.getElementById('Account');

        this.setState(prev =>{
            console.log(prev);
            if(prev.Step==="Account")
            {g.style.opacity = .3}
            else
            prev.loc.style.opacity = .3;
            return {
                Step:i,Content:k,loc:t
            }

        });
    }

    render() {
        return(<VerificationContainer>
                <Heading>
                    <HeadingText>5 easy steps to get verified</HeadingText>
                </Heading>
                <IconBoxRow>
                    <IconBox >
                        <Icon src={require("../../img/Header/verification-01.svg")} id={"Account"} onClick={this.handleClick}/>
                        <IconText>Bank Account</IconText>
                    </IconBox>
                    <IconBox time={"1s"} >
                        <Icon src={require("../../img/Header/verification-02.svg")} id={"Aadhar"} onClick={this.handleClick}/>
                        <IconText>Aadhar</IconText>
                    </IconBox>
                    <IconBox time={"2s"} >
                        <Icon src={require("../../img/Header/verification-03.svg")} id={"Pan"} onClick={this.handleClick}/>
                        <IconText>PAN</IconText>
                    </IconBox>

                    <IconBox time={"3s"} >
                        <Icon src={require("../../img/Header/verification-04.svg")} id={"Email"} onClick={this.handleClick}/>
                        <IconText>Email</IconText>
                    </IconBox>
                    <IconBox time={"4s"} >
                        <Icon src={require("../../img/Header/verification-05.svg")} id={"Photo"} onClick={this.handleClick}/>
                        <IconText>Photo</IconText>
                    </IconBox>
                </IconBoxRow>
                <NormalText>
                    {this.state.Content}
                </NormalText>
                <Row>
                    <Button>
                        <ButtonText>
                            Join Bit7Pay Now !
                        </ButtonText>
                    </Button>
                </Row>
            </VerificationContainer>

        )
    }
}

export default Verification;