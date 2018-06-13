import React from "react";
import styled from "styled-components";
import {LineChart} from "react-easy-chart";
import Fade from 'react-reveal/Fade';
const Container = styled.div`
position: relative;
display: flex;
flex-flow: row;
height:100%;
width: 100%;
background-size: cover;
@media(max-width: 500px){
flex-flow: column;
}

`
const ReciptBox = styled.div`
display: flex;
flex-flow: column;
height:65rem;
width: 34vw;
border-radius: 10px;
background-color: #FFFFFF;
padding: 40px;
margin-left: 16vw;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
z-index: 10;
`
const CurrencyBox = styled.div`
display: flex;
flex-flow: column;
height:60rem;
width: 34vw;
background-color: #3682CE;
margin: 3rem 16vw 3rem 0px ;
border-radius: 0px 10px 10px 0px;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3); 
z-index: 8;
`
const Heading = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const HeadingText = styled.span`
font-size: 2.5em;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:#38393D;
letter-spacing: 2px; 
`;
const ResultBox = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
padding: 10em 0px;
`
const ResultText = styled.span`
font-size: 5em;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:#BDCCDB;
letter-spacing: 2px; 
margin:  2.2rem  0px 3rem 0px;
`;
const NormalText = styled.span`
font-size: 1em;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:gray;
letter-spacing: 2px; 

`;


const ChartBox = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height:100%;
width: 100%;
padding-bottom: 8em;
`
const CoinRateContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height:100%;
width: 100%;
z-index: 10;
padding: 6rem 0px;
`
const CoinRate = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:25%;
width: 100%;
background-color: ${props=>props.color};
`
const CoinNameBox = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 30%;
height: 100%;
color: white;
font-size: 2rem;
padding: 1rem 2rem;
font-family: 'Raleway', sans-serif; 
letter-spacing: 2px;
`
const CoinRateBox = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 100%;
width: 70%;
font-family: 'Raleway', sans-serif; 
color: white;
font-size: 2.5rem;
letter-spacing: 2px;
`
const FormBox = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
align-items: center;
height: 80%;
width: 100%;
padding:0px 7rem;
margin-bottom: 5rem;
`
const InputCurrency = styled.select`
 
  color: grey;
  font-size: 2rem;
  font-family: 'Raleway', sans-serif; 
  border-radius: 10px;
  height: 4rem;
  width: 100%;
`
const InputAmount = styled.input`
  padding: 0px 1rem ;
  color: grey;
  font-size: 2rem;
  font-family: 'Raleway', sans-serif; 
  border-radius: 6px;
  height: 4rem;
  width: 100%;
`
const Button = styled.div`
display: flex;
justify-content: space-around;
 align-items: center;
height: 5rem;
width: 15rem;
z-index: 2;
color: #3682CE;
font-size: 2rem;
font-family: 'Raleway', sans-serif; 
background-color: white;
border-radius: 1rem;
`;
const Calculater = (props) =>(<Container>
    <Fade left>
    <ReciptBox>
        <Heading>
            <HeadingText>
                Crypto Converter
            </HeadingText>
        </Heading>
        <ResultBox>
            <NormalText>
                you give
            </NormalText>
            <ResultText>
                Rs 5,53,429
            </ResultText>
            <NormalText>
                from your pocket
            </NormalText>
        </ResultBox>
        <ChartBox>
            <LineChart
                width={320}
                interpolate={'cardinal'}
                height={150}
                data={[
                    [
                        { x: 1, y: 13 },
                        { x: 2, y: 12 },
                        { x: 3, y: 15},
                        { x: 4, y: 14 },
                        { x: 5, y: 12 },
                        { x: 6, y: 13 },
                        { x: 7, y: 15},
                        { x: 8, y: 14 },
                        { x: 9, y: 16 },
                        { x: 10, y: 14 },
                        { x: 11, y: 13 },
                        { x: 12, y: 12 },
                        { x: 13, y: 15},
                        { x: 14, y: 19 },
                        { x: 15, y: 16 },
                        { x: 16, y: 13 },
                        { x: 17, y: 12},
                        { x: 18, y: 14 },
                        { x: 19, y: 16 },
                        { x: 20, y: 13 },
                    ]
                ]}
            />
        </ChartBox>
    </ReciptBox>
    </Fade>
    <Fade right>
    <CurrencyBox>
        <CoinRateContainer>
            <CoinRate color={"#5F9BD9"}>
                <CoinNameBox>
                    BTC
                </CoinNameBox>
                <CoinRateBox>
                    Rs 5,53,429
                </CoinRateBox>
            </CoinRate>
            <CoinRate >
                <CoinNameBox>
                    ETC
                </CoinNameBox>
                <CoinRateBox>
                    Rs 2,60,901
                </CoinRateBox>
            </CoinRate>
            <CoinRate color={"#5F9BD9"}>
                <CoinNameBox>
                    Lite
                </CoinNameBox>
                <CoinRateBox>
                    Rs 1,92,805
                </CoinRateBox>
            </CoinRate>
            <CoinRate >
                <CoinNameBox>
                    DTC
                </CoinNameBox>
                <CoinRateBox>
                    Rs 3,90,789
                </CoinRateBox>
            </CoinRate>
        </CoinRateContainer>
        <FormBox>
            <InputAmount placeholder={"Enter Amount"}/>
            <InputCurrency placeholder={"Select Currency"} >
                <option value="volvo">BTC</option>
                <option value="saab">ETC</option>
                <option value="opel">Lite</option>
                <option value="audi">DTC</option>
            </InputCurrency>
            <Button>Exchange</Button>
        </FormBox>
    </CurrencyBox>
    </Fade>
</Container>);


export default Calculater;