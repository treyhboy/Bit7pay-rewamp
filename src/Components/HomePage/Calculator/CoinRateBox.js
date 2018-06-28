import React ,{Component} from "react";
import styled from "styled-components";

const CoinRateContainer = styled.div`
flex-flow: column;  
height:35.5rem;             
width: 100%;
z-index: 10;
overflow-y: scroll;
margin-top: 5rem;
&::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
@media(max-width: 800px){
height:15.5rem;
margin:0px;
border:none;     
}
`;
const CoinRate = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
height:5rem;
width: 100%;
cursor: pointer;
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
        if(item.type===props.mode)
            return(
                <CoinRate color={co} id={item.currency} onClick={props.fun}>
                    <CoinNameBox  id={item.currency}>
                        {item.currency}
                    </CoinNameBox>
                    <CoinRateBox id={item.currency}>
                        Rs {item.rate.toLocaleString('en-IN')}
                    </CoinRateBox>
                </CoinRate>)
    })}
</CoinRateContainer>)


export default CoinRateCard;