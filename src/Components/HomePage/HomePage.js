import React from "react";
import styled from "styled-components";
import HomeHeader from "./Head";
import Footer from '../Footer/footer';
import Calculater from "./Calculator/Calculater";
import DisplayContent from "./DisplayContent";
import Verification from "../verification/Verification";
import { ScrollContext } from 'react-router-scroll-4';


const Container = styled.div`
display: flex;
flex-flow: column;
position: relative;
height: 100%;
width: 100%;
background-color: white;
z-index: 2;
`;


const HomePage = (props) =>(
    <ScrollContext>
    <div>
        <HomeHeader/>
        <Container>
            <DisplayContent/>
            <Calculater/>
            <Verification/>
            <Footer/>
    </Container>
</div>
    </ScrollContext>
    );

export default HomePage;