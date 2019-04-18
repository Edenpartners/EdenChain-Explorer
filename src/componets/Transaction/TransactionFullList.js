import React, {Component} from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

class TransactionFullList extends Component {
    render(){
        return (
            <div className="wrapper">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                    <div className="tables01">
                        <h3><i className="eden-database"></i>Transaction Detail</h3>
                        <table border="0" cellpadding="0" cellspacing="0">
                            <thead>
                            </thead>

                            <tbody>
                                <tr className="col">
                                    <th rowspan="1" width="20%">
                                        <span>Block Height</span>
                                    </th>
                                    
                                    <th width="40%">
                                        <span>ID</span>
                                    </th>

                                    <th width="40%">
                                        <span>Timestamp</span>
                                    </th>
                                </tr>

                                <tr>  
                                    <td rowspan="4" className="blockId">
                                        <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                    </td>

                                    <td>
                                        <span>666</span>
                                    </td>

                                    <td>
                                        <span>888</span>
                                    </td>
                                </tr>

                                <tr className="col col-1">
                                    <th>
                                        <span>Before_transaction_ids</span>
                                    </th>

                                    <th>
                                        <span>Request_transaction_amount</span>
                                    </th>
                                </tr>

                                <tr>  
                                    <td>
                                        <span>222222</span>
                                    </td>

                                    <td>
                                        
                                        <span>22222 </span>
                                        <p className="tc"><i className="eden-chevrons-right"></i>count : sdfsdfsdf85</p>
                                    </td>
                                </tr>

                                <tr className="col col-2">  
                                    <td colspan="2">
                                        <p><span>Operation : </span> jj kjhi</p>
                                    </td>
                                </tr>

                            </tbody>

                            <tbody>
                                    <tr className="col">
                                        <th rowspan="1" width="20%">
                                            <span>Block Height</span>
                                        </th>
                                        
                                        <th width="40%">
                                            <span>ID</span>
                                        </th>

                                        <th width="40%">
                                            <span>Timestamp</span>
                                        </th>
                                    </tr>

                                <tr>  
                                    <td rowspan="4" className="blockId">
                                        <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                    </td>

                                    <td>
                                        <span>666</span>
                                    </td>

                                    <td>
                                        <span>888</span>
                                    </td>
                                </tr>

                                    <tr className="col col-1">
                                        <th>
                                            <span>Before_transaction_ids</span>
                                        </th>

                                        <th>
                                            <span>Request_transaction_amount</span>
                                        </th>
                                    </tr>

                                <tr>  
                                    <td>
                                        <span>222222</span>
                                    </td>

                                    <td>
                                       
                                        <span>22222 </span>
                                        <p className="tc"><i className="eden-chevrons-right"></i>count : sdfsdfsdf85</p>
                                    </td>
                                </tr>

                                <tr className="col col-2">  
                                    <td colspan="2">
                                        <p><span>Operation : </span> jj kjhi</p>
                                    </td>
                                </tr>

                            </tbody>

                            <tbody>
                                    <tr className="col">
                                        <th rowspan="1" width="20%">
                                            <span>Block Height</span>
                                        </th>
                                        
                                        <th width="40%">
                                            <span>ID</span>
                                        </th>

                                        <th width="40%">
                                            <span>Timestamp</span>
                                        </th>
                                    </tr>

                                <tr>  
                                    <td rowspan="4" className="blockId">
                                        <span>sfwefwefwefwefwefwfwefwfwefwef</span>
                                    </td>

                                    <td>
                                        <span>666</span>
                                    </td>

                                    <td>
                                        <span>888</span>
                                    </td>
                                </tr>

                                    <tr className="col col-1">
                                        <th>
                                            <span>Before_transaction_ids</span>
                                        </th>

                                        <th>
                                            <span>Request_transaction_amount</span>
                                        </th>
                                    </tr>

                                <tr>  
                                    <td>
                                        <span>222222</span>
                                    </td>

                                    <td>
                                        
                                        <span>22222 </span>
                                        <p className="tc"><i className="eden-chevrons-right"></i>count : sdfsdfsdf85</p>
                                    </td>
                                </tr>

                                <tr className="col col-2">  
                                    <td colspan="2">
                                        <p><span>Operation : </span> jj kjhi</p>
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

        );
    }
};

export default TransactionFullList;