import React from "react";
import styled from "styled-components";
import HomeHeader from "./Head";
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
        <HomeHeader/>
        <Container>
            <DisplayContent/>
            <Calculater/>
            <Verification/>
    </Container>
</div>
    );

export default HomePage;