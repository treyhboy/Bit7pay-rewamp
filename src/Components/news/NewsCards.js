import React from "react";
import styled,{keyframes} from "styled-components";
const NewsCard = styled.div`
height: 80%;
width: 100%;
background: url(${props=>props.image}) no-repeat;
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
const News = (props)=>(
    <NewsRow>
        {console.log(props.data[0])}
        {props.data.map((item, index) => (<NewsBox><NewsCard key={index} image={item.thumbnailImage}/></NewsBox>))}
    </NewsRow>)
export default News;
