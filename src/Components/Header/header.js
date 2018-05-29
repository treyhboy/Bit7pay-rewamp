import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Block = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding: 20px;
margin:10px;

@media(max-width:1000px){
visibility: hidden;
}

`;
const Item = styled.span`
font-size: 2.3vh;
color: this.props.col||grey;
text-decoration: none;
font-family: 'Raleway', sans-serif; 

&:hover{
color:#f6ae2d;
}
`
const Logo = styled.img`
  position: relative;
  width: 200px;
  height: 100px;
  padding: 5px;
  margin: 1.8%;
  transform: translateY(-30%);
  @media(max-width:1000px){
  position:fixed;
  
  transform: translateX(-10%) translateY(-30%);
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
z-index: 1000;
@media(max-width:1000px){
position: fixed;
justify-content: center;
background-color: white;
}

`

class Header extends Component {

    constructor(props)
    {
        super(props)
        this.state={value:window.location.pathname,loc:""}
        this.handleclick = this.handleclick.bind(this);

    }
    handleclick(event)
    {
        var path = window.location.pathname;
        if(this.state.loc!=="")
        {this.state.loc.style.color = "grey";}
        else
        {console.log(document.getElementById('about-1').style.color);
        document.getElementById('about-1').style.color = "grey";
            console.log(document.getElementById('about-1').style.color);
        }
        var loc = event.target;
      this.setState({value:path,loc});
        event.target.style.color = "#F6AE2D";
    }
    render() {
        return (
            <Head>
                <Logo src={require(`../../img/logo-1.svg`)}/>
                <Space/>
                <Block><Link to="/about" style={{textDecoration:"none ",color:"#F6AE2D"}}><Item  onClick={this.handleclick}  id="about-1">About us</Item></Link></Block>
                <Block><Link to="/charts" style={{textDecoration:"none",color: "grey"}}><Item onClick={this.handleclick}>Rate chart</Item></Link></Block>
                <Block><Link to="/news" style={{textDecoration:"none",color: "grey"}}><Item onClick={this.handleclick}>News</Item></Link></Block>
                <Block><Link to="/help" style={{textDecoration:"none",color: "grey"}}><Item onClick={this.handleclick}>Help</Item></Link></Block>
                <Block><Link to="/support" style={{textDecoration:"none",color: "#44CCFF"}}><Item colo={"#44CCFF"} onClick={this.handleclick}>#SupportCrypto</Item></Link></Block>

            </Head>
        );
    }
}

export default Header;
