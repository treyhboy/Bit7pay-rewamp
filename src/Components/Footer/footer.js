import React, { Component } from 'react';
import styled from "styled-components";

const Sec = styled.div`
display: flex;
position: relative;
background-color: #3a4550;
height: 50vh;
width: 100vw;
z-index: 2;
`
class Footer extends Component
{
    render(){
        return(<footer>
            <Sec/>
        </footer>);
    }
}

export default Footer;