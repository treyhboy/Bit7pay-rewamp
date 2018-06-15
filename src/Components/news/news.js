import React, { Component } from 'react';
import styled,{keyframes} from "styled-components";
import axios from "axios";
import SingleNews from "./SingleNews";
import "./style.css";
import News from "./NewsCards";


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
height:100%;
width:50vw;  
justify-content: flex-end;
align-items: center;
background: url(${props=>props.image}) no-repeat;
background-size: 50vw 100%  ;
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
justify-content: center;
align-items: center;
font-weight:bolder;
`
const NewsRow = styled.div`
position: relative;
display: flex;
flex-flow: column;
height:100rem;
width:25rem; 
margin:0px 5rem ; 
padding-top:${props=>props.top};
align-items: center;
background-color: green;
`
const NewsBox =styled.div`
position: relative;
display: flex;
flex-flow: row;
height:25rem;
width:25rem; 
margin: 5rem 0px;
justify-content: center;
align-items: center;
background-color: red;
`

class news extends Component
{
    constructor(props) {
        super(props);
        this.state = {NormalNews:{} ,display:"none",FeaturedNews:{},isLoaded:false};
        this.handleClick = this.handleClick.bind(this);

    }
    componentDidMount() {
        fetch("https://api.bit7pay.com/bit7pay/public/api/getBlogEntries?pageNumber=0&pageSize=5")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
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
                    console.log(result);
                    this.setState({
                        FeaturedNews: result.data
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

    handleClick()
    {
        this.setState((prev)=>{return {display:prev.display==="flex"?"none":"flex"}});

    }
    render() {
    if(this.state.isLoaded)
        return(<Container>
            {/*<SingleNews display={this.state.display} click={this.handleClick}/>*/}
            {/*<Button onClick={this.handleClick}>State Check</Button>*/}
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
                <News data={this.state.NormalNews} />
            </NormalNewsContainer>

        </Container>
    )
        else {
        return(<Container>Loading......</Container>)
    }
    }
}
export default news;