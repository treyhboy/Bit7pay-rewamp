import React, { Component } from 'react';
import styled,{keyframes} from "styled-components";
import {Route,Switch,Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import Header from "../Header/header"
import Fade from 'react-reveal/Fade';

const SliderLeft = keyframes`
  0% {
    transform:translateX(-100%);
  }
  100% {
    transform:translateX(0%);
  }
`;
const SliderDown = keyframes`
  0% {
    transform:translateY(0px);
  }
  100% {
    transform:translateY(8rem);
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
z-index: 12;
@media(max-width: 800px)
{
flex-flow: column;
}
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
// animation: 1s ${SliderLeft} ease-out;
z-index: 9;
justify-content: center;
align-items: center;
@media(max-width: 800px)
{
top:7rem;
position:relative;
width: 100%;
background-size:cover;
background-position: center;
height: 50rem;
}
`
const NewsContainer = styled.div`
position: absolute;
display: flex;
flex-flow: row;
height:100%;
right:0%;
width: 50vw;
top: 21rem;
// animation: 1s ${SliderRight} ease-out;
z-index: 9;
justify-content: center;
align-items: center;
@media(max-width: 800px)
{
position:relative;
width: 100%;
background-size:cover;
height: 50rem;
left: 0px;
top: 38rem;
}
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
// animation: 1s ${SliderDown} ease-out;
animation-fill-mode: forwards;
animation-delay: 1s;
color:gray; 
`;
const TextCard = styled.div`
position: relative;
width: 100%;
height: 108rem;
padding:20px;
@media(max-width: 800px)
{
width: 100vw;
padding:0px;
}
`
const CardHeadingContainer =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height:13rem;
padding: 5px 20px ;
@media(max-width: 800px)
{
width: 100vw;
padding: 5px 10px ;
}
`
const CardTextContainer = styled.div`
width: 100%;
height: auto;
padding: 2em 6em ;
@media(max-width: 800px)
{
width: 100vw;
padding: 2em 4em ;
}
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
@media(max-width: 800px)
{
font-size: 3rem;
}
`
const CardText = styled.span`
font-size: 2rem;
text-align: center;
font-weight: lighter;
font-family: 'Lato', sans-serif;
color: #353538;

`
export default class SingleNews extends Component {
    constructor(props) {
        super(props);
        this.state = {id:props.match.params.newsid,isLoaded: false,News: {}};
    }

    componentDidMount() {
        console.log(this.state.id);
        fetch(`https://api.bit7pay.com/bit7pay/public/api/getBlogEntry?id=${this.state.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        News: result.data,
                        isLoaded: true,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        console.log(this.state);
    }

    render() {
        if(this.state.isLoaded)
        {return (<Container>

                <ImageContainer image={this.state.News.coverImage}>
                </ImageContainer>
                <NewsContainer>
                    <Link to={"/news"} >
                        <CloseBox>
                            <ion-icon name="close"/>
                        </CloseBox>
                    </Link>
                    <TextCard>
                        {/*<Fade bottom cascade duration={1500}>*/}
                        <CardHeadingContainer>
                            <CardHeading>
                                {this.state.News.title}
                            </CardHeading>
                        </CardHeadingContainer>
                        <PostedOn>
                            Posted {this.state.News.addedOn}
                        </PostedOn>
                        <CardTextContainer>
                            <CardText>
                                {this.state.News.body}
                            </CardText>
                        </CardTextContainer>
                        {/*</Fade>*/}
                    </TextCard>
                </NewsContainer>
            </Container>);}
        else {
            return (<Container><div class="loader"></div></Container>)
        }
    }
}
