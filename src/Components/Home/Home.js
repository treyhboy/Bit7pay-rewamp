import React, { Component } from 'react';
import Features from "../Features/Features";
import About from "../about/about";
import contact from "../Contact/contact";
import charts from "../charts/chart";
import news from '../news/news';
import Privacy from "../Privacy/Privacy";
import Aml from "../Aml/Aml";
import Terms from "../Terms/Terms";
import Kyc from "../Kyc/Kyc";
import whatIs from "../FAQs/WhatIs";
import Faqs from "../FAQs/Faqs";
import Fees from "../Fees/Fees";
import {Route,Switch,} from 'react-router-dom';
import styled from "styled-components";
import { injectGlobal } from 'styled-components';
import Menu from "../Menu/Menu";
import HomePage from "../HomePage/HomePage";
import 'antd/dist/antd.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

injectGlobal`
  
  html{
  font-size: 10px;
  font-family: 'Lato', sans-serif;
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
                <ToastContainer/>
                <Menu/>
                <Switch>
                    <Route exact strict path="/" component={HomePage}/>
                    <Route path="/about" component={About}/>
                    <Route path="/charts" component={charts}/>
                    <Route path='/features' component={Features}/>
                    <Route path='/news' component={news}/>
                    <Route path='/coins' component={whatIs}/>
                    <Route path='/Faqs' component={Faqs}/>
                    <Route path='/contact' component={contact}/>
                    <Route path='/privacy' component={Privacy}/>
                    <Route path='/Aml' component={Aml}/>
                    <Route path='/Terms' component={Terms}/>
                    <Route path='/Kyc' component={Kyc}/>
                    <Route path='/Fees' component={Fees}/>
                </Switch>

            </Main>);
    }
}

export default Home;

