import React, {Component} from 'react';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './sub_transaction.scss';

class TransactionDetail extends Component {
    render(){
        return (
            <div className="TransactionFullList wrapper subContainer">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                <div className="content" id="fullCon">

                    <h3><i className="eden-box"></i>Transaction List<span>Data Information for Developer</span></h3>

                  <section className="tblWrapp">
                    
                    <div className="tbl-con tbl-header">
                      
                      <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                          <tr>
                            <th width="10%">NO</th>
                            <th width="10%">TX Hash</th>
                            <th width="20%" class="none">Block NO</th>
                            <th width="20%">생성시간</th>
                            <th width="20%">Before_transaction_ids</th>
                            <th width="20%">Request_transaction_amount</th>
                          </tr>
                        </thead>
                      </table>

                    </div>



                    <div className="tbl-con tbl-content">
                      
                      <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                          <tr>

                              <td width="10%"><a href="">1</a></td>
                              <td width="10%"><a href="">ddd</a></td>
                              <td width="20%" class="none"><a href="">67887768687</a></td>
                              <td width="20%"><a href="">2017 17:40:60</a></td>
                              <td width="20%"><a href="">38</a></td>
                              <td width="20%"><a href="">55</a></td>
                       
                          </tr>
                        </tbody>
                       </table>
                    </div>
                </section>

                </div>
             </div>
            </div>
            </div>

        );
    }
};

export default TransactionDetail;