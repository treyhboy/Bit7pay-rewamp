import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import styled from 'styled-components';
import "./style.css";

const Block = styled.div`
display: flex;
justify-content: space-around ;
text-align: start;
padding: 30px 15px ;
@media(max-width:1000px){
visibility: hidden;
}
`;
const Logo = styled.img`
  position: relative;
  width: 250px;
  height: 150px;
  padding: 5px;
  margin:2% 15%;
  transform: translateY(-30%);
  @media(max-width:1000px){
  position:fixed;
  transform: translateX(-10%) translateY(-30%);
  margin: 1.8%;
  }
`;
const Space = styled.div`
flex-grow: 1;
`
const Head = styled.header`
display: flex;
justify-content: flex-end;
height: 10vh;
width:100%;   
z-index: 3;
position: absolute;
background-color: transparent;
@media(max-width:1000px){
position: fixed;
justify-content: center;
background-color: white;
}
`
const NavBox = styled.div`
display: flex;
position: relative;
right: 5%;
`

class Header extends Component {

    constructor(props)
    {
        super(props)
        this.state={value:window.location.pathname,loc:""}

    }

    render() {
        return (
            <Head>
                <Logo src={require(`../../img/logo-1.svg`)}/>
                <Space/>
                <NavBox>
                    <Block><NavLink to="/about" activeClassName="selected" className={"notselect"} >About us</NavLink></Block>
                    <Block><NavLink to="/charts" activeClassName="selected" className={"notselect"}>Rate chart</NavLink></Block>
                    <Block><NavLink to="/news" activeClassName="selected" className={"notselect"}>News</NavLink></Block>
                    <Block><NavLink to="/help" activeClassName="selected"className={"notselect"} >Help</NavLink></Block>
                    <Block ><NavLink to="/support" activeClassName="selected"className={"notselect"} id={"support"} >#SupportCrypto</NavLink></Block>
                </NavBox>
            </Head>
        );
    }
}

export default Header;