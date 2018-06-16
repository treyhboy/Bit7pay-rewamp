import React from "react";
import styled,{keyframes} from "styled-components";
import {Route,Switch,Link} from 'react-router-dom';

const NewsRow = styled.div`
position: relative;
display: flex;
flex-flow: column;
height:100rem;
width:25rem; 
margin:0px 5rem ; 
padding-top:${props=>props.top};
align-items: center;
`
const NewsBox =styled.div`
position: relative;
display: flex;
flex-flow: column;
height:27rem;
width:25rem; 
margin: 3rem 0px;
justify-content: flex-start;
align-items: center;
`
const Heading = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem .5rem;
font-size: 1.5em;
text-align: center;
font-family: 'Lato', sans-serif;
color:black;
letter-spacing: 2px;
`
const PostedOn = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1em;
padding: .5rem 2rem;
text-align: center;
font-family: 'Lato', sans-serif;
color:#009ffd;
letter-spacing: 2px;
`
const NewsCard = styled.img`
height: 80%;
width: 100%;
border-radius: 1rem;
box-shadow: 0 0 4rem rgba(0, 0, 0, 0.3);
`
const News = (props)=>(
    <NewsRow top={props.top}>
        {props.data.map((item, index) => (<NewsBox>
            <Link to={"/news/0"} >
            <NewsCard id={item.id} src={item.thumbnailImage} onClick={props.click}/>
            </Link>
            <Heading>{item.title}</Heading>
            <PostedOn>Posted {item.addedOn}</PostedOn>
        </NewsBox>))}
    </NewsRow>)
export default News;
