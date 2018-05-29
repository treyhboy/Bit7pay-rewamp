import React, { Component } from 'react';
import styled from "styled-components";

const Sec = styled.div`
position: relative;
height: 100vh;
width: 100vh;
`
const Background = styled.img`
height: 100vh;
width: 100vw;
`
class about extends Component
{
    render(){
        return(<div>
                <Background src={require('../../img/back__.jpg')}/>
            <Sec/>

            </div>
       );
    }
}

export default about;