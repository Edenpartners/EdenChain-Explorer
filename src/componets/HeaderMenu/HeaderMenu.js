import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './header_menu.scss';

class HeaderMenu extends Component{

    constructor(){
        super();
        this.state = {showHeader:false};
    }

    handleClick(e){
        this.setState({showHeader: !this.state.showHeader});
        e.preventDefault();
    }

    render(){
        let header =  (
         <div className="HeaderMenu">
            <nav>
                <div className="nav-toggle-btn" title="Menu" onClick={(e) => this.handleClick(e)}>
                    <i className="eden-align-justify"></i>
                </div>

                <div className="navCon">
                    <ul className="menu">
                        <li><Link to="/">
                            <ul className="menu_tit" title="Home">
                                <li>
                                    <p>Explore</p>
                                </li>
                                <li><i className="eden-home"></i></li>
                            </ul>
                        </Link></li>

                        <li><Link to="/blocklist">
                            <ul className="menu_tit" title="Block">
                                <li>
                                    <p>Block</p>
                                </li>
                                <li><i className="eden-grid"></i></li>
                            </ul>
                        </Link></li>

                        <li><Link to="/txlist">
                            <ul className="menu_tit" title="Transaction">
                                <li>
                                    <p>Transaction</p>
                                </li>
                                <li><i className="eden-map"></i></li>
                            </ul>
                        </Link></li>
                    </ul>
                    </div>
                </nav>

                <div className="header fixed content">

                    <div className="logoDiv">
                        <h1><a href=""><img src="../images/e-explorer01.png" alt="logo"/></a></h1>
                    </div>

                    <div className="serBox">
                        <div className="search">
                            <label for="">
                                <input type="text" className="searchTerm" placeholder=""/>
                            </label>
                            <a className="searchButton">
                                <i className="eden-search"></i>
                            </a>
                        </div>
                    </div>

                    <div className="logoDiv">

                    </div>

                </div>
         </div>   
        )

        if(this.state.showHeader)
        {
            header = (
                <div className="active-nav">
                    {header}
                </div>
            );
        }

        return header;
    }
};


export default HeaderMenu;