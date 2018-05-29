import React, { Component } from 'react';
import styled from "styled-components";
import "./style.css";

const Sec = styled.div`
position: relative;
height: 100vh;
width: 100vw;
`
const Background = styled.img`
height: 100vh;
width: 100vw;
`
class about extends Component
{
    render(){
        return(<div>

            <Sec className={"background-img"}/>

            </div>
       );
    }
}

export default about;