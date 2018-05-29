import React, { Component } from 'react';
import "./index.css";

class Menu extends Component{
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
                            <li className="navigation__item"><a href="#" className="navigation__link">About Us</a></li>
                            <li className="navigation__item"><a href="#" className="navigation__link">Rate chart</a></li>
                            <li className="navigation__item"><a href="#" className="navigation__link">News</a></li>
                            <li className="navigation__item"><a href="#" className="navigation__link">Help</a></li>
                            <li className="navigation__item"><a href="#" className="navigation__link">#support crypto</a></li>
                        </ul>
                    </nav>
            </div>

    )
    }
}

export default Menu;