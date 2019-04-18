import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
         <div>
            <nav>
                <div className="nav-toggle-btn" onClick={(e) => this.handleClick(e)}>
                    <i className="eden-align-justify"></i>
                </div>

                <div className="navCon">
                    <ul className="menu">
                        <li><a href="">
                                <ul className="menu_tit">
                                    <li>
                                        <p>Explore</p>
                                    </li>
                                    <li><Link to="/"><i className="eden-home"></i></Link></li>
                                </ul>
                            </a></li>

                        <li><a href="">
                                <ul className="menu_tit">
                                    <li>
                                        <p>Block</p>
                                    </li>
                                    <li><Link to="/blocklist"><i className="eden-grid"></i></Link></li>
                                </ul>
                            </a></li>

                        <li><a href="">
                                <ul className="menu_tit">
                                    <li>
                                        <p>Transaction</p>
                                    </li>
                                    <li><Link to="/txlist"><i className="eden-map"></i></Link></li>
                                </ul>
                            </a></li>
                    </ul>
                    </div>
                </nav>

                <header className="header fixed">

                <div className="logoDiv">
                    <h1><a href=""><img src="../images/e-explorer2@4x.png" alt="logo"/></a></h1>
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

                </header>
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