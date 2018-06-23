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
const Button = styled.div`
display: flex;
justify-content: space-around;
 align-items: center;
height: 5rem;
width: 15rem;
z-index: 2;
background-color:#3682CE ;
color: white;
font-size: 2rem;
font-family: 'Lato', sans-serif;
border: solid #3682CE;
border-radius: 1rem;
 @media(max-width: 800px){
margin:1rem 0px;
}
`;
class Calculater extends Component {
    constructor(props) {
        super(props);
        this.state = {Rates:{},coin: "BTC", FeaturedNews: {},isLoaded: false,Result:"5,53,429",input:1,CurrRate:""};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.calculate = this.calculate.bind(this);

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
    }
    handleClick(ev){
        var id = ev.target.id;
        var k = this.state.Rates.find((data)=>
        {return ((data.currency===id)&&(data.type==="BUY_RATE"))}).rate;
        this.setState(()=>{return {coin:id,CurrRate:k,Result:k}});
        console.log(this.state);
    }
    handleChange(e){
        this.setState({input: e.target.value});
    }
    calculate()
    {
        var res = this.state.input*this.state.CurrRate;
        this.setState({Result:res})
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
                            <Button onClick={this.calculate}>Exchange</Button>
                        </FormBox>
                    </ReciptBox>
                </Fade>
                <Fade right>
                    <CurrencyBox>
                        <CoinRateCard Rates={this.state.Rates} coin={this.state.coin} fun={this.handleClick}/>
                        <ChartBox>
                            <LineChart
                                width={320}
                                interpolate={'cardinal'}
                                height={150}
                                lineColors={["white"]}
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
                    </CurrencyBox>
                </Fade>
            </Container>)
        else {
            return(<Container><div class="loader"></div></Container>)
        }
    }
}


export default Calculater;