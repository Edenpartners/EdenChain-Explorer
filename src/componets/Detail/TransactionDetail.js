import React, {Component} from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './sub_transaction.scss';

class TransactionDetail extends Component {
    render(){

        // const decimal = document.getElementById('decimal');
        // document.write(decimal);
        // document.write(decimal.toFixed(6));

        return (

            <div className="TransactionDetail wrapper subContainer">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                

                    <h3><i className="eden-database"></i>Transaction Detail</h3>
                    <div class="detailBox">
                        <h4>hihihihihihihih ( Transaction ID ) <span><a href="">33</a></span></h4>

                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                <tr class="">
                                    <th>TX ID</th>
                                    <td>
                                        <span class="">sdfsfsd</span>
                                        <span class=""><a href=""><i class="eden-external-link"></i></a></span>
                                    </td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Time Stamp</th>
                                    <td>2019/04/21 08:00:00(UTC)</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Operation</th>
                                    <td>CREATE | TRANSFER</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Asset ID</th>
                                    <td>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>From ADDR</th>
                                    <td>
                                        <span class="">sdfsfsd</span>
                                        <span class=""><a href=""><i class="eden-external-link"></i></a></span>
                                    </td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>To ADDR</th>
                                    <td>
                                        <span class="">sdfsfsd</span>
                                        <span class=""><a href=""><i class="eden-external-link"></i></a></span>
                                    </td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Amount</th>
                                    <td id="decimal">12.345</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
               </div>
             </div>


        );
    }
};

export default TransactionDetail;