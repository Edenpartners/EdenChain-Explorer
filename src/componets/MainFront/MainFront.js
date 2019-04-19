import React, {Component} from 'react';
import TxDayChart from '../Charts/TxDayChart';
import TxHourChart from '../Charts/TxHourChart';
import BlockDayChart from '../Charts/BlockDayChart';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import BlockHeightBox from '../Box/BlockHeightBox';
import TotalTransactionBox from '../Box/TotalTransactionBox';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './flex_index.scss';


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
                                    <div className="cont cont03">
                                        <h5>TPS / Block Time</h5>
                                        <p>2019.03.22<span>17:40</span></p>
                                        <div className="more"><a href="">Read More</a></div>
                                    </div>
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
                            <div className="mainCon mainCon01">
                                <h3>
                                    <span className="titL">                                 
                                    <i className="eden-box"></i>Block List</span>
                                    <span className="titR">
                                        
                                        <Link to="/blocklist">
                                            <button type="button">view all</button>
                                        </Link> </span>
                                </h3>
    
    
                                <div className="tables01 conT">
                                    
                                    <table border="0" cellpadding="0" cellspacing="0">
    
    
                                        <tbody>
                                            <tr className="col">
                                                <th width="40%">
                                                    <span>Block Number</span>
                                                </th>
    
                                                <th width="30%">
                                                    <span>Transaction NO</span>
                                                </th>
    
                                                <th width="20%">
                                                    <span>Block Hash</span>
                                                </th>
                                                <th width="10%">Doc</th>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td>
                                                    <span>888</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td>
                                                    <span>888</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td>
                                                    <span>888</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td>
                                                    <span>888</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td>
                                                    <span>888</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td>
                                                    <span>888</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td>
                                                    <span>888</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                        </tbody>
    
    
                                        <tfoot>
    
    
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
    
                            <div className="mainCon mainCon02">
                                <h3>
                                    <span className="titL"><i className="eden-database"></i>Transaction List</span>
                                    <span className="titR"><Link to="/txlist"><button type="button">view all</button></Link> </span>
                                </h3>
                                <div className="tables01 conT">
                                    
                                    <table border="0" cellpadding="0" cellspacing="0">
    
    
                                        <tbody>
                                            <tr className="col">
                                                <th width="50%">
                                                    <span>Transaction ID</span>
                                                </th>
    
                                                <th width="40%">
                                                    <span>Time</span>
                                                </th>
    
                                                <th width="10%">Doc</th>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td className="blockId">
                                                    <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                                </td>
    
                                                <td>
                                                    <span>666</span>
                                                </td>
    
                                                <td className="downInfo">
                                                    <a href=""><i className="eden-file"></i></a>
                                                </td>
                                            </tr>
    
                                        </tbody>
    
    
                                        <tfoot>
    
    
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
    
    
                <script type="text/javascript" src="js/chart.js"></script>
    
            </div>
    
            <footer>
    
            </footer>
        </div>


        )
    }
};


export default MainFront;