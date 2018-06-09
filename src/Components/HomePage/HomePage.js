import React from "react";
import styled from "styled-components";
import Header from "../Header/header";
import Calculater from "./Calculater";
import DisplayContent from "./DisplayContent";
import Verification from "./Verification";

const Container = styled.div`
display: flex;
flex-flow: column;
position: relative;
height: 100%;
width: 100%;
background-color: white;
z-index: 2;
`;


const HomePage = (props) =>(<div>
        <Header/>
        <Container>
            <DisplayContent/>
            <Verification/>
            <Calculater/>
    </Container>
</div>
    );

export default HomePage;