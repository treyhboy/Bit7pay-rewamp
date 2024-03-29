import React, { Component } from 'react';
import styled,{keyframes} from "styled-components";
import "./style.css";
import Header from "../Header/header"
import News from "./NewsCards";
import {Route,Link} from 'react-router-dom';
import SingleNews from "./SingleNews";
import {AnimatedSwitch} from 'react-router-transition';
import {Helmet} from "react-helmet";

const SliderLeft = keyframes`
  0% {
    transform:translateX(100%);
  }
  100% {
    transform:translateX(0%);
  }
`;
const SliderRight = keyframes`
  0% {
    transform:translateX(-100%);
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
@media(max-width: 800px)
{
flex-flow: column;
}

`
const FeaturedNewsContainer = styled.div`
position:fixed;
display: flex;
flex-flow: column;
height:95vh;
top: 8rem;
width:50vw;  
justify-content: flex-end;
align-items: center;
background: url(${props=>props.image}) no-repeat center;
background-size:cover;
// animation: 1s ${SliderRight} ease-out;
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
const ShadowBox = styled.div`
background-color: #0F0F0F;
opacity: .2;
height:95vh;
width:50vw;
z-index: 2;
position: fixed;
&:hover{
opacity: 0;
}
@media(max-width: 800px)
{
position:absolute;
width: 100%;
background-size:cover;
height: 50rem;
}
`

const DetailContainer = styled.div`
display: flex;
flex-flow: column;
height:40%;
width:100%;  
justify-content: center;
align-items: center;
@media(max-width: 800px)
{
height:40%;
}
`
const Heading = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0px 2rem;
font-size: 4em;
line-height: 1.2em;
text-align: center;
font-family: 'Lato', sans-serif;
color:#fff;
z-index: 10;
@media(max-width: 800px)
{
font-size: 2.5em;
z-index: 3;
}
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
z-index: 10;
@media(max-width: 800px)
{
z-index: 3;
}
`
const Featured = styled.div`
display: flex;
height: 3.5rem;
width: 14rem;
background-color: #009ffd;
border-radius: 2rem;
justify-content: center;
align-items: center;
font-size: 1.5em;
margin: 1rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
font-weight: 600;
color:white;
letter-spacing: 3px; 
z-index: 10;
@media(max-width: 800px)
{
margin: 0px;
z-index: 3;
}
`;

const NormalNewsContainer = styled.div`
position: relative;
display: flex;
flex-flow: row;
height:100%;
left: 50vw;
width:50vw;  
top: 12vh;
justify-content: center;
align-items: center;
font-weight:bolder;
// animation: 1s ${SliderLeft} ease-out;
@media(max-width: 800px)
{
position:relative;
width: 100%;
background-size:cover;
height: 50rem;
left: 0px;
}
`

class news extends Component
{
    constructor(props) {
        super(props);
        this.state = {NormalNews:{} ,id:"",FeaturedNews:{},isLoaded:false,CurrNews:{},count:0};
        this.action = this.action.bind(this);

    }
    componentDidMount() {
        fetch("https://api.bit7pay.com/bit7pay/public/api/getBlogEntries?pageNumber=0&pageSize=31")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        NormalNews: result.data.dataList,
                        isLoaded:true,
                        count:result.data.count
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
    action()
    {
        this.setState({
            isLoaded:false
        });

        fetch("https://api.bit7pay.com/bit7pay/public/api/getBlogEntries?pageNumber=0&pageSize=10")
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
    }

    render() {
    if(this.state.isLoaded)
        return(<div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Bit7Pay|News</title>
                    <meta name="description" content="Helmet application" />
                </Helmet>
                <Header back={"linear-gradient(to right,#101419,#3A506B)"} pos={"fixed"} text={"News"}/>
                <AnimatedSwitch
                    atEnter={{ offset: 0 }}
                    atLeave={{ offset: 0 }}
                    atActive={{ offset: 1}}
                    mapStyles={(styles) => ({
                        opacity:`${styles.offset}`
                    })}
                >
                    <Route path="/news/:newsid" component={SingleNews} onUpdate={() => window.scrollTo(0, 0)} />
                    <Route exact strict path='/news' onUpdate={() => window.scrollTo(0, 0)} render={()=><Container>
                        <Link to={`/news/${this.state.FeaturedNews.id}`}>
                            <FeaturedNewsContainer image={this.state.FeaturedNews.coverImage}>
                                <ShadowBox/>
                                <DetailContainer>
                                    <Heading>
                                        {this.state.FeaturedNews.title}
                                    </Heading>
                                    <PostedOn>
                                        Posted {this.state.FeaturedNews.addedOn}
                                    </PostedOn>
                                    <Featured>
                                        FEATURED
                                    </Featured>
                                </DetailContainer>
                            </FeaturedNewsContainer>
                        </Link>
                        <NormalNewsContainer>
                            <News data={this.state.NormalNews.slice(1,this.state.NormalNews.length)}  click={this.handleClick}/>
                        </NormalNewsContainer>
                    </Container>}/>
                </AnimatedSwitch>


                 </div>
    )
        else {
        return(<Container><div className="loader"></div></Container>)
    }
    }
}
export default news;


