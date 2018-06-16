import React, { Component } from 'react';
import styled,{keyframes} from "styled-components";
import SingleNews from "./SingleNews";
import "./style.css";
import Header from "../Header/header"
import News from "./NewsCards";
import {Route,Switch,Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
display: flex;
flex-flow: row;
height:100%;
width:100%;  
background-color: white;
`
const FeaturedNewsContainer = styled.div`
position:fixed;
display: flex;
flex-flow: column;
height:75rem;
top: 8rem;
width:50vw;  
justify-content: flex-end;
align-items: center;
background: url(${props=>props.image}) no-repeat;
background-size: 50vw 100%;
`

const DetailContainer = styled.div`
display: flex;
flex-flow: column;
height:40%;
width:100%;  
justify-content: center;
align-items: center;
`
const Heading = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
font-size: 3.5em;
text-align: center;
font-family: 'Lato', sans-serif;
color:#fff;
letter-spacing: 2px;
`
const PostedOn = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5em;
padding: 2rem;
text-align: center;
font-family: 'Lato', sans-serif;
color:#009ffd;
letter-spacing: 2px;
`
const Button = styled.div`
display: flex;
height: 3.5rem;
width: 12rem;
z-index: 2;
background-color: #009ffd;
border-radius: 2rem;
justify-content: center;
align-items: center;
font-size: 1.5em;
margin: 1rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:white;
letter-spacing: 3px; 
`;

const NormalNewsContainer = styled.div`
position: relative;
display: flex;
flex-flow: row;
height:100%;
left: 50vw;
width:50vw;  
top: 10vh;
justify-content: center;
align-items: center;
font-weight:bolder;
`


class news extends Component
{
    constructor(props) {
        super(props);
        this.state = {NormalNews:{} ,id:"",FeaturedNews:{},isLoaded:false,CurrNews:{}};
        this.handleClick = this.handleClick.bind(this);

    }
    componentDidMount() {
        fetch("https://api.bit7pay.com/bit7pay/public/api/getBlogEntries?pageNumber=0&pageSize=5")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        NormalNews: result.data.dataList,
                        isLoaded:true
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
        fetch("https://api.bit7pay.com/bit7pay/public/api/getFeaturedBlogEntry")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        FeaturedNews: result.data,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    handleClick(ev)
    {
        let i = ev.target.id;
        this.setState(()=>{return {id:i,isLoaded:false}});
        fetch(`https://api.bit7pay.com/bit7pay/public/api/getBlogEntry?id=${i}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        CurrNews: result.data,
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

    }
    render() {
    if(this.state.isLoaded)
        return(<div>
                <Header back={"linear-gradient(to right,#000428,#004e92)"} pos={"fixed"}/>
                <Container>
                    <Route path="/news/0" render={() =>
                        <SingleNews data={this.state.CurrNews} />}
                    />
                    <FeaturedNewsContainer image={this.state.FeaturedNews.coverImage}>
                        <DetailContainer>
                            <Heading>
                                {this.state.FeaturedNews.title}
                            </Heading>
                            <PostedOn>
                                Posted {this.state.FeaturedNews.addedOn}
                            </PostedOn>
                            <Button>
                                FEATURED
                            </Button>
                        </DetailContainer>
                    </FeaturedNewsContainer>
                    <NormalNewsContainer>
                        <News data={this.state.NormalNews.slice(3,5)} top={"8rem"} click={this.handleClick}/>
                        <News data={this.state.NormalNews.slice(0,3)} click={this.handleClick}/>
                    </NormalNewsContainer>
                </Container>
                 </div>
    )
        else {
        return(<Container>Loading......</Container>)
    }
    }
}
export default news;