import React, { Component } from 'react';
import Footer from '../SubFooter/footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import  './sub_transaction.scss';
import apis from '../../api/api';
import { Link } from "react-router-dom";

class TransactionUserList extends Component {
    constructor(){
      super();
      this.apis = new apis();
      this.state = {data:undefined,page:1, countperpage:14};
    
      
    }

    componentWillMount() {
        const { match: { params } } = this.props;
        this.params = params;
        this._requests = this.apis.searchKeyword(this.params.keyword, this.state.page,this.state.countperpage).then((data)=>
        {   
            console.log(data);             
            this.setState({data:data});
            this._requests = null;   
            
        }
        );
  }

  componentWillUnmount(){

  }

    render(){

          let data_list = [];

          if(this.state.data)
          {
              for(let [index,d] of this.state.data.data.transactions.entries())
              {
                  let date = new Date(d.timestamp*1000);
                  let link = "/txDetail/"+d.id;

                  data_list.push( (

                        <tr key={index}>

                            <td width="10%"><Link to={link}>{index}</Link></td>
                            <td width="10%"><Link to={link}>{d.id}</Link></td>
                            <td width="20%"><Link to={link}>{date.getUTCFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate()+" "+
                                        date.getUTCHours()+":"+date.getMinutes()+":"+date.getSeconds()+"(UTC)"}</Link></td>
                            <td width="20%" className="none"><Link to={link}>{d.before_owner[0]}</Link></td>
                            <td width="20%"><Link to={link}>{d.request_transaction_amount[0] && d.request_transaction_amount[0].address}</Link></td>
                            <td width="20%"><Link to={link}>{d.request_transaction_amount[0] && d.request_transaction_amount[0].amount}</Link></td>
                     
                        </tr>
                   
                  ));
              }
          }


        return (
            <div className="TransactionFullList wrapper subContainer">
                <HeaderMenu></HeaderMenu>

                <div className="container">

                <div className="fixed">
                <div className="content" id="fullCon">

                    <h3><i className="eden-box"></i>Transaction List<span>Data Information for Developer</span></h3>

                  <section className="tblWrapp">
                    
                    <div className="tbl-con tbl-header">
                      
                      <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                          <tr>
                            <th width="10%">NO</th>
                            <th width="10%">TX Hash</th>
                            <th width="20%">Create Time(UTC)</th>
                            <th width="20%" className="none">From</th>                          
                            <th width="20%">To</th>
                            <th width="20%">Amount</th>
                          </tr>
                        </thead>
                      </table>

                    </div>
                    <div className="tbl-con tbl-content" >
                      
                    <table cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        {data_list}
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

export default TransactionUserList;