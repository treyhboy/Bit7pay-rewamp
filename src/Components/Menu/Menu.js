import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./index.css";

class Menu extends Component{
    constructor(props) {
        super(props);
        this.uncheck = this.uncheck.bind(this);

    }
    uncheck()
    {
        console.log("in fun");
        document.getElementById('navi-toggle').checked = false;
    }
    render()
    {
        return(
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                    <label for="navi-toggle" className="navigation__button">
                        <span className="navigation__icon">&nbsp;</span>
                    </label>

                    <div className="navigation__background">&nbsp;</div>

                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                            <li className="navigation__item"><Link to='/' className="navigation__link" onClick={this.uncheck} >Home</Link></li>
                            <li className="navigation__item"><Link to='/about' className="navigation__link" onClick={this.uncheck} >About Us</Link></li>
                            <li className="navigation__item"><Link to='/charts' className="navigation__link" onClick={this.uncheck}>Rate chart</Link></li>
                            <li className="navigation__item"><Link to='/news' className="navigation__link" onClick={this.uncheck}>News</Link></li>
                            <li className="navigation__item"><Link to='/help' className="navigation__link" onClick={this.uncheck}>Help</Link></li>
                            <li className="navigation__item"><Link to='/whatis' className="navigation__link" onClick={this.uncheck}>FAQs</Link></li>
                        </ul>
                    </nav>
            </div>

    )
    }
}

export default Menu;