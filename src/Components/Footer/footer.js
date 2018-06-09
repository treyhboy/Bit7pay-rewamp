import React, { Component } from 'react';
import styled from "styled-components";
import "./style.css";

const Sec = styled.div`
display: flex;
justify-content: flex-end;
height: 60vh;
width:100%;   
position: relative;
background: linear-gradient(#000000,#001C4C);
`
class Footer extends Component
{
    render(){
        return(<footer>
            <Sec>

            </Sec>
        </footer>);
    }
}

export default Footer;