import React from "react";
import styled from "styled-components";
import "./styles.css";


const Image_Container = styled.img`
height: 90vh;
width: 60vw;
`;

const RateBar = (props) => (<Image_Container src={require("../../img/landing.png")}/>
);

export default RateBar;