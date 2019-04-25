import React, { Component } from 'react';
import Footer from '../Footer/footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import styles from './sub_transaction.scss';


class TransactionFullList extends Component {
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

                              <td width="10%"><a href="/txDtail">1</a></td>
                              <td width="10%"><a href="/txDtail">ddd</a></td>
                              <td width="20%" class="none"><a href="/txDtail">67887768687</a></td>
                              <td width="20%"><a href="/txDtail">2017 17:40:60</a></td>
                              <td width="20%"><a href="/txDtail">38</a></td>
                              <td width="20%"><a href="/txDtail">55</a></td>
                       
                          </tr>
                        </tbody>
                       </table>
                    </div>
                </section>

                </div>
             </div>
            </div>
            
                <Footer></Footer>
            
            </div>

        );
    }
};

export default TransactionFullList;