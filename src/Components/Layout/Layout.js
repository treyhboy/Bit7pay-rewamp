import React from "react";
import styled from "styled-components";
import img from "../../img/image.png";
import Down from "./DownContent";
import Header from "../Header/header";
import ScrollAnimation from 'react-animate-on-scroll';

const Container = styled.div`
height: 100vh;
width: 100vw;
background-color: white;
`
const Layout = (props) =>(<div>
    <Header/>
    <Container>
        <ScrollAnimation animateIn="fadeIn">
            Some Text
        </ScrollAnimation>
    </Container>
</div>);

export default Layout;