import React ,{Component} from "react";
import styled from "styled-components";
import {LineChart} from "react-easy-chart";
import Fade from 'react-reveal/Fade';
import CoinRateCard from "./CoinRateBox";

const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
align-content: center;
flex-flow: row;
height:100%;
width: 100%;
z-index: 10;
background-size: cover;
@media(max-width: 800px){
flex-flow: column;
transform: translateY(-30%);
}
`;
const ReciptBox = styled.div`
display: flex;
flex-flow: column;
height:65rem;
width: 35vw;  
border-radius: 10px;
background-color: #FFFFFF;
padding: 40px;
margin-left: 16vw;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
z-index: 10;
@media(max-width: 800px){
width: 100vw;
padding: 0px;
height:100%;
margin: 0px;
z-index: 10;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0);
border-radius:10px 10px 0px 0px;
background-color: #3682CE;
transform: translateY(1%);
}
`;
const CurrencyBox = styled.div`
display: flex;
flex-flow: column;
height:60rem;
width: 33vw;
background-color: #3682CE;
margin: 3rem 16vw 3rem 0px ;
border-radius: 0px 10px 10px 0px;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1); 
z-index: 8;
@media(max-width: 800px){
width: 100vw;
padding: 0px;
height:100%;
margin: 0px;
z-index: 10;
box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0);
border-radius:0px 0px 10px 10px;
}
`;
const Heading = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const HeadingText = styled.span`
font-size: 2.5em;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:#38393D;
letter-spacing: 2px; 
padding-top: 2rem;
@media(max-width: 800px){
color:white;
}
`;
const ResultBox = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
padding: 10em 0px;
@media(max-width: 800px){
padding:0px;
}
`;
const ResultText = styled.span`
font-size: 5em;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:#BDCCDB;
letter-spacing: 2px; 
margin:  2.2rem  0px 3rem 0px;
@media(max-width: 800px){
color:white;
}
`;
const NormalText = styled.span`
font-size: 1em;
text-align: center;
font-family: 'Raleway', sans-serif; 
color:gray;
letter-spacing: 2px; 
@media(max-width: 800px){
display: none;
}
`;


const ChartBox = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height:100%;
width: 100%;
padding-bottom: 8em;
@media(max-width: 800px){
display: none;
}
`;

const FormBox = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
align-items: center;
height: 40rem;
width: 100%;
padding:0px 7rem;
margin-bottom: 5rem;
@media(max-width: 800px){
padding:5rem;
margin: 0px;
}
`;
const InputCurrency = styled.select`
 
  color: grey;
  font-size: 2rem;
  font-family: 'Raleway', sans-serif; 
  border-radius: 10px;
  height: 4rem;
  width: 100%;
  @media(max-width: 800px){
margin:1rem 0px;
}
`;
const InputAmount = styled.input`
padding: 0px 1rem ;
color: grey;
font-size: 2rem;
font-family: 'Raleway', sans-serif; 
border-radius: 6px;
height: 4rem;
width: 100%;
@media(max-width: 800px){
margin:1rem 0px;
}
`;
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
 @media(max-width: 800px){
margin:1rem 0px;
}
`;
class Calculater extends Component {
    constructor(props) {
        super(props);
        this.state = {Rates:{}, id: "", FeaturedNews: {},isLoaded: false};

    }

    componentDidMount() {
        fetch("http://dev.bit7pay.com/bit7pay/public/api/getAllRates")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data)
                    this.setState({
                        Rates: result.data,
                        isLoaded: true
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }
    render() {
        if (this.state.isLoaded)
            return (<Container>
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
                                lineColors={["#3682CE"]}
                                data={[
                                    [
                                        {x: 1, y: 13},
                                        {x: 2, y: 12},
                                        {x: 3, y: 15},
                                        {x: 4, y: 14},
                                        {x: 5, y: 12},
                                        {x: 6, y: 13},
                                        {x: 7, y: 15},
                                        {x: 8, y: 14},
                                        {x: 9, y: 16},
                                        {x: 10, y: 14},
                                        {x: 11, y: 13},
                                        {x: 12, y: 12},
                                        {x: 13, y: 15},
                                        {x: 14, y: 19},
                                        {x: 15, y: 16},
                                        {x: 16, y: 13},
                                        {x: 17, y: 12},
                                        {x: 18, y: 14},
                                        {x: 19, y: 16},
                                        {x: 20, y: 13},
                                    ]
                                ]}
                            />
                        </ChartBox>
                    </ReciptBox>
                    <CurrencyBox>
                        <CoinRateCard Rates={this.state.Rates}/>
                        <FormBox>
                            <InputAmount placeholder={"Enter Amount"}/>
                            <InputCurrency placeholder={"Select Currency"}>
                                <option value="BTC">BTC</option>
                                <option value="ETH">ETC</option>
                                <option value="LTC">LTC</option>
                                <option value="XRP">XRP</option>
                                <option value="BCH">BCH</option>
                                <option value="BCG">BCG</option>
                            </InputCurrency>
                            <Button>Exchange</Button>
                        </FormBox>
                    </CurrencyBox>
            </Container>)
        else {
            return(<Container><div class="loader"></div></Container>)
        }
    }
}


export default Calculater;