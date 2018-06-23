import React ,{Component} from "react";
import styled from "styled-components";

const CoinRateContainer = styled.div`
flex-flow: column;  
height:35.5rem;             
width: 100%;
z-index: 10;
overflow: scroll;
margin-top: 5rem;
border-right: solid white 4px;
@media(max-width: 800px){
display: none;
}
`;
const CoinRate = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
height:5rem;
width: 100%;
background-color: ${props=>props.color};
`;
const CoinNameBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30%;
height: 5rem;
color: white;
font-size: 2rem;
font-family: 'Lato', sans-serif;
letter-spacing: 2px;
`;
const CoinRateBox = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 5rem;
width: 70%;
font-family: 'Lato', sans-serif;
color: white;
font-size: 2.5rem;
letter-spacing: 2px;
`;

const CoinRateCard = (props)=> (<CoinRateContainer>
    {props.Rates.map((item, index) => {
        var co;
        if(item.currency===props.coin)
        {co = "#5F9BD9";}
        if(item.type==="BUY_RATE")
            return(
                <CoinRate color={co} id={item.currency} onClick={props.fun}>
                    <CoinNameBox onClick={props.fun} id={item.currency}>
                        {item.currency}
                    </CoinNameBox>
                    <CoinRateBox onClick={props.fun} id={item.currency}>
                        Rs {item.rate}
                    </CoinRateBox>
                </CoinRate>)
    })}
</CoinRateContainer>)


export default CoinRateCard;