import React, { Component } from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import about from "../about/about";
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

injectGlobal`
  
  html{
  font-size: 10px;
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
                <div>
                </div>
                <Menu/>
                <Switch>
                    <Route path="/about" component={about}/>
                    <Route path="/charts" component={charts}/>
                    <Route path='/help' component={support}/>
                    <Route path='/support' component={supportcrypto}/>
                    <Route path='/verification' component={verification}/>
                    <Route path='/news' component={news}/>
                    <Route path='/whatisbtc' component={whatIsBtc}/>
                    <Route path='/whatiseth' component={whatIsEth}/>
                </Switch>
                <Footer/>
            </Main>);
    }
}

export default Home;

