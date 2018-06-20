import React, { Component } from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Features from "../Features/Features";
import About from "../about/about";
import charts from "../charts/chart";
import support from "../support/support"
import news from '../news/news';
import whatIs from "../FAQs/WhatIs";
import whatIsEth from '../whatIsEth/whatIsEth';
import {Route,Switch,} from 'react-router-dom';
import styled from "styled-components";
import { injectGlobal } from 'styled-components';
import Menu from "../Menu/Menu";
import HomePage from "../HomePage/HomePage";
import RateBar from "../Helper Components/Rate Bar";
import "animate.css/animate.min.css";
import 'antd/dist/antd.css';

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
                <Menu/>
                <Switch>
                    <Route exact strict path="/" component={HomePage}/>
                    <Route path="/about" component={About}/>
                    <Route path="/charts" component={charts}/>
                    <Route path='/help' component={support}/>
                    <Route path='/features' component={Features}/>
                    <Route path='/news' component={news}/>
                    <Route path='/whatis' component={whatIs}/>
                    <Route path='/whatisEth' component={whatIsEth}/>
                </Switch>

            </Main>);
    }
}

export default Home;

