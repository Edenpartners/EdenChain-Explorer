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

    handleSearch = () => {
        let search = this.searchTerm.value.trim();

        if (search.match(/^\d+$/)){
            let link = '/blockDetail/'+search;
            window.location = link;
            
        }
        else if (search.length==64){
            let link = '/txDetail/'+search;
            window.location = link;
            
        }
        else if (search.length==44){
            let link = '/txUserList/'+search;
            window.location = link;
        }
        
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
                        <h1><Link to="/"><img src="/images/e-explorer01.png" alt="logo"/></Link></h1>
                    </div>

                    <div className="serBox">
                        <div className="search">
                            <label >
                                <input type="text" className="searchTerm" placeholder="" ref={ el => this.searchTerm = el}/>
                            </label>
                            <a className="searchButton" onClick={this.handleSearch} >
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