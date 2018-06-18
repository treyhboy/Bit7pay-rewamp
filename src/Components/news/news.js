import React, { Component } from 'react';
import styled,{keyframes} from "styled-components";
import "./style.css";
import Header from "../Header/header"
import News from "./NewsCards";
import {Route,Switch,Link} from 'react-router-dom';
import SingleNews from "./SingleNews";
import { spring, AnimatedSwitch } from 'react-router-transition';

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

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
// animation: 1s ${SliderRight} ease-out;
`
const ShadowBox = styled.div`
background-color: #0F0F0F;
opacity: .2;
height:75rem;
width:50vw;
z-index: 9;
position: fixed;
&:hover{
opacity: 0;
}
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
z-index: 10;
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
z-index: 10;

`
const Featured = styled.div`
display: flex;
height: 3.5rem;
width: 12rem;
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
z-index: 10;
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
// animation: 1s ${SliderLeft} ease-out;
`


class news extends Component
{
    constructor(props) {
        super(props);
        this.state = {NormalNews:{} ,id:"",FeaturedNews:{},isLoaded:false,CurrNews:{}};

    }
    componentDidMount() {
        fetch("https://api.bit7pay.com/bit7pay/public/api/getBlogEntries?pageNumber=0&pageSize=31")
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

    render() {
    if(this.state.isLoaded)
        return(<div>
                <Header back={"linear-gradient(to right,#101419,#3A506B)"} pos={"fixed"}/>
                <AnimatedSwitch
                    atEnter={{ offset: 0 }}
                    atLeave={{ offset: 0 }}
                    atActive={{ offset: 1}}
                    mapStyles={(styles) => ({
                        opacity:`${styles.offset}`
                    })}
                >
                    <Route path="/news/:newsid" component={SingleNews}/>
                    <Route exact strict path='/news' render={()=><Container>
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
        return(<Container><div class="loader"></div></Container>)
    }
    }
}
export default news;


