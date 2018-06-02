import React, { Component } from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import About from "../about/about";
import charts from "../charts/chart";
import support from "../support/support"
import news from '../news/news';
import verification from '../verification/verification';
import supportcrypto from "../support-crypto/support-crypto"
import whatIsBtc from "../whatIsBtc/whatIsBtc"
import whatIsEth from '../whatIsEth/whatIsEth';
import {Route,Switch,} from 'react-router-dom';
import styled from "styled-components";
import { injectGlobal } from 'styled-components';
import Menu from "../Menu/Menu";
import Layouts from "../Layout/Layout";
import RateBar from "../Helper Components/Rate Bar";

injectGlobal`
  
  html{
  font-size: 10px;
  font-family: 'Raleway', sans-serif; 
  @media(max-device-width: 400px){
  font-size: 8px; 
  }
  }
  body {
    margin: 0;
  }
`;

const Main = styled.div`
height: 100%;
width: 100%;
`
class Home extends Component
{
    render(){
        return(
            <Main>
                <Header/>
                <Menu/>
                <Switch>
                    <Route exact strict path="/" component={Layouts}/>
                    <Route path="/about" component={About}/>
                    <Route path="/charts" component={charts}/>
                    <Route path='/help' component={support}/>
                    <Route path='/support' component={supportcrypto}/>
                    <Route path='/verification' component={verification}/>
                    <Route path='/news' component={news}/>
                    <Route path='/whatisbtc' component={whatIsBtc}/>
                    <Route path='/whatiseth' component={whatIsEth}/>
                </Switch>
                <About/>
                <Footer/>
            </Main>);
    }
}

export default Home;

