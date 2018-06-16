import React, { Component } from 'react';
import styled,{keyframes} from "styled-components";
import {Route,Switch,Link} from 'react-router-dom';
import { Redirect } from 'react-router';

const SliderLeft = keyframes`
  0% {
    transform:translateX(-100%);
  }
  100% {
    transform:translateX(0%);
  }
`;
const SliderRight = keyframes`
  0% {
    transform:translateX(100%);
  }
  100% {
    transform:translateX(0%);
  }
`;
const Container = styled.div`
display: flex;
flex-flow: row;
height:100%;
width:100%;  
background-color: white;
`
const ImageContainer = styled.div`
position: fixed;
display: flex;
flex-flow: row;
height:100%;
left:0%;
width: 50vw;
top: 10vh;
font-weight:bolder;
background: url(${props=>props.image}) no-repeat ;
background-size: 50vw 100%;
animation: .5s ${SliderLeft} ease-out;
z-index: 9;
justify-content: center;
align-items: center;
`
const NewsContainer = styled.div`
position: absolute;
display: flex;
flex-flow: row;
height:100%;
right:0%;
width: 50vw;
top: 21rem;
animation: .5s ${SliderRight} ease-out;
z-index: 9;
justify-content: center;
align-items: center;
`
const CloseBox = styled.div`
display: flex;
position: fixed;
right: 0%;
top: 8rem;
height: 6rem;
width: 6rem;
z-index: 2;
margin: 1rem;
justify-content: center;
align-items: center;
font-size: 2.5em; 
color:gray; 
`;
const TextCard = styled.div`
width: 100%;
height: 108rem;
padding:20px;

//@media(max-width: 500px){
//font-size: 5px;
//}
`
const CardHeadingContainer =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height:13rem;
padding: 5px 20px ;

`
const CardTextContainer = styled.div`
width: 100%;
height: auto;
padding: 2em 6em ;

`
const PostedOn = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 1.5em;
padding: 1em 4em;
text-align: center;
font-family: 'Lato', sans-serif;
color:#009ffd;

letter-spacing: 2px;
`
const CardHeading = styled.span`
font-size: 3.5rem;
text-align: center;
font-weight: bolder;
letter-spacing: 2px;
font-family: 'Lato', sans-serif;
color:#101419;
`
const CardText = styled.span`
font-size: 2rem;
text-align: center;
font-weight: lighter;
font-family: 'Lato', sans-serif;
color: #353538;

`

const SingleNews=(props)=> (!props.data.title?<Redirect to={"/news"}/>:
    <Container>
        <ImageContainer image={props.data.coverImage}>
            {console.log(props.data)}
        </ImageContainer>
        <NewsContainer>
            <Link to={"/news"}>
                <CloseBox>
                    <ion-icon name="close"/>
                </CloseBox>
            </Link>
            <TextCard>
                <CardHeadingContainer>
                    <CardHeading>
                        {props.data.title}
                    </CardHeading>
                </CardHeadingContainer>
                <PostedOn>
                    Posted {props.data.addedOn}
                </PostedOn>
                <CardTextContainer>
                    <CardText>
                        {props.data.body}
                    </CardText>
                </CardTextContainer>
            </TextCard>
        </NewsContainer>
    </Container>
);
export default SingleNews;
