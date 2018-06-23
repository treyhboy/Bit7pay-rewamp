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
font-family: 'Lato', sans-serif; 
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
padding: 10rem 0px;
@media(max-width: 800px){
padding:0px;
}
`;
const ResultText = styled.span`
font-size: 5em;
text-align: center;
font-family: 'Lato', sans-serif;
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
font-family: 'Lato', sans-serif;
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
padding-bottom: 3em;
@media(max-width: 800px){
display: none;
}
`;

const FormBox = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
align-items: center;
height: 30rem;
width: 100%;
padding:0px 7rem;
margin-bottom: 6rem;
@media(max-width: 800px){
padding:5rem;
margin: 0px;
}
`;
const InputAmount = styled.input`
padding: 0px 1rem ;
color: #BDCCDB;
font-size: 2rem;
font-family: 'Lato', sans-serif;
border-radius: 6px;
height: 5rem;
width: 100%;
box-shadow: none;
  border: solid #BDCCDB;
  outline: none;
@media(max-width: 800px){
margin:1rem 0px;
}
`;
const Toggle = styled.div`
display: flex;
justify-content: center;
 align-items: center;
height: 5rem;
width: 16rem;
z-index: 2;
background-color:white;
color: white;
font-size: 2rem;
font-family: 'Lato', sans-serif;
border: solid #3682CE;
border-radius: 1rem;
 @media(max-width: 800px){
margin:1rem 0px;
}`;
const Buy = styled.div`
display: flex;
justify-content: center;
 align-items: center;
height: 100%;
width: 50%;
color: ${props=>{return props.color?"white":"#3682CE"}};
background-color:${props=>props.color};
font-size: 2rem;
font-family: 'Lato', sans-serif;
transition: .3s;
 `;
const Sell = styled.div`
display: flex;
justify-content: center;
 align-items: center;
height: 100%;
width: 50%;
background-color:${props=>props.color};
color: ${props=>{return props.color?"white":"#3682CE"}};
font-size: 2rem;
font-family: 'Lato', sans-serif;
transition: .3s;
 `;
class Calculater extends Component {
    constructor(props) {
        super(props);
        this.state = {Rates:{},coin: "",toggle:"BUY_RATE",isLoaded: false,Result:"",input:1,CurrRate:"",graphData:{},calLoaded:false};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);

    }

    componentDidMount() {
        fetch("https://dev.bit7pay.com/bit7pay/public/api/getAllRates")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data)

                    var k = result.data.find((data)=>
                    {return ((data.currency==="BTC")&&(data.type==="BUY_RATE"))}).rate;
                    console.log(k);
                    this.setState({
                        coin:"BTC",
                        CurrRate:k,
                        Result:k,
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
        fetch(`https://dev.bit7pay.com/bit7pay/public/api/getBuyRateHistoryInDesc?period=1W&currency=BTC`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data)
                    var k = result.data.map((item)=>{return {x:item.updatedOn,y:item.newValue}})
                    this.setState({graphData:k,calLoaded:true});
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }
    handleClick(ev){
        var id = ev.target.id;
        var k = this.state.Rates.find((data)=>
        {return ((data.currency===id)&&(data.type===this.state.toggle))}).rate;
        this.setState(()=>{return {coin:id,CurrRate:k,Result:k}});
        fetch(`https://dev.bit7pay.com/bit7pay/public/api/getBuyRateHistoryInDesc?period=1W&currency=${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data)
                    var k = result.data.map((item,index)=>{return {x:item.updatedOn,y:item.newValue}})
                    this.setState({graphData:k,calLoaded:true});
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
        console.log(this.state);
    }
    handleChange(e){
        var res = Math.round(e.target.value*this.state.CurrRate);
        this.setState({input: e.target.value,Result:res});
    }
    toggle(ev)
    {
        var key = ev.target.id;
        var k = this.state.Rates.find((data)=>
        {return ((data.currency===this.state.coin)&&(data.type===key))}).rate;
        this.setState(()=>{return {CurrRate:k,Result:k,toggle:key}});
    }
    render() {
        if (this.state.isLoaded)
            return (<Container>
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
                                Rs {this.state.Result}
                            </ResultText>
                            <NormalText>
                                from your pocket
                            </NormalText>
                        </ResultBox>
                        <FormBox>
                            <InputAmount placeholder={"Enter Amount"} onChange={this.handleChange} value={this.state.input}/>
                            <Toggle >
                                <Buy id={"BUY_RATE"} color={this.state.toggle==="BUY_RATE"?"#3682CE":""} onClick={this.toggle}>Buy</Buy>
                                <Sell id={"SELL_RATE"} color={this.state.toggle==="SELL_RATE"?"#3682CE":""} onClick={this.toggle}>Sell</Sell>
                            </Toggle>
                        </FormBox>
                    </ReciptBox>
                </Fade>
                <Fade right>
                    <CurrencyBox>
                        <CoinRateCard Rates={this.state.Rates} coin={this.state.coin} fun={this.handleClick} mode={this.state.toggle}/>
                        <ChartBox>
                            {this.state.calLoaded? <LineChart
                                    width={300}
                                    interpolate={'cardinal'}
                                    height={150}
                                    lineColors={["white"]}
                                    data={[
                                        this.state.graphData
                                    ]}
                                />:<div class="loader"></div>
                            }
                            }
                        </ChartBox>
                    </CurrencyBox>
                </Fade>
            </Container>)
        else {
            return(<Container><div class="loader"></div></Container>)
        }
    }
}


export default Calculater;