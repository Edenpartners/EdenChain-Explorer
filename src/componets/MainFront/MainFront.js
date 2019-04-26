import React, {Component} from 'react';
import TxDayChart from '../Charts/TxDayChart';
import TxHourChart from '../Charts/TxHourChart';
import BlockDayChart from '../Charts/BlockDayChart';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Footer from '../Footer/footer';
import BlockHeightBox from '../Box/BlockHeightBox';
import TotalTransactionBox from '../Box/TotalTransactionBox';
import LastInfoBox from '../Box/LastInfoBox';
import TransactionLastList from '../Transaction/TransactionLastList';
import BlockLastList from '../Block/BlockLastList';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './flex_index.scss';

import { Pagination } from 'semantic-ui-react'


class MainFront extends Component {
    render(){
        
        return (
        <div className="MainFront wrapper">

           <HeaderMenu></HeaderMenu>
    
    
            <div className="container">
    
    
                <div className="fixed">
                    <div className="fullCon" id="fullCon">
                      
                        <div className="mainContent mainContent01">
                            <div className="mainCon mainCon01">
    
                                <h3><i className="eden-activity"></i>DASHBOARD SURMMARY</h3>
    
                                <div className="dashCon summary">
                                    <BlockHeightBox></BlockHeightBox>
                                    <TotalTransactionBox></TotalTransactionBox>
                                    <LastInfoBox></LastInfoBox>                    
                                </div>
    
                            </div>
    
                            <div className="mainCon mainCon02">
    
                                <h3><i className="eden-bar-chart-2"></i>DASHBOARD CHART</h3>
    
                                <div className="dashCon summary">                                    
                                    <TxDayChart></TxDayChart>
                                    <TxHourChart></TxHourChart>
                                    <BlockDayChart></BlockDayChart>
                                </div>
    
                            </div>
                        </div>
    
    
                        
                        <div className="mainContent mainContent02">
                            <TransactionLastList></TransactionLastList>    
                            <BlockLastList></BlockLastList>
                        </div>
                        
                    </div>
                </div>
    
    
    
            </div>
            <Footer></Footer>
        </div>


        )
    }
};


export default MainFront;