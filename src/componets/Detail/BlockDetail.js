import React, {Component} from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './sub_transaction.scss';

class TransactionDetail extends Component {
    render(){
        return (
            <div className="TransactionDetail wrapper subContainer">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                

                    <h3><i className="eden-database"></i>Transaction Detail <span>숫자</span></h3>
                    <div class="detailBox">
                        <h4>hihihihihihihih ( Block Number ) <span>33</span></h4>

                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>
                                <tr class="">
                                    <th>Block Height</th>
                                    <td>sdfsfsd</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Time Stamp</th>
                                    <td>2019/04/21 08:00:00(UTC)</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Hash</th>
                                    <td>asdfasdfsdfasdf</td>
                                </tr>
                                <tr></tr>

                                <tr>
                                    <th>Transaction</th>
                                    <td><a href="">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                                        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                                        hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</a></td>
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