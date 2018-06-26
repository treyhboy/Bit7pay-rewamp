import React from "react";
import styled,{keyframes} from "styled-components";
import {Route,Switch,Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

const NewsRow = styled.div`
position: relative;
display: flex;
flex-flow: column;
height:100%;
width:100%; 
top:.6rem;
align-items: center;
@media(max-width: 800px)
{
height:100%;
width:100vw;
top:0px; 
}
`
const NewsBox =styled.div`
position: relative;
display: flex;
flex-flow: row;
height:16rem;
width:48vw;
padding-left: 1.5rem;
border-bottom:solid 1px lightgray; 
align-items: center;
@media(max-width: 800px)
{
padding-left: 0px;
width:100vw; 
}
`
const Heading = styled.div`
display: flex;
font-size: 1.8em;
text-align: left;
padding: 2rem 3rem 2rem 0px;
font-family: 'Lato', sans-serif;
color:black;
@media(max-width: 800px)
{
padding:2rem 0px;
}
`
const PostedOn = styled.div`
display: flex;
font-size: 1.2em; 
font-family: 'Lato', sans-serif;
color:gray;

`
const NewsCard = styled.img`
height: 12rem;
width: 20rem;
box-shadow: 0 0 4rem rgba(0, 0, 0, 0.1);
@media(max-width: 800px)
{
height: 12rem;
width: 18rem;
}
`
const ImageDiv = styled.div` 
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
`
const TextDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-flow: column;
padding: 0px 1.5rem;  
height: 100%;
@media(max-width: 800px)
{
padding: 0px .5rem;
width: 100%; 
}
`
const ViewsRow = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
flex-flow: row;
padding: 1rem 0px;
width: 30vw;
@media(max-width: 800px)
{
width: 100%;
}
`
const ReadMore = styled.div`
display: flex;
height: 3.5rem;
width: 12rem;
border: solid #009ffd;
border-radius: 2rem;
justify-content: center;
align-items: center;
font-size: 1.2em;
margin: 1rem;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:#009ffd;
letter-spacing: 1px; 
transition: .5s;
&:hover{
background-color: #009ffd;
color: white;
border: solid #009ffd;
}
@media(max-width: 800px)
{
width: 9rem;
font-size: 1em;
}
`;
const Views = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
text-align: left;
padding: 2rem 0px;
font-family: 'Lato', sans-serif;
color:gray;

`
const Num = styled.span`
font-size: 1.3rem;
text-align: left;
padding: 0px .5rem;
font-family: 'Lato', sans-serif;
color:#009ffd;
`

const News = (props)=>(
    <NewsRow top={props.top}>
        {props.data.map((item, index) => (
            <Fade bottom cascade>
            <NewsBox>
            <ImageDiv>
                <Link to={`/news/${item.id}`} >
                <NewsCard id={item.id} src={item.thumbnailImage} onClick={props.click}/>
                </Link>
            </ImageDiv>
            <TextDiv>
                <Link to={`/news/${item.id}`}>
                <Heading>{item.title}</Heading>
                </Link>
                <PostedOn>Posted {item.addedOn}</PostedOn>
                <ViewsRow>
                    <Views>VIEWS: <Num>{item.views}</Num></Views>
                    <Link to={`/news/${item.id}`} >
                    <ReadMore>READ MORE</ReadMore>
                    </Link>
                </ViewsRow>
            </TextDiv>
        </NewsBox>
            </Fade>))}
    </NewsRow>)
export default News;
